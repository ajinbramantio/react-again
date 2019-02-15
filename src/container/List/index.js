import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const UL = styled.ul`
  list-style: none;
`

library.add(faTrash)
library.add(faPen)
class List extends Component {
  render() {
    // console.log(this.props.List)

    return (
      <UL>
        {this.props.List.map((listData, index) => {
          return (
            <li key={index}>
              {listData.text}{' '}
              <button
                onClick={() => {
                  this.props.EditList(index)
                }}
              >
                <FontAwesomeIcon icon="pen" />
              </button>
              <button
                onClick={() => {
                  this.props.RemoveList(index)
                }}
              >
                <FontAwesomeIcon icon="trash" />
              </button>
            </li>
          )
        })}
      </UL>
    )
  }
}

export default List
