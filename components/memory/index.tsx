import { useState, useEffect } from 'react';
import memoryStyles from '../../styles/memory.module.css';
/**
 * GameGenerator
 * - GameSession
 * - - Cell
 * - Footer
 * 
/* 
  Denne konstant simulerer ENUM - består af et sæt navngivne værdier kaldet elementer
  Jeg bruger ENUM for at undgå stavefejl
*/

const GameStatus = {
  // Før Start-knappen markeres
  NEW:        'NEW',
  // Når de celler som skal markeres vises i starten
  CHALLENGE:  'CHALLENGE',
  // Selve spillet - aktiveres efter nogle få sekunder
  PLAYING:    'PLAYING',
  // Alle celler fundet
  WON:        'WON',
  // Tiden er gået eller brugeren har brugt for mange forsøg
  LOST:       'LOST',
};
// Disse farver kan udskiftes med hexamaltal - eks.: #FFFFFF
const CellStatus = {
  NORMAL:     'white',      // Cellen er ikke markeret
  HIGHLIGHT:  'lightblue',  // GameStatus er CHALLENGE og cellen er en Challenge-cell
  CORRECT:    'lightgreen', // Når brugeren har valgt en celle og cellen er en Challenge-cell
  WRONG:      'pink',       // Når brugeren har valgt en celle, og cellen ikke er en Challenge-cell
};
/* Beskeder som brugeren får i spillets forskellige faser
    NEW:         Spillet er netop sat igang (enten via timer eller via knappen)
    CHALLENGE:   Der går få sekunder hvor brugeren ser de celler hun skal huske
    PLAYING:     Spillet er igang, og brugeren skal huske hvor challenge-cellerne er (alle hvide)
    WON:         Brugeren har fundet alle Challenge-cellerne indenfor tiden, og uden for mange forsøg
    LOST:        Tiden er gået eller brugeren har brugt for mange forsøg
*/
interface MessagesI{
  NEW:string,
  CHALLENGE:string,
  PLAYING:string,
  WON:string,
  LOST:string
}
const Messages:MessagesI | undefined = {
  NEW:        'You will have a few seconds to memorize the blue random cells',
  CHALLENGE:  'Remember these blue cells now',
  PLAYING:    'Which cells were blue?',
  WON:        'Victory!',
  LOST:       'Game Over'
};
// Messages[gameStatus] - sådan får jeg den rette besked i Footer
interface CellProps{
  width       :number,
  gameStatus  :string,
  isChallenge :boolean,
  isPicked    :boolean,
  onClick     :any
}
const Cell = ({ 
    width,            // Cellens bredde - antal bredde delt med antal horisontale celler
    gameStatus,       // Er spillet ikke NEW, så testes forsøget for CORRECT eller WRONG
    isChallenge,      // Om cellen bør vælges (Challenge-cell)
    isPicked,         // Om cellen er valgt
    onClick           // Nedarvet funktion
  }:CellProps
  ) => {
  let cellStatus = CellStatus.NORMAL;
  // Der skal kun ske noget, hvis GameStatus ikke er NEW
  if (gameStatus !== GameStatus.NEW) {
    if (isPicked) {
      // Gamestatus er ikke NEW og cellen er valgt
      // Der testes om cellen er en challenge-cell - returneres CORRECT/WRONG
      cellStatus = isChallenge ? CellStatus.CORRECT : CellStatus.WRONG;
    } else if (isChallenge && (gameStatus === GameStatus.CHALLENGE || gameStatus === GameStatus.LOST)) {
      /*
        Cellen 'highlightes' hvis cellen er en Challenge-cell, 
        og GameStatus enten er:
        - CHALLENGE 
          eller 
        - LOST
      */
      cellStatus = CellStatus.HIGHLIGHT;
    }
  }
  return (
    <div
      className = {memoryStyles.cell}
      style     = {{ width: `${width}%`, backgroundColor: cellStatus }}
      onClick   = {onClick}
    />
  );
};

