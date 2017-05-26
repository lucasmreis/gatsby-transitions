import React from 'react'
import { Motion, spring } from 'react-motion'

export default class extends React.Component {
  render() {
    const x = this.props.location.action === 'PUSH' ? 30 : -10
    return (
      <Motion defaultStyle={{o: 0, x}} style={{o: spring(1), x: spring(0)}}>
        {value => (
          <div style={{
            opacity: value.o,
            transform: `translateX(${value.x}%)`}}>

            {this.props.children}
          </div>
        )}
      </Motion>
    )
  }
}