import React, { Component } from "react";
import "./App.css";
import Square from "./square";

class App extends Component {
  constructor(props) {
    super(props);
    this.winningMoves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ];
    this.players = [{ symbol: "X", moves: [] }, { symbol: "O", moves: [] }];
    this.state = {
      squares: Array(9).fill(null),
      currentPlayerIndex: 0
    };
  }

  isSubset(superSet, subset) {
    return subset.every(value => superSet.includes(value));
  }

  checkWinningCondition() {
    let playerMoves = this.players[this.state.currentPlayerIndex].moves;
    return this.winningMoves.some(moves => this.isSubset(playerMoves, moves));
  }

  insertSymbol(id) {
    this.setState(state => {
      let currentPlayer = this.players[state.currentPlayerIndex];
      state.squares[id] = currentPlayer.symbol;
      currentPlayer.moves.push(id);
      state.currentPlayerIndex = (state.currentPlayerIndex + 1) % 2;
      return state;
    });
  }

  renderStatus() {
    let currentPlayer = this.players[this.state.currentPlayerIndex];
    let status = "Next player symbol: " + currentPlayer.symbol;
    const hasWon = this.checkWinningCondition();
    if (hasWon) {
      status = "Winner: " + currentPlayer.symbol;
    }
    return status;
  }

  renderSquare(id) {
    return (
      <Square
        value={this.state.squares[id]}
        id={id}
        insertSymbol={this.insertSymbol.bind(this)}
      />
    );
  }

  render() {
    return (
      <div className="board">
        <div>{this.renderStatus()}</div>
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default App;
