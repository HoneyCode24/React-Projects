

function HardMode(){
    {/*Computer Move Logic:
    1. Can I win? → Yes → Win.
    2. Can Player create fork next? → Yes → Block fork.
    3. Can Player win next? → Yes → Block.
    4. Can I create fork? → Yes → Do it.
    5. Else → Priority: Center → Opposite Corner → Empty Corner → Edge.*/
}
    // Can Computer win in next move- go for it 
    const CompWinMove = ()=>{
        for(let pattern of WINNING_COMBINATIONS){
            let [a,b,c] = pattern;
            let value = [newboard[a], newboard[b], newboard[c]]
            let ocount = value.filter(v => v =='O').length
            let emptyindexo = pattern[value.indexOf('')]

            if(ocount === 2 && value.includes('')){
                let updatedboard = [...newboard]
                updatedboard[emptyindexo] = 'O'
                setBoard(updatedboard)
                checkWinner(updatedboard, 'O')
                return;
            }
        }
    }
    // check if player is about to win — block them.
    const PlayerWInMove = ()=>{
        for(let pattern of WINNING_COMBINATIONS){
            let [a,b,c] = pattern;
            let value = [newboard[a], newboard[b], newboard[c]]
            let xcount = value.filter(v => v =='X').length
            let emptyindex = pattern[value.indexOf('')]

            if(xcount === 2 && value.includes('')){
                let updatedboard = [...newboard]
                updatedboard[emptyindex] = 'O'
                setBoard(updatedboard)
                checkWinner(updatedboard, 'O')
                return;
            }
        }
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
    const CheckFork = ()=>{
        let emptysquaresidx = newboard.map((value,index)=> value ==''? index : null).filter((val)=> val !== null)
        let opponentmark = 'X';
        let linecount = 0;
        for(let emptyidx of emptysquaresidx){
            newboard[emptyidx] = opponentmark;
            for(let pattern of WINNING_COMBINATIONS){
                let [a,b,c] = pattern;
                let value = [newboard[a], newboard[b], newboard[c]]
                let xcount = value.filter(v => v =='X').length;
                if(xcount === 2 && value.includes('')){
                    linecount += 1;
                }
            }
            if(linecount >= 2){
                console.log("Found the empty index of the fork :", emptyidx)
            }
        }
    }
    return(
        <div>

        </div>
    );
}

export default HardMode;