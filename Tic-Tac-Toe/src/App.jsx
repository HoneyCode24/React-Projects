import { useState, useRef, useEffect } from "react";
function App() {
  const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState(Array(9).fill(''));
  const [playerscore, setPlayerScore] = useState(0)
  const [compscore, setCompScore] = useState(0)
  const [draw, setDraw] = useState(0)
  const [winner, setWinner] = useState(false);

  {/* Level 2: Add Player Turn Logic
    Add a variable to track whose turn it is (X or O).
    When player clicks a box, it should update based on turn.
    Alternate turns each time.
    It contain Two Arrow function alternate_move and handleClick
  const alternate_move=(index)=>{
    let newboard = [...board];
    if(xTurn){
      newboard[index] = "X";
      setBoard(newboard);
      setxTurn(false)
      checkWinner(newboard, 'X');
    }
    else{
      newboard[index] = "O";
      setBoard(newboard);
      setxTurn(true)
      checkWinner(newboard, 'O');
    }
  }*/}
    const handleClick = (index) => {
    if (board[index] !== '' || winner) return;

    let newboard = [...board];
    newboard[index] = "X";
    setBoard(newboard);

    // Player move - check if they won
    if (checkWinner(newboard, 'X')) return;

    // AI Move Priority — One move per turn
    // 1. Win if possible
    if (CompWinMove([...newboard])) return;

    // 2. Block player win
    if (PlayerWInMove([...newboard])) return;

    // 3. Create fork
    if (CompFork([...newboard])) return;

    // 4. Block player's fork
    if (CheckFork([...newboard])) return;

    // 5. Best move (center → opposite corner → corner → side)
    BestMove([...newboard]);
  };


  const handleReset = () => {
    setBoard(Array(9).fill(''));
    setWinner(false);
    // setxTurn(true)
  }

  {/* Level: 3 - Add Win Checking Logic
    What patterns (indexes) lead to a win?
    For each pattern, check if the 3 values are the same (and not null).
    If found, mark winner. 
    It contain a arrow function checkWinner*/
  }
  const checkWinner = (newboard, symbol) => {
    for (let pattern of WINNING_COMBINATIONS) {
      let [a, b, c] = pattern;
      if (newboard[a] === symbol && newboard[b] === symbol && newboard[c] === symbol && newboard[a] !== '') {
        if (symbol === 'X') {
          setPlayerScore(playerscore + 1)
          setWinner(true)
          return;
        }
        else {
          setCompScore(compscore + 1)
          setWinner(true)
          return;
        }
      }
    }
    if (!newboard.includes('') && !winner) {
      setDraw(draw + 1);
      setWinner(true);
    }
  }



  {/* Level 4: Add Computer Logic
    After user plays, pick any random empty cell and play ‘O’. 
  const compChance = (newboard)=>{
    let emptyIndexes = newboard
    .map((val, idx) => (val === '' ? idx : null))
    .filter((val) => val !== null);
    let randompick =  emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)]; 

    if(newboard[randompick]!== '' || winner)return; //It you can only click empty boxes and only while the game is still ongoing.
    if(newboard[randompick] === ''){
      let updatedboard = [...newboard]
      updatedboard[randompick] = "O";
      setBoard(updatedboard);
      // setxTurn(true)
      checkWinner(updatedboard, 'O');
    }
  }*/
  }
  {/* Level-5 Adding more logic
    Check if computer can win — if yes, play that move.
    If not, check if player is about to win — block them.
    If neither, play random.
  const compChance = (newboard) => {
    // Check if computer can win — if yes, play that move.
    for (let pattern of WINNING_COMBINATIONS) {
      let [a, b, c] = pattern;
      let value = [newboard[a], newboard[b], newboard[c]]
      let ocount = value.filter(v => v == 'O').length
      let emptyindexo = pattern[value.indexOf('')]

      if (ocount === 2 && value.includes('')) {
        let updatedboard = [...newboard]
        updatedboard[emptyindexo] = 'O'
        setBoard(updatedboard)
        checkWinner(updatedboard, 'O')
        return;
      }
    }
    // check if player is about to win — block them.
    for (let pattern of WINNING_COMBINATIONS) {
      let [a, b, c] = pattern;
      let value = [newboard[a], newboard[b], newboard[c]]
      let xcount = value.filter(v => v == 'X').length
      let emptyindex = pattern[value.indexOf('')]

      if (xcount === 2 && value.includes('')) {
        let updatedboard = [...newboard]
        updatedboard[emptyindex] = 'O'
        setBoard(updatedboard)
        checkWinner(updatedboard, 'O')
        return;
      }
    }
    // play random
    let emptyIndexes = newboard
      .map((val, idx) => (val === '' ? idx : null))
      .filter((val) => val !== null);
    let randompick = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];

    if (newboard[randompick] !== '' || winner) return; //It you can only click empty boxes and only while the game is still ongoing.
    if (newboard[randompick] === '') {
      let updatedboard = [...newboard]
      updatedboard[randompick] = "O";
      setBoard(updatedboard);
      // setxTurn(true)
      checkWinner(updatedboard, 'O');
      return;
    }
  }*/}

  {/*Level-6: Computer Move Logic:
    1. Can I win? → Yes → Win.
    2. Can Player create fork next? → Yes → Block fork.
    3. Can Player win next? → Yes → Block.
    4. Can I create fork? → Yes → Do it.
    5. Else → Priority: Center → Opposite Corner → Empty Corner → Edge.*/
  }
  // Can Computer win in next move- go for it 
  const CompWinMove = (newboard) => {
    console.log("hi from compwinmove")
    for (let pattern of WINNING_COMBINATIONS) {
      let [a, b, c] = pattern;
      let value = [newboard[a], newboard[b], newboard[c]]
      let ocount = value.filter(v => v == 'O').length
      let emptyindexo = pattern[value.indexOf('')]

      if (ocount === 2 && value.includes('')) {
        // let updatedboard = [...newboard]
        // updatedboard[emptyindexo] = 'O'
        // setBoard(updatedboard)
        // checkWinner(updatedboard, 'O')
        newboard[emptyindexo] = 'O';
        setBoard(newboard);
        checkWinner(newboard, 'O');
        return true;
      }
    }
  }
  // check if player is about to win — block them.
  const PlayerWInMove = (newboard) => {
    console.log("hi from Playerwinmove")
    for (let pattern of WINNING_COMBINATIONS) {
      let [a, b, c] = pattern;
      let value = [newboard[a], newboard[b], newboard[c]]
      let xcount = value.filter(v => v == 'X').length
      let emptyindex = pattern[value.indexOf('')]

      if (xcount === 2 && value.includes('')) {
        let updatedboard = [...newboard]
        updatedboard[emptyindex] = 'O'
        setBoard(updatedboard)
        checkWinner(updatedboard, 'O')
        return true;
      }
    }
  }
    const CompFork = (board) => {
      console.log("hi from compfork")
    // Find fork index for O
    let forkIndex = findForkMove(board, 'O');

    if (forkIndex !== null) {
      let updatedBoard = [...board];
      updatedBoard[forkIndex] = 'O';
      setBoard(updatedBoard);
      checkWinner(updatedBoard, 'O');
      return true;
    }
    return false;
  };

  function findForkMove(board, player) {
    console.log("hi from findforkmove")
    for (let i = 0; i < 9; i++) {
      if (board[i] === "") {
        let boardCopy = [...board];
        boardCopy[i] = player;

        let winningChances = 0;

        for (let [a, b, c] of WINNING_COMBINATIONS) {
          let line = [boardCopy[a], boardCopy[b], boardCopy[c]];
          let marks = line.filter(v => v === player).length;
          let empties = line.filter(v => v === "").length;

          // Fork: two lines with 2 O's and 1 empty (future win)
          if (marks === 2 && empties === 1) {
            winningChances++;
          }
        }

        if (winningChances >= 2) {
          return i; // Fork found
        }
      }
    }
    return null;
  }


  {/*Fork Logic (for AI detection)
        You can detect a fork like this:
        Step-by-step
        1.Loop through all empty squares on the board.
        For each empty square:
        2.Pretend to place the current player’s mark there.
        Count how many winning lines this move would create where:
        2.1. That line already has exactly one empty square (the one you just filled in your simulation).
        2.2. And the rest of the squares in that line have your own mark only (no opponent marks).
        3. If the count is 2 or more, then that empty square is a fork position.
        4. Pick that move. */}
  const CheckFork = (newboard) => {
    console.log("hi from Checkfork")
    let emptysquaresidx = newboard.map((value, index) => value == '' ? index : null).filter((val) => val !== null)
    let opponentmark = 'X';
    let linecount = 0;
    let numoffork = 0;
    let forkidx = [];
    for (let emptyidx of emptysquaresidx) {
      newboard[emptyidx] = opponentmark;
      for (let pattern of WINNING_COMBINATIONS) {
        let [a, b, c] = pattern;
        if (emptyidx == a || emptyidx == b || emptyidx == c) {
          let value = [newboard[a], newboard[b], newboard[c]]
          let xcount = value.filter(v => v == 'X').length;
          if (xcount === 2 && value.includes('')) {
            linecount += 1;
          }
        }
      }

      if (linecount >= 2) {
        numoffork += 1;
        forkidx.push(emptyidx);
      }
      // Undo the pretend move
      newboard[emptyidx] = '';
      linecount = 0;
    }
    if (forkidx.length > 0) {
      ForceMove(newboard, forkidx);
      return true;
    }
  }
  const ForceMove = (board, forkIdx) => {
    console.log("hi from ForceMOve")
    // Get all empty squares that are NOT part of the fork positions
    let emptySquares = board
      .map((val, idx) => (val === '' && !forkIdx.includes(idx) ? idx : null))
      .filter(val => val !== null);

    for (let idx of emptySquares) {
      // Simulate placing 'O'
      let simulatedBoard = [...board];
      simulatedBoard[idx] = 'O';

      // Check if this creates an immediate win for 'O'
      for (let [a, b, c] of WINNING_COMBINATIONS) {
        let line = [simulatedBoard[a], simulatedBoard[b], simulatedBoard[c]];
        let oCount = line.filter(v => v === 'O').length;
        let emptyIndexInLine = [a, b, c][line.indexOf('')];
        

        if (oCount === 2 && line.includes('')) {
          // Now check if placing 'O' here allows 'X' to win next
          // let boardAfterWinMove = [...simulatedBoard];
          simulatedBoard[emptyIndexInLine] = '';
          simulatedBoard[idx] = 'O';

          if (!willOpponentWin(simulatedBoard)) {
            // ✅ Safe force move found
            checkWinner(simulatedBoard,'O');
            setBoard(simulatedBoard)
            
            return;
          }
          // else{
          //   simulatedBoard[emptyIndexInLine] = 'O';
          //   simulatedBoard[idx]= '';
          //   checkWinner(simulatedBoard,'O');
          //   setBoard(simulatedBoard)
          // }
        }
      }
    }
  };

  // Helper: Check if opponent can win next turn
  const willOpponentWin = (testBoard) => {
    for (let [a, b, c] of WINNING_COMBINATIONS) {
      let line = [testBoard[a], testBoard[b], testBoard[c]];
      let xCount = line.filter(v => v === 'X').length;
      if (xCount === 2 && line.includes('')) {
        return true;
      }
    }
    return false;
  };

  const BestMove = (newboard) => {
    console.log("hi from bestmove")
    let Priority = ['center', 'corner', 'random'];
    let corner = [0, 2, 6, 8];
    for (let p of Priority) {
      if (p == 'center' && newboard[4] == '') {
        let updatedboard = [...newboard]
        updatedboard[4] = 'O';
        setBoard(updatedboard);
        return true; 
      }
      if (p == 'corner') {
        for (let ele of corner) {
          if (newboard[ele] == '') {
            let updatedboard = [...newboard]
            updatedboard[ele] = 'O';
            setBoard(updatedboard)
            return true;
          }
        }
      }
      if (p == 'random') {
        let emptyIndexes = newboard
          .map((val, idx) => (val === '' ? idx : null))
          .filter((val) => val !== null);
        let randompick = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];

        if (newboard[randompick] !== '' || winner) return; //It you can only click empty boxes and only while the game is still ongoing.
        if (newboard[randompick] === '') {
          let updatedboard = [...newboard]
          updatedboard[randompick] = "O";
          setBoard(updatedboard);
          // setxTurn(true)
          checkWinner(updatedboard, 'O');
          return true;
        }
      }
    }

  }
  return (
    <>
      {/* Level: 1 - Build Just the Grid (No Logic)
    Use only React.
    Make 9 buttons.
    No smart logic yet.*/
      }
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <div className="game">
          <div className="board">
            {board.map((value, index) => (
              <div className="box" key={index} onClick={() => handleClick(index)}>
                {value}
              </div>
            ))}
          </div>
          <div className="box2">
            <div className="scoreboard">
              <h2>Scoreboard</h2> <hr />
              <div className="score">
                <p>Player Score</p>
                <div>{playerscore}</div>
              </div>
              <div className="score">
                <p>Computer Score</p>
                <div>{compscore}</div>
              </div>
              <div className="score">
                <p>Draw</p>
                <div>{draw}</div>
              </div>
            </div>
            <button className="reset_btn" onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;