interface FooterProps{
  gameStatus:string,
  countdown:number,
  startGame: (event: React.MouseEvent<HTMLButtonElement>) => void
  resetGame:(event: React.MouseEvent<HTMLButtonElement>) => void
}
const Footer = ({ 
  gameStatus, 
  countdown, 
  startGame, 
  resetGame 
}:FooterProps) => {
  const buttonAreaContent = () => {
    switch(gameStatus) {
      case GameStatus.NEW:
        return <button onClick={startGame}>Start Game</button>;
      case GameStatus.CHALLENGE:
        console.log("CHALLENGE")
        // falls through
        return "CHALLENGE";
      case GameStatus.PLAYING:
        return countdown+" secounds";
     // case GameStatus.WON:
     //   console.log("WIN");
        // falls through
      case GameStatus.LOST:
        return <button onClick={resetGame}>Play Again</button>;
        default:
          console.log("default");
          return <button onClick={resetGame}>Play Again</button>;;
    }
  };
  return (
    // React.Fragment <>
    <>
      <div className = {memoryStyles.message}>{Messages[gameStatus]}</div>
{      /*
        Her bruger jeg en funktion til at udregne indholdet af knappen.
       */}
      <div className = {memoryStyles.button}>{buttonAreaContent()}</div>
    </>
  );
};
  interface GameSessionProps{
    cellIds:Array<number>,
    challengeCellIds:Array<number>,
    cellWidth:number,
    challengeSize:number,
    challengeSeconds:number,
    playSeconds:number,
    maxWrongAttempts:number,
    autoStart:boolean,
    resetGame:(event: React.MouseEvent<HTMLButtonElement>) => void
  }
const GameSession = ({
  cellIds,
  challengeCellIds,
  cellWidth,
  challengeSize,
  challengeSeconds,
  playSeconds,
  maxWrongAttempts,
  autoStart,
  resetGame,
}:GameSessionProps) => {
  // useState(GameStatus.PLAYING);
  // useState(GameStatus.WON);
  // useState(GameStatus.LOST);
  const [gameStatus, setGameStatus] = useState(
    autoStart ? GameStatus.CHALLENGE : GameStatus.NEW
  );
  // pickedCellIds holder styr på hvilke celler som brugeren har valgt
  // useState([0, 1, 2, 22, 23, 24]);
  const tmpPickedCellIds:Array<number>=[];
  const [pickedCellIds, setPickedCellIds] = useState(tmpPickedCellIds);
  // countdown holder styr på hvor mange sekunder brugeren har tilbage - starter med playSeconds prop
  const [countdown, setCountdown] = useState(playSeconds);
  
  useEffect(() => {
    // Brugeren har startet spillet, og kan i tre sekunder se hvor de farvede celler er placeret
    let timerId:any;
    if (gameStatus === GameStatus.CHALLENGE) {
      timerId = setTimeout(
        () => setGameStatus(GameStatus.PLAYING),
        1000 * challengeSeconds
      );
    }
    // Spillet er i gang, og brugeren har 10 sekunder til at markere de rigtige celler
    if (gameStatus === GameStatus.PLAYING) {
      timerId = setInterval(() => {
        setCountdown(countdown => {
          if (countdown === 1) {
            clearTimeout(timerId);
            setGameStatus(GameStatus.LOST);
          }
          return countdown - 1;
        });
      }, 1000);
    }
    if (gameStatus === GameStatus.LOST) {
      console.log("Klar til næste spil!");
      // setGameStatus(GameStatus.CHALLENGE);
    }
    return () => clearTimeout(timerId);
  }, [challengeSeconds, gameStatus]);  
  
  useEffect(() => {
    const [correctPicks, wrongPicks] = utils.arrayCrossCounts(
      pickedCellIds,
      challengeCellIds
    );
    if (correctPicks === challengeSize) {
      setGameStatus(GameStatus.WON);
    }
    if (wrongPicks === maxWrongAttempts) {
      setGameStatus(GameStatus.LOST);
    }
  }, [challengeCellIds, challengeSize, maxWrongAttempts, pickedCellIds]);
  /*
    - Alle variabler brugt i useEffect() bør inkluderes i ovenstående array, som holder øje med, 
    hvornår useEffect skal opdateres. 
    - jslint holder øje med, om alle relevante variabler er med.
  */
  const pickCell = (cellId:number) => {
    if (gameStatus === GameStatus.PLAYING) {
      setPickedCellIds((pickedCellIds) => {
        if (pickedCellIds.includes(cellId)) {
          return pickedCellIds;
        }
        return [...pickedCellIds, cellId];
      });
    }
  };  
  
  return (
    <div className = {memoryStyles.game}>
      <div className = {memoryStyles.grid}>
        {cellIds.map(cellId => (
          <Cell
            // unikt ID til hver celle
            key           = { cellId }
            // Bredde som afhænger af antal celler i hver række
            width         = { cellWidth }
            // Status på spillet 
            gameStatus    = { gameStatus }
            // Er det en challenge cell?  - bruger Array.includes
            isChallenge   = { challengeCellIds.includes(cellId) }
            // er cellen valgt?           - bruger Array.includes
            isPicked      = { pickedCellIds.includes(cellId) }
            // Nedarver funktion som tjekker om cellen allerede er valgt - ellers inkluderes den i valgte celler (pickedCellIds)
            onClick       = { () => pickCell(cellId) }
            />
        ))}
      </div>
      <Footer
        gameStatus        = { gameStatus }
        countdown         = { countdown }
        startGame         = { () => setGameStatus(GameStatus.CHALLENGE) }
        resetGame         = { resetGame }
      />
    </div>
  );
};

