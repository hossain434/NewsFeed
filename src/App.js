import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1f7066462c7d46a6849d2ea58c932f93"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(JSON.stringify(data));
        this.setState({ articles: data.articles });
      });
  }
  render() {
    return (
      <div className="App">
        {this.state.articles.map((item, index) => {
          return (
            <div>
              <h2 style={{ textAlign: "left" }}>{item.title}</h2>
              <b>{item.author} </b>
              <img src={item.urlToImage} style={{ width: "20vw" }} />
              <a href={item.url}> Read More </a>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
