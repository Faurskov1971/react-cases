import React from 'react';

var _ = require('lodash');

interface IColors{
  new:string,
  playing:string,
  won:string,
  lost:string
}

const colors:IColors | undefined = {
  new: 'lightblue',
  playing: 'deepskyblue',
  won: 'lightgreen',
  lost: 'lightcoral',
};


const randomNumberBetween = (min:number, max:number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

  interface NumberProps{
    id:number,
    clickable:boolean,
    value:string | number,
    onClick:Function
  }

class Number extends React.PureComponent<NumberProps> {
  handleClick = () => {
    if (this.props.clickable) {
      this.props.onClick(this.props.id);
    }
  };

  render() {
    return (
      <div
        className = "number"
        style     = {{ opacity: this.props.clickable ? 1 : 0.3 }}
        onClick   = {this.handleClick}
      >
        {this.props.value}
      </div>
    );
  }
}
interface GameProps{
  initialSeconds:number,
  challengeSize:number,
  answerSize:number,
  autoPlay:boolean,
  onPlayAgain:(event: React.MouseEvent<HTMLButtonElement>) => void,
  challengeRange:Array<number>
}
interface GameState{
  gameStatus?:string,
  remainingSeconds:number,
  selectedIds:Array<number>
}
class Game extends React.Component<GameProps,GameState> {
  state = {
    gameStatus: 'new', // new, playing, won, lost
    remainingSeconds: this.props.initialSeconds,
    selectedIds: [],
  };
  challengeNumbers = Array.from({
    length: this.props.challengeSize,
  }).map(() =>
    randomNumberBetween(2,9)
  );
  target = _.sum(
    _.sampleSize(this.challengeNumbers, this.props.answerSize)
  );
  intervalId!: NodeJS.Timer;
  componentDidMount() {
    if (this.props.autoPlay) {
      this.startGame();
    }
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  isNumberAvailable = (numberIndex:number) =>
  // @ts-ignore
    this.state.selectedIds.indexOf(numberIndex) === -1;

  startGame = () => {
    this.setState({ gameStatus: 'playing' }, () => {
      this.intervalId = setInterval(() => {
        this.setState(prevState => {
          const newRemainingSeconds =
            prevState.remainingSeconds - 1;
          if (newRemainingSeconds === 0) {
            clearInterval(this.intervalId);
            return { gameStatus: 'lost', remainingSeconds: 0 };
          }
          return { remainingSeconds: newRemainingSeconds };
        });
      }, 1000);
    });
  };

  selectNumber = (numberIndex:number) => {
    this.setState(
      prevState => {
        if (prevState.gameStatus !== 'playing') {
          return null;
        }
        const newSelectedIds = 
          [ ...prevState.selectedIds, numberIndex ];
        return {
          selectedIds: newSelectedIds,
          gameStatus: this.calcGameStatus(newSelectedIds),
        };
      },
      () => {
        if (this.state.gameStatus !== 'playing') {
          clearInterval(this.intervalId);
        }
      }
    );
  };
  calcGameStatus = (newSelectedIds:Array<number>) => {
    const sumSelected = newSelectedIds.reduce(
      (acc:number, curr:number) => acc + this.challengeNumbers[curr],
      0
    );
    if (newSelectedIds.length !== this.props.answerSize) {
      return 'playing';
    }
    return sumSelected === this.target ? 'won' : 'lost';
  };

  render() {
    const { gameStatus, remainingSeconds } = this.state;
    return (
      <div className="game">
        <div
          className="target"
          style={{ backgroundColor: colors[gameStatus] }}
        >
          {gameStatus === 'new' ? 'TARGET' : this.target}
        </div>
        <div className="challenge-numbers">
          {this.challengeNumbers.map((value, index) =>
            <Number
              key         = {index}
              id          = {index}
              value       = {gameStatus === 'new' ? '?' : value}
              clickable   = {this.isNumberAvailable(index)}
              onClick     = {this.selectNumber}
            />
          )}
        </div>
        <div className="help">
          Pick {this.props.answerSize} numbers that sum to the
          target in {this.props.initialSeconds} seconds
        </div>
        <div className="footer">
          {gameStatus === 'new' &&
            <button onClick={this.startGame}>Start</button>
          }

          {gameStatus === 'playing' &&
            <div className="timer-value">{remainingSeconds}</div>
          }

          {['won', 'lost'].includes(gameStatus) &&
            <button onClick={this.props.onPlayAgain}>
              Play Again
            </button>
          }
        </div>
      </div>
    );
  }
}
interface GameContainerProps{
  // Ingen props
}
interface GameContainerState{
  gameId:number,
}
export default class GameContainer extends React.Component<GameContainerProps,GameContainerState> {
  state = {
    gameId: 1,
  };
  resetGame = () =>
    this.setState(prevState => ({
      gameId: prevState.gameId + 1,
    }));
  render() {
    return (
      <Game
        key             = {this.state.gameId}
        autoPlay        = {this.state.gameId > 1}
        challengeRange  = {[2, 9]}
        challengeSize   = {6}
        answerSize      = {4}
        initialSeconds  = {15}
        onPlayAgain     = {this.resetGame}
      />
    );
  }
}