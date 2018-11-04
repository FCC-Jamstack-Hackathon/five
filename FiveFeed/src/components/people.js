import React from 'react';

import './people.css';

export default class People extends React.Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('render?', this.props === nextProps);
  //   return this.props !== nextProps;
  // }

  render() {
    const {
      src,
      isLast,
      isCenter,
    } = this.props;

    const style = {};
    if (isLast) {
      style.marginRight = 0;
    }

    return (
      <img style={style} alt="abc" src={src} width={isCenter ? 200 : undefined} />
    )
  }
}
