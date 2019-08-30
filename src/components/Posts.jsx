import React from 'react';
import '../App.css';
import objeto from '../posts.json';
import Post from './Post.jsx';



class Posts extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        posts:objeto.posts
      }
     //concede permissão para o post filha excluir
      this._deletarPost = this._deletarPost.bind(this)
      
    }
    //Função para excluir o post
    _deletarPost(id){
      var newPosts = this.state.posts.filter((post) => {
        return post.id != id
        })
      this.setState(
        {posts : newPosts}
      )

    }


    

  render(){
  return (
    <div className="Posts">
        {
          //foreach posts as post
          this.state.posts.map((post, i) => 
            <Post
            key={i}
            id_posts={post.id}
            url_imagem={post.url}
            titulo={post.titulo}
            _deletarPost={this._deletarPost}
            />

          )


        }
    </div>
  );
}
}

export default Posts;