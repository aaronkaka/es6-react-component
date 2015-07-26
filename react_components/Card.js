import React from 'react';
import Avatar from './Avatar.js';
import Bio from './Bio.js';
import Alert from './Alert.js';

class CardComponent extends React.Component {

  constructor(props) {

    super();

    this.state = {
      data: props.data,
      evented: document.getElementById(props.data.eventedElem)
    };

    this.deleteBio = this.deleteBio.bind(this);
    this._deleteBio = this._deleteBio.bind(this);
  }

  deleteBio() {

    this.state.data.bio = '[deleted]';
    this.setState(this.state);
    if (this.state.evented) {
      this.state.evented.dispatchEvent(new CustomEvent('bioDeleted', { detail: this.state.data.username } ));
    }
  }

  _deleteBio(e) {

    if (e.detail !== this.state.data.username) {
        this.state.alerts = e.detail + ' deleted their bio!';
        this.setState(this.state);
    }
  }

  componentDidMount() {

    if (this.state.evented) {
      this.state.evented.addEventListener('bioDeleted', this._deleteBio);
    }
  }

  componentWillUnmount() {

    if (this.state.evented) {
      this.state.evented.removeEventListener('bioDeleted', this._deleteBio);
    }
  }

  render() {

    var data = this.state.data;

    return (
      <div className="panel panel-default cardComponent">
         <div className="panel-heading cardComponent"><h4 className="cardComponent">{data.username}</h4></div>
          <div className="panel-body cardComponent">
            <Avatar imgSrc={data.avatar || 'http://placehold.it/150x150'} />
            <div className="clearfix cardComponent"></div>
            <hr />
            <Bio text={data.bio} />
            <hr className="cardComponent" />
            <button className="btn btn-danger cardComponent" onClick={this.deleteBio}>Delete bio</button>
            <br /><br />
            <Alert text={this.state.alerts} />

            <form>
              <div className="input-group cardComponent">
                <div className="input-group-btn cardComponent">
                <button className="btn btn-default cardComponent">+1</button><button className="btn btn-default cardComponent">s</button>
                </div>
                <input type="text" className="form-control" placeholder="Add a comment.." />
              </div>
            </form>

          </div>
      </div>
    )
  }

}

export default CardComponent;