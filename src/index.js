const sudokuGrid = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
];

global.handleChange = () => {
    const value = Number(event.target.value);
    if(isInRange(value)) {
        const id = Number(event.target.id);
        const column = id % 10;
        const row = (id - column) / 10;

        updateGridFromInput(sudokuGrid, row, column, value);
    } else {
        console.log('Value out of range');
    }
};

global.handleClick = () => {
    event.preventDefault();

    if(solve(sudokuGrid)) {
        console.log(sudokuGrid);
    } else {
        console.log('No solution');
    }
};

const updateGridFromInput = (grid, row, col, num) => {
    return grid[row - 1][col - 1] = num;
};

const updateGrid = (grid, row, col, num) => {
    return grid[row][col] = num;
};

const isInRange = num => {
    return (num >= 1 && num <= 9);
};

const presentInRow = (grid, row, num) => {
  for(let col=0; col<9; col++) {
      if(grid[row][col] === num) {
          return true;
      }
  }
  return false;
};

const presentInCol = (grid, col, num) => {
    for(let row=0; row<9; row++) {
        if(grid[row][col] === num) {
            return true;
        }
    }
    return false;
};

const presentInBox = (grid, boxStartRow, boxStartCol, num) => {
   for(let row=0; row<3; row++) {
       for(let col=0; col<3; col++) {
           if(grid[row + boxStartRow][col + boxStartCol] === num) {
               return true;
           }
       }
   }
   return false;
};

const canBeInsert = (grid, row, col, num) => {
    return (!presentInCol(grid, col, num) && !presentInRow(grid, row, num) && !presentInBox(grid, row, col, num));
};

const getEmptyLocation = grid => {
   for(let row = 0; row < 9; row++) {
       for(let col = 0; col < 9; col++) {
           if(grid[row][col] === 0) {
               console.log(row, col);
               return ((row + 1)*10) + (col + 1);
           }
       }
   }
   return 0;
};

const solve = grid => {
    if(getEmptyLocation(grid) === 0) {
        return true;
    }

    const id = getEmptyLocation(grid);
    const column = id % 10;
    const row = (id - column) / 10;



    // for(let value=1; value<=9; value++) {
    //     if(canBeInsert(grid, row - 1, column - 1, value)) {
    //         updateGrid(grid, row - 1, column - 1, value);
    //
    //         if(solve(grid)) {
    //             return true;
    //         }
    //
    //         updateGrid(grid, row - 1, column - 1, 0);
    //         return false;
    //     }
    // }
    // return true;
};