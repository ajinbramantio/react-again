import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      inputText: ''
    }
  }

  hendleChange = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  clearInput = () => {
    this.setState({
      inputText: ''
    })
  }
  render() {
    // console.log(this.props)

    return (
      <form
        onSubmit={event => {
          event.preventDefault()
          this.props.AddData(this.state.inputText)
          this.clearInput()
        }}
      >
        <input
          type="text"
          placeholder="please input text in here"
          value={this.state.inputText}
          onChange={this.hendleChange}
          required
        />
        <input type="submit" value="Add" />
      </form>
    )
  }
}
export default Form
