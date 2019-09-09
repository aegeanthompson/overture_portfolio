
// DEPENDENCIES

// packages
import React from 'react'


// COMPONENT CLASS

class Post extends React.Component {

  // RENDER

  render () {
    return (


      <article>
      <div className="post-header">
        <img className="portfolioImg" src={this.props.postData.image} alt=""/>
        <h1>{this.props.postData.name} </h1>
        <a className="viewLink" href={this.props.postData.name}>view project</a>
        <h4>{this.props.postData.body}</h4>
      </div>
      <div className="post-options">
          <button onClick={() => {this.props.handleView('editPost', this.props.postData)}}>edit </button>
          <button onClick={() => {this.props.handleDelete(this.props.postData.id)}}> delete</button>
      </div>
    </article>


    )
  }
}

// =============================
// EXPORT
// =============================
export default Post
