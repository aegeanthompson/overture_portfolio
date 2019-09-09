
// DEPENDENCIES

// packages
import React from 'react'


// COMPONENT CLASS

class Post extends React.Component {

  // RENDER

  render () {
    return (
      <di className="portfolio">
      <article className="card">
      <div className="post-header">
        <img src={this.props.postData.image} alt=""/>
        <h1>{this.props.postData.name} </h1>
        <a href={this.props.postData.name}>Follow This Link!</a>
      </div>
      <div className="post-body">
        {this.props.postData.body}
      </div>
      <div className="post-options">
          <a onClick={() => {this.props.handleView('editPost', this.props.postData)}}>edit portfolio</a>
          <a onClick={() => {this.props.handleDelete(this.props.postData.id)}}>delete portfolio</a>
      </div>
    </article>
    </div>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Post
