import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      opacity: 0,
      x: this.props.location.action === 'PUSH' ? '30%' : '-30%'
    }
  }

  componentDidMount() {
    window.requestAnimationFrame(() =>
      this.setState(state => ({
        opacity: 1,
        x: '0'
      })))
  }

  render() {
    return (
      <div style={{
        opacity: this.state.opacity,
        transform: `translateX(${this.state.x})`,
        transition: 'opacity 300ms, transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)'}}>
        {this.props.children}
      </div>
    )
  }
}