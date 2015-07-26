import React from 'react';

class BioComponent extends React.Component {

  render() {
    return (
      <p className="cardComponent">{this.props.text}</p>
    )
  }
}

export default BioComponent;