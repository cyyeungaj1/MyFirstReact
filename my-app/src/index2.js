import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Page extends React.Component{
  constructor(props){
    super(props);
    this.state={
      posts: Array(10).fill(null)
    };
    for(var i = 0; i < 10; ++i){
      this.state.posts[i] = "a" + i;
    }
  }

  renderPost(posts){
    const postItems = [];
    for(var i = 0; i < posts.length; ++i){
      postItems.push(<Post name={posts[i]}/>)
    }
    return postItems;
  }
  render(){
    return(
      <div>
        {this.renderPost(this.state.posts)}
      </div>
    );
  }
}

class Post extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: props.name
    };
  }
  render(){
    return (
      <div>
        <h1 className="display-4">{this.state.name}<img src={'./img/img1.png'} class="rounded"/></h1>

      </div>
    );
  }

}

//need export for another file use
export default Page;
