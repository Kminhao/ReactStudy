import React from 'react';
import '../App.css';

class Post extends React.Component{
  render(){
    return (
      <div> 
        <div>
          <img className="image" src={this.props.url_imagem}/>
          <div>Título:{this.props.titulo}</div>
          <button onClick={() => this.props._deletarPost(this.props.id_posts)} >Excluir</button>

        </div>
      </div>
    )
  }
}

export default Post;