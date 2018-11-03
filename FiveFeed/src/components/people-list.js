import React from 'react';

import './people-list.css';
import People from './People';

const PeopleList = () => (
  <div className="peopleList">
    <People src="https://randomuser.me/api/portraits/men/6.jpg" />
    <People src="https://randomuser.me/api/portraits/men/56.jpg" />
    <People src="https://randomuser.me/api/portraits/men/85.jpg" />
    <People src="https://randomuser.me/api/portraits/men/33.jpg" />
    <People src="https://randomuser.me/api/portraits/women/39.jpg" />
    <People src="https://randomuser.me/api/portraits/men/22.jpg" />
    <People src="https://randomuser.me/api/portraits/men/66.jpg" />
    <People src="https://randomuser.me/api/portraits/men/78.jpg" />
    <People src="https://randomuser.me/api/portraits/men/53.jpg" />
    <People src="" />
    <People src="" />
    <People src="" />
    <People src="" />
    <People src="" />
    <People src="" />
  </div>
)

export default PeopleList;