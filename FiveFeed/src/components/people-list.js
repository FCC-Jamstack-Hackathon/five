import React from 'react';

import './people-list.css';
import People from './People';

export default class PeopleList extends React.Component {
  constructor() {
    super();
    
    this.onScroll = this.onScroll.bind(this);
    this.ref = React.createRef();

    this.state = {
      centerIndex: 0,
    }
  }

  componentDidMount() {
    // Set initial scroll position
    console.log(this.ref.current);
  }
  
  onScroll(e) {
    const newCenterIndex = Math.floor((e.target.scrollLeft + 133 / 2) / 133);
    if (this.state.centerIndex !== newCenterIndex) {
      this.setState({
        centerIndex: newCenterIndex,
      });
    }
  }

  render() {
    const { centerIndex } = this.state;

    return (
      <div className="peopleList" onScroll={this.onScroll} ref={this.ref}>
        <People src="https://randomuser.me/api/portraits/men/6.jpg" isCenter={centerIndex === 0} />
        <People src="https://randomuser.me/api/portraits/men/56.jpg" isCenter={centerIndex === 1} />
        <People src="https://randomuser.me/api/portraits/men/85.jpg" isCenter={centerIndex === 2} />
        <People src="https://randomuser.me/api/portraits/men/33.jpg" isCenter={centerIndex === 3} />
        <People src="https://randomuser.me/api/portraits/women/39.jpg" isCenter={centerIndex === 4} />
        <People src="https://randomuser.me/api/portraits/men/22.jpg" isCenter={centerIndex === 5} />
        <People src="https://randomuser.me/api/portraits/men/66.jpg" isCenter={centerIndex === 6} />
        <People src="https://randomuser.me/api/portraits/men/78.jpg" isCenter={centerIndex === 7} />
        <People src="https://randomuser.me/api/portraits/men/53.jpg" isCenter={centerIndex === 8} />
        <People src="https://randomuser.me/api/portraits/men/49.jpg" isCenter={centerIndex === 9} />
        <People src="https://randomuser.me/api/portraits/women/40.jpg" isCenter={centerIndex === 10} />
        <People src="https://randomuser.me/api/portraits/women/42.jpg" isCenter={centerIndex === 11} />
        <People src="https://randomuser.me/api/portraits/women/4.jpg" isCenter={centerIndex === 12} />
        <People src="https://randomuser.me/api/portraits/women/81.jpg" isCenter={centerIndex === 13} />
        <People src="https://randomuser.me/api/portraits/men/62.jpg" isLast={true} isCenter={centerIndex === 14} />
      </div>
    )
  }
}
