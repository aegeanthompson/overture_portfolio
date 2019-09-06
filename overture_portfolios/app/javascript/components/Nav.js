
// DEPENDENCIES

// packages
import React from 'react'


// COMPONENT CLASS

class Nav extends React.Component {

  // RENDER

  render () {
    return (
      <nav>
        <h1>NAVIGATE</h1>
        <ul>
          <li onClick={() => {this.props.handleView('home')}}>home</li>
          <li onClick={() => {this.props.handleView('addPost')}}>add post</li>
        </ul>
      </nav>
    )
  }
}


// EXPORT

export default Nav
