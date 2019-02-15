import React, { Component } from 'react'
import Form from '../Form'
import List from '../List'
class Content extends Component {
  render() {
    // console.log(this.props.AddTask)
    return (
      <div>
        <h2>This is Content</h2>
        <Form AddData={this.props.AddTask} />
        <List
          List={this.props.TaskList}
          RemoveList={this.props.RemoveTask}
          EditList={this.props.EditTask}
        />
      </div>
    )
  }
}

export default Content
