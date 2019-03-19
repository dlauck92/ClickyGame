//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import pokemon from "./pokemon.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    pokemon,
    clickedPokemon: [],
    score: 0
  };

//when you click on a card ... the pokemon is taken out of the array
  imageClick = event => {
    const currentPokemon = event.target.alt;
    const pokemonAlreadyClicked =
      this.state.clickedPokemon.indexOf(currentPokemon) > -1;

//if you click on a pokemon that has already been selected, the game is reset and cards reordered
    if (pokemonAlreadyClicked) {
      this.setState({
        pokemon: this.state.pokemon.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedPokemon: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available pokemon, your score is increased and cards reordered
    } else {
      this.setState(
        {
          pokemon: this.state.pokemon.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedPokemon: this.state.clickedPokemon.concat(
            currentPokemon
          ),
          score: this.state.score + 1
        },
//if you get all 12 pokemon corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              pokemon: this.state.pokemon.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedPokemon: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.pokemon.map(pokemon => (
            <FriendCard
              imageClick={this.imageClick}
              id={pokemon.id}
              key={pokemon.id}
              image={pokemon.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;