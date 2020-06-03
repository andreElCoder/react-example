import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./components/Title"
import User from "./components/User"
import Card from "./components/Card"

class App extends Component{

    // Get a list of users from an API
    state = {
      userA: {
        firstName: "Harper",
        lastName: "Perez",
        avatarUrl:
          "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png"
      },
      userB: {
        firstName: "Ana",
        lastName: "Hello",
        avatarUrl:
          "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
      },
      clickCount :0,
      backColor : "yellow",
      movies: [
        { id: "AMLsriUkE", title: "Jurassic Park", director: "Steven Spielberg" },
        { id: "6dKZxwwmN", title: "Sharknado", director: "Anthony C. Ferrante" },
        { id: "z2uykusRE", title: "Titanic", director: "James Cameron" }
      ]
    };

    deleteMovieHandler=(id)=>{
      console.log("Deleting", id)
      // Copy the state to a new variable 
      const moviesCopy = this.state.movies
      // get the index to be deleted
      const deleteIndex = moviesCopy.findIndex(item => item.id === id)
      //remove index from the moviesCopy
      moviesCopy.splice(deleteIndex,1)
      this.setState({
        movies: moviesCopy
      })
    }

    addMovieHandler = () => {
      // copy the state to a new variable
      const moviesCopy = this.state.movies;
      moviesCopy.push({
        id: '1',
        title: 'Pulp Fiction',
        director: 'Quentin Tarantino'
      });
      this.setState({
        movies: moviesCopy
      })
    };

    clickHandler = () =>{
      this.setState({
        clickCount: this.state.clickCount + 1,
        backColor:"red"
      })
    }

  render (){
    return(
    <div className="App">
      <header className="App-header">
        <button onClick = {this.clickHandler}>Click me</button>
        <p>Count is : {this.state.clickCount}</p> 
        <Title data = "Welcome to my app"></Title>
        <User
        theColor={this.state.backColor} 
        firstName={this.state.userA.firstName}
        lastName={this.state.userA.lastName}
        image = {this.state.userA.avatarUrl}  
        ></User>
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <ul>
          {this.state.movies.map(movie =>{
            //return <li key ={movie.id}{...movie}></li>
            return <Card key={movie.id}{...movie} clickToDelete={()=> this.deleteMovieHandler(movie.id)}/>
          })}
          <li></li>
        </ul>
        <button onClick = {this.addMovieHandler}>Add</button>
      </div>
    </div>
    )}
  }
export default App;
