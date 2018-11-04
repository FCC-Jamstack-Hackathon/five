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
    }
  }

  clickHandler = (e, i) => {
    const { items } = this.state
    const mid = items.length / 2 | 0
    const arr = [...items]
    const index = arr.indexOf(i)
    const item = arr.splice(index, 1)

    this.setState({ items: [...arr.slice(0, mid), item[0], ...arr.slice(mid)] })
  }

  render() {
    const { items } = this.state
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
          {item => props => console.log(item) || (
            <animated.div
              style={props}
              className="person"
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
