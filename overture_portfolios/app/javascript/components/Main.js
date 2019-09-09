
// DEPENDENCIES

// packages
import React from 'react'

// components
import Post from './Post.js'
import Form from './Form.js'


// COMPONENT CLASS

class Main extends React.Component {

  // STATE

  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  // HANDLERS

  fetchPosts = () => {
    fetch('/api/posts')
      .then(data => data.json())
      .then(jData => {
        this.setState({posts: jData})
      })
    }
    //create new post
    handleCreate = (createData) => {
    fetch('/api/posts', {
      body: JSON.stringify(createData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdPost => {
        return createdPost.json()
      })
      .then(jsonedPost => {
        //takes me back to index
        this.props.handleView('home')
        ////update posts
      this.setState(prevState => {
        prevState.posts.push(jsonedPost)
        return { posts: prevState.posts }
        })
      })
    .catch(err => console.log(err))
  }
//update
  handleUpdate = (updateData) => {
  fetch(`/api/posts/${updateData.id}`, {
    body: JSON.stringify(updateData),
    method: 'PUT',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
    .then(updatedPost => {

      this.props.handleView('home')

      this.fetchPosts()
    })
    .catch(err => console.log(err))
}

//delete
handleDelete = (id) => {
  fetch(`/api/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
    .then(json => {
      this.setState(prevState => {
        const posts = prevState.posts.filter(post => post.id !== id)
        return { posts }
      })
    })
    .catch(err => console.log(err))
}

  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <main>
      <div className="mainContainer">
      <div className="info">
        <img className="profileImg" src="https://i.ibb.co/n7zR9TY/imageedit-2-6441640447.png" alt="profile picture"></img>
        <div className="infoText">
          <h2>JOHN SMITH</h2>
          <h4>WEB DEVELOPER</h4>
          </div>
          <div className="social">
            <img className="socialLinks" src="https://www.fourjay.org/myphoto/f/19/198168_linkedin-logo-png-transparent-background.png"></img>
            <img className="socialLinks" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img>
          </div>
          <div className="moreInfoBtns">
            <button>Freelance Work</button>
            <button>View Resume</button>
          </div>

      </div>
      <div className="bio">
      <h1>Hi, I'm John!</h1>
      <h3>Web Design & Development</h3>
      <h3>Industrious Software Developer with a passion for coding innovative projects. I have a knack for stream-lining complex issues. My background in Marketing/Sales aids me to create solutions that are both efficient and intuitive to the client’s needs. I enjoy being a part of a team and working hard towards our collective goals.</h3>
      <h1>Personal Info</h1>
        <h3>email: johnsmith@gmail.com</h3>
        <h3>number: 512-867-5309</h3>
        <h3>website: johnsmith.com</h3>
        </div>
      </div>

       <h1>{this.props.view.pageTitle}</h1>
       { this.props.view.page === 'home'
       ? this.state.posts.map((postData) => (
         <Post
         key={postData.id}
         postData={postData}
         handleView={this.props.handleView}
         handleDelete={this.handleDelete}
         />
      ))
      : <Form
      handleCreate={this.handleCreate}
      handleUpdate={this.handleUpdate}
      formInputs={this.props.formInputs}
      view={this.props.view}
      />
    }
    </main>

    )
  }
}




// EXPORT

export default Main