export default function GameGenerator() {
  // Placer altid state-elements først!
  const [gameId, setGameId]   = useState(1);

  const gridSize              = 5;
  const challengeSize         = 6;
  // Returnerer en array med x-antal elemter 1,2,3...
  // Fixed Array for hver enkelt spil (skal derfor ikke være i state)
  const cellIds               = utils.createArray(gridSize * gridSize);
  const cellWidth             = 100 / gridSize;
  /*
    Returnerer en array med tilfældige tal
    - cellIds er en array med de aktuelle felter
    - challengeSize bestemmer hvor mange farver, brugeren skal finde
  */
  const challengeCellIds = utils.sampleArray(cellIds, challengeSize);
  
  
  return (
    <GameSession
      key               = { gameId }

      challengeSize     = { challengeSize }
      cellIds           = { cellIds }
      cellWidth         = { cellWidth }
      
      challengeCellIds  = { challengeCellIds }

      challengeSeconds  = { 3 }
      playSeconds       = { 10 }
      maxWrongAttempts  = { 3 }

      autoStart         = { gameId > 1 }

      resetGame         = {() => setGameId(gameId => gameId + 1)}
    />
  );
};

// Math science
const utils = {
  /* Create an array based on a numeric size property.
     Example: createArray(5) => [0, 1, 2, 3, 4] */
  createArray: (size:number) => Array.from({ length: size }, (_, i) => i),

  /* Pick random elements from origArray up to sampleSize
     And use them to form a new array.
     Example: sampleArray([9, 12, 4, 7, 5], 3) => [12, 7, 5] */
  sampleArray: (origArray:Array<number>, sampleSize:number) => {
    const copy = origArray.slice(0);
    const sample = [];
    for (let i = 0; i < sampleSize && i < copy.length; i++) {
      const index = Math.floor(Math.random() * copy.length);
      sample.push(copy.splice(index, 1)[0]);
    }
    return sample;
  },

  /* Given a srcArray and a crossArray, count how many elements 
     in srcArray exist or do not exist in crossArray.
     Returns an array like [includeCount, excludeCount]
     Example: arrayCrossCounts([0, 1, 2, 3, 4], [1, 3, 5]) => [2, 3] */
  arrayCrossCounts: (srcArray:Array<number>, crossArray:Array<number>) => {
    let includeCount = 0;
    let excludeCount = 0;
    srcLoop: for (let s = 0; s < srcArray.length; s++) {
      for (let c = 0; c < crossArray.length; c++) {
        if (crossArray[c] === srcArray[s]) {
          includeCount += 1;
          continue srcLoop;
        }
      }
      excludeCount += 1;
    }
    return [includeCount, excludeCount];
  },
};

// ReactDOM.render(
//   <GameGenerator />,
//   document.getElementById('root')
// );