import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../Header'
import Content from '../Content'
import Footer from '../Footer'

const Div = styled.div`
  text-align: center;
  margin: 0 auto;
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          id: 1,
          text: 'swiming'
        }
      ],
      no: 2
    }
  }

  addTask = inputText => {
    console.log(inputText)

    let number = this.state.no
    const newData = {
      id: this.state.no,
      text: inputText
    }
    let oldData = this.state.data
    oldData.push(newData)
    this.setState({
      data: oldData,
      no: number + 1
    })
  }

  removeTask = index => {
    let number = this.state.no
    const leftoverData = this.state.data.filter((text, dataIndex) => {
      return dataIndex !== index
    })
    console.log(leftoverData)
    this.setState({
      data: leftoverData,
      no: number
    })
  }

  editTask = index => {
    const displayEdit = this.state.data.filter((dataObject, dataIndex) => {
      return dataIndex === index
    })
    const editText = prompt(`Edit text ${displayEdit[0].text} to :`)

    if (editText !== null) {
      let result = ''
      const updateData = this.state.data.map((valueData, dataIndex) => {
        if (index === dataIndex) {
          valueData.text = editText
          result = valueData
        } else {
          result = valueData
        }
        return result
      })
      this.setState({
        data: updateData
      })
    }
  }
  render() {
    return (
      <Div>
        <Header />
        <Content
          TaskList={this.state.data}
          AddTask={this.addTask}
          RemoveTask={this.removeTask}
          EditTask={this.editTask}
        />
        <Footer />
      </Div>
    )
  }
}

export default App
