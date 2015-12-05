import React from 'react';

class AlertComponent extends React.Component {

  render() {
    if (this.props.text) {
      return (
        <div className="alert alert-info alert-dismissible" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          {this.props.text}
        </div>
      )
    }

    return false;
  }
}

export default AlertComponent;