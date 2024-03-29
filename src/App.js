import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

let currentScore = 0;
let highScore = 0;
const styles = {
  navbarStyle :{
    background: "lightblue",
    color: "black",
    width: "100%",
    height: "20%"
  },
  navElements :{
    justifyContent :"center",
    width: "100%",
    fontSize: "32px"
  }
}


class App extends React.Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  clicker = (id) => {
    const friends = this.state.friends.map(friend => {
      if (friend.id === id && friend.clicked === true){
        friend.clicked = true;
        currentScore++;
      } else if (friend.id === id && friend.clicked === true){
        alert("you lose");
        if (currentScore > highScore){
          highScore = currentScore
        }
        this.gameOver()
      }
      return friend
      
    })
    this.setState({ friends })
  }

  shuffle = () => {
    this.setState({
      friends :this.state.friends.sort(function (a,b){ 
        return 0.5 - Math.random();
      })
    })
  }

  gameOver = () => {
    const friends = this.state.friends.map(friend => {
      friend.clicked = false;
      return friend
    })
    currentScore = 0;
    this.setState({ friends })
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
      <div className="row" style={styles.navbarStyle}>
        <nav className="navbar"  style={styles.navElements}>
          {/* <div className="col-md-4">
            <a href="/">Clicky Game</a>
          </div> */}
          <div className="col-md-4">
            <p>Click on an image to play</p>
          </div>
          <div className="col-md-4">
            <p>score: {currentScore} | high score: {highScore}</p>
          </div>
        </nav>
      </div>
      {/* <Header /> */}
      {
        this.state.friends.map((friend) => {
          return (
            <FriendCard
              key={friend.id}
              name={friend.name}
              image={friend.image}
              click={this.clicker}
              clicked={friend.clicked}
              shuffle={this.shuffle}
              id={friend.id}
            />
          )
        })
      }

    </Wrapper >
    );
  }
}

export default App;
