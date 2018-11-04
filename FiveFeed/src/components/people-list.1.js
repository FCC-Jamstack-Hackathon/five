import React from 'react'
import { Transition, animated, config } from 'react-spring'

import People from './people'
import Add from './add'

import './people.css'
import TimFerris from '../images/t.ferriss.jpg'
import QuincyLarson from '../images/q.larson.png'
import KevinRose from '../images/k.rose.jpg'
import DanAbramov from '../images/d.abramov.jpg'
import BrianDouglas from '../images/b.douglas.jpeg'

const people = [
  style => <People style={{ ...style }} src={TimFerris} />,
  style => <People style={{ ...style }} src={QuincyLarson} />,
  style => <People style={{ ...style }} src={BrianDouglas} />,
  style => <People style={{ ...style }} src={KevinRose} />,
  style => <People style={{ ...style }} src={DanAbramov} />
]
export default class PeopleList extends React.Component {
  constructor() {
    super()
    this.state = { index: 0 }
    this.onScroll = this.onScroll.bind(this)
    this.ref = React.createRef()
  }

  onScroll(e) {
    const newCenterIndex = Math.floor((e.target.scrollLeft + 133 / 2) / 133)
    if (
      this.props.centerPersonIndex !== newCenterIndex &&
      newCenterIndex <= 4
    ) {
      this.props.onPersonChanged(newCenterIndex)
    }
  }

  toggle = e =>
  this.setState(state => ({
    index: state.index === 2 ? 0 : state.index + 1,
  }))

  render() {
    const { centerPersonIndex } = this.props

    return (
      <div className="peopleList" onScroll={this.onScroll} ref={this.ref} onClick={this.toggle}>
        <Transition
          native
          reset
          unique
          items={this.state.index}
          from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
          enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
          leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}>
          {index => people[index]}
        </Transition>
        <Add bringModal={this.props.bringModal} />
      </div>
    )
  }
}
