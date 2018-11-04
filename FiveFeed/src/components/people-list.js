import React from 'react';

import './people-list.css';
import People from './People';

export default class PeopleList extends React.Component {
  constructor() {
    super();
    
    this.onScroll = this.onScroll.bind(this);
    this.ref = React.createRef();
  }

  componentDidMount() {
    // Set initial scroll position
    console.log(this.ref.current);
  }
  
  onScroll(e) {
    const newCenterIndex = Math.floor((e.target.scrollLeft + 133 / 2) / 133);
    if (this.props.centerPersonIndex !== newCenterIndex) {
      this.props.onPersonChanged(newCenterIndex);
    }
  }

  render() {
    const { centerPersonIndex } = this.props;

    return (
      <div className="peopleList" onScroll={this.onScroll} ref={this.ref}>
        <People src="https://randomuser.me/api/portraits/men/6.jpg" isCenter={centerPersonIndex === 0} />
        <People src="https://randomuser.me/api/portraits/men/56.jpg" isCenter={centerPersonIndex === 1} />
        <People src="https://randomuser.me/api/portraits/men/85.jpg" isCenter={centerPersonIndex === 2} />
        <People src="https://randomuser.me/api/portraits/men/33.jpg" isCenter={centerPersonIndex === 3} />
        <People src="https://randomuser.me/api/portraits/women/39.jpg" isCenter={centerPersonIndex === 4} />
        <People src="https://randomuser.me/api/portraits/men/22.jpg" isCenter={centerPersonIndex === 5} />
        <People src="https://randomuser.me/api/portraits/men/66.jpg" isCenter={centerPersonIndex === 6} />
        <People src="https://randomuser.me/api/portraits/men/78.jpg" isCenter={centerPersonIndex === 7} />
        <People src="https://randomuser.me/api/portraits/men/53.jpg" isCenter={centerPersonIndex === 8} />
        <People src="https://randomuser.me/api/portraits/men/49.jpg" isCenter={centerPersonIndex === 9} />
        <People src="https://randomuser.me/api/portraits/women/40.jpg" isCenter={centerPersonIndex === 10} />
        <People src="https://randomuser.me/api/portraits/women/42.jpg" isCenter={centerPersonIndex === 11} />
        <People src="https://randomuser.me/api/portraits/women/4.jpg" isCenter={centerPersonIndex === 12} />
        <People src="https://randomuser.me/api/portraits/women/81.jpg" isCenter={centerPersonIndex === 13} />
        <People src="https://randomuser.me/api/portraits/men/62.jpg" isLast={true} isCenter={centerPersonIndex === 14} />
      </div>
    )
  }
}
