import './App.css';
import React, { Component} from 'react';


class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      articles:[]
    }

  }
  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4bb80c96379641c2a6935a0764b1817a')
    .then((response) => {
      return response.json();
    })

    .then((myJson) => {
      
      this.setState({
        articles: myJson.articles
      }); 
    });
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        {this.state.articles.map((item, index)=>{
          return (
            <div>
            <h2 style={{textAlign:'left'}}>
                {item.title}
            </h2>
            <b>(item.author)</b>
            <img src={item.urlToImage} style={{width:'20vw'}}/>
            <a href={item.url}> Read more </a>
            <p>
                  {item.content}
            </p>

            </div>
          );
        })}                  
      </div>
    );
  }
}

export default App;
