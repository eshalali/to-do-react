import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {
  render() {
    let todoItems = this.props.theList.map((item, index) => {
      return <ListItem doThis={item} key={index} />
    })
    return (
      <div>
        <h1>Things to do:</h1>
        <ul>
          {todoItems}
        </ul>
      </div>
    )
  }
}

export default MyList