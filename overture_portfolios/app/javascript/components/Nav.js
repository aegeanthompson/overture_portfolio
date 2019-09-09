
// DEPENDENCIES

// packages
import React from 'react'


// COMPONENT CLASS

class Nav extends React.Component {

  // RENDER

  render () {
    return (
      <nav>
          <a className="nav" onClick={() => {this.props.handleView('home')}}>home</a>
          <a className="nav" onClick={() => {this.props.handleView('addPost')}}>add project</a>
      </nav>
    )
  }
}


// EXPORT

export default Nav
