import React from 'react'
import { Transition, animated, config } from 'react-spring'

import './people.css'
import TimFerris from '../images/t.ferriss.jpg'
import QuincyLarson from '../images/q.larson.png'
import KevinRose from '../images/k.rose.jpg'
import DanAbramov from '../images/d.abramov.jpg'
import BrianDouglas from '../images/b.douglas.jpeg'

export default class PeopleList extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [TimFerris, QuincyLarson, BrianDouglas, KevinRose, DanAbramov],
      selected: false,
      selectedIndex: 0,
    }
  }

  clickHandler = (e, i) => {
    this.setState({ selected: !this.state.selected, selectedIndex: this.state.items.indexOf(i) })
  }

  render() {
    const { items, selected } = this.state;
    console.log(this.state);
    return (
      <div className="peopleList">
        <Transition
          native
          config={{ ...config.default, precision: 0.01 }}
          items={this.state.items}
          from={{ opacity: 0 }}
          enter={[{ opacity: 1 }]}
          leave={[{ opacity: 0.5 }]}
        >
          {item => props => (
            <animated.div
              style={props}
              className={this.state.items.indexOf(item) === this.state.selectedIndex ? 'person__selected person' : 'person'}
              onClick={e => this.clickHandler(e, item)}
            >
              <img src={item} />
            </animated.div>
          )}
        </Transition>
      </div>
    )
  }
}
