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
      items: [TimFerris, QuincyLarson, KevinRose, BrianDouglas, DanAbramov],
      selectedIndex: 0,
    }
  }

  clickHandler = (e, i) => {
    const selectedIndex = this.state.items.indexOf(i)
    this.setState({ selectedIndex })
    this.props.onPersonChanged(selectedIndex)
  }

  render() {
    const { items, selectedIndex } = this.state
    return (
      <div className="peopleList">
        <Transition
          native
          config={{ ...config.default, precision: 0.01 }}
          items={items}
          from={{ opacity: 0 }}
          enter={[{ opacity: 1 }]}
          leave={[{ opacity: 0.5 }]}
        >
          {item => props => (
            <animated.div
              style={props}
              className={`person${items.indexOf(item) === selectedIndex ? ' person__selected': ''}`}
              onClick={e => this.clickHandler(e, item)}
            >
              <img alt="curator" src={item} />
            </animated.div>
          )}
        </Transition>
      </div>
    )
  }
}
