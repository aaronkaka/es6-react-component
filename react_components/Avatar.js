import React from 'react';

class AvatarComponent extends React.Component {

  render() {
    return (
      <img src={this.props.imgSrc} className="img-circle pull-right cardComponent" />
    )
  }
}

export default AvatarComponent;