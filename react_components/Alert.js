import React from 'react';

class AlertComponent extends React.Component {

  render() {
    if (this.props.text) {
      return (
        <div className="alert alert-info cardComponent">
            <a href="#" className="close cardComponent" data-dismiss="alert">&times;</a>
            {this.props.text}
        </div>
      )
    } else {
      return false;
    }
  }
}

export default AlertComponent;