import React, { PropTypes } from 'react';
import Avatar from './Avatar';
import Bio from './Bio';
import Alert from './Alert';
import {intlShape, injectIntl, defineMessages} from 'react-intl';

const messages = defineMessages({
  commentPlaceholder: {
    id: 'comment-placeholder',
    description : 'placeholder for comment field',
    defaultMessage: 'Add a comment...'
  },
  deleteBio: {
    id: 'delete-bio',
    description: 'button text for deleting bio',
    defaultMessage: 'Delete bio'
  },
  deleteConfirm: {
    id: 'delete-confirmation',
    description: 'confirmation message that bio is deleted',
    defaultMessage: '[deleted]'
  }
});


class CardComponent extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      data: props.data,
      usernameDisplay: props.data.username,
      likes: 0,
      likeDisplay: '',
      currentComment: '',
      evented: document.getElementById(props.data.eventedElem)
    };

    const MAX_USERNAME_LENGTH = 30;

    if (this.state.usernameDisplay.length > MAX_USERNAME_LENGTH) {
      this.state.usernameDisplay = this.state.usernameDisplay.substring(0, MAX_USERNAME_LENGTH);
    }

    // Events
    this.BIO_DELETED_EVENT = 'card-bioDeleted';
    this.LIKE_EVENT = 'card-liked';
    this.SHARE_COMMENT_EVENT = 'card-comment';

    // Manual Binding
    this.deleteBio = this.deleteBio.bind(this);
    this._deleteBio = this._deleteBio.bind(this);
    this.like = this.like.bind(this);
    this.shareComment = this.shareComment.bind(this);
    this._commentChange = this._commentChange.bind(this);
  }

  deleteBio() {

    this.state.data.bio = messages.deleteConfirm.defaultMessage;
    this.setState(this.state);
    if (this.state.evented) {
      this.state.evented.dispatchEvent(new CustomEvent(this.BIO_DELETED_EVENT, {
        detail: {
          userId: this.state.data.userId,
          username: this.state.data.username
        }
      }));
    }
  }

  _deleteBio(e) {

    if (e.detail.userId !== this.state.data.userId) {
      this.state.alerts = e.detail.username + ' deleted their bio!';
      this.setState(this.state);
    }
  }

  like(e) {

    // don't refresh page on button press
    e.preventDefault();

    this.state.likes++;
    this.state.likeDisplay = '+' + this.state.likes;
    this.setState(this.state);

    if (this.state.evented) {
      const likeEvent = {
        detail: {
          userId: this.state.data.userId,
          username: this.state.data.username,
          likes: this.state.likes
        }
      };
      this.state.evented.dispatchEvent(new CustomEvent(this.LIKE_EVENT, likeEvent));
    }
  }

  shareComment(e) {

    // don't refresh page on button press
    e.preventDefault();

    if (this.state.evented) {
      // simply event out as there are a myriad of use cases for handling this event (e.g. private or moderated comments)
      const commentEvent = {
        detail: {
          userId: this.state.data.userId,
          username: this.state.data.username,
          comment: this.state.currentComment
        }
      };
      this.state.evented.dispatchEvent(new CustomEvent(this.SHARE_COMMENT_EVENT, commentEvent));
    }
  }

  _commentChange(e) {
    this.setState({currentComment: e.target.value});
  }

  componentDidMount() {

    if (this.state.evented) {
      this.state.evented.addEventListener(this.BIO_DELETED_EVENT, this._deleteBio);
    }
  }

  componentWillUnmount() {

    if (this.state.evented) {
      this.state.evented.removeEventListener(this.BIO_DELETED_EVENT, this._deleteBio);
    }
  }

  render() {

    const {formatMessage} = this.props.intl;
    const data = this.state.data;

    return (
      <div className="panel panel-default cardComponent">
         <div className="panel-heading cardComponent">
           <h4 className="cardComponent">{this.state.usernameDisplay}
            <a href="#"> <span className="badge">{this.state.likeDisplay}</span></a>
           </h4>
         </div>
          <div className="panel-body cardComponent">
            <Avatar imgSrc={data.avatar || 'http://placehold.it/150x150'} />
            <div className="clearfix cardComponent"></div>
            <hr />
            <Bio text={data.bio === messages.deleteConfirm.defaultMessage ? formatMessage(messages.deleteConfirm) : data.bio} />
            <hr className="cardComponent" />
            <button className="btn btn-danger cardComponent" onClick={this.deleteBio}>
                {formatMessage(messages.deleteBio)}
            </button>
            <br /><br />
            <Alert text={this.state.alerts} />

            <form>
              <div className="input-group cardComponent">
                <div className="input-group-btn cardComponent">
                  <button ref="likeButton" className="btn btn-default cardComponent shallowRenderRef" onClick={this.like}>+1</button>
                  <button ref="shareCommentButton" className="btn btn-default cardComponent" onClick={this.shareComment}>
                    <i className="icon-export-1" />
                  </button>
                </div>
                <input type="text" className="form-control" placeholder={formatMessage(messages.commentPlaceholder)}  onChange={this._commentChange} />
              </div>
            </form>

          </div>
      </div>
    )
  }

}

CardComponent.propTypes = {
  intl: intlShape.isRequired,
  data: PropTypes.shape({
    eventedElem: PropTypes.string,
    targetElem: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    bio: PropTypes.string,
    avatar: PropTypes.string,
    locale: PropTypes.string
  })
};

export default injectIntl(CardComponent); // Inject this.props.intl into the component context
