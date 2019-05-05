const sudokuGrid = [
    [8,9,0,7,4,2,1,3,6],
    [2,7,1,9,6,3,4,0,5],
    [4,6,3,5,8,1,7,9,2],
    [9,0,4,6,1,7,2,5,8],
    [5,1,7,2,3,8,9,6,4],
    [6,8,2,4,5,9,3,7,1],
    [1,5,9,8,0,4,6,2,3],
    [7,4,6,3,2,5,8,1,9],
    [3,2,8,1,9,6,5,4,7]
];

/*
    [8,9,5,7,4,2,1,3,6],
    [2,7,1,9,6,3,4,8,5],
    [4,6,3,5,8,1,7,9,2],
    [9,3,4,6,1,7,2,5,8],
    [5,1,7,2,3,8,9,6,4],
    [6,8,2,4,5,9,3,7,1],
    [1,5,9,8,7,4,6,2,3],
    [7,4,6,3,2,5,8,1,9],
    [3,2,8,1,9,6,5,4,7]
 */



global.handleChange = () => {
    const value = Number(event.target.value);
    if(isInRange(value, 1, 9)) {
        const id = Number(event.target.id);
        const column = id % 10;
        const row = (id - column) / 10;

        updateGrid(sudokuGrid, row, column, value);
    } else {
        console.log('Value out of range');
    }
};

global.handleClick = () => {
    event.preventDefault();

    const searchedIndexes = [];

    sudokuGrid.map((row, i) => {
        row.map((elem, j) => {
            if(elem === 0) {
                const temp = [i, j];
                searchedIndexes.push(temp);
            }
        })
    });

    console.log(solve(sudokuGrid, searchedIndexes));
    // if(solve(sudokuGrid)) {
    //     console.log(sudokuGrid);
    // } else {
    //     console.log('No solution');
    // }
};

const updateGrid = (grid, row, col, num) => {
    return grid[row][col] = num;
};

const isInRange = (num, minNum, maxNum) => {
    return (num >= minNum && num <= maxNum);
};

const presentInRow = (grid, row, num) => {
  for(let col=0; col<grid.length; col++) {
      if(grid[row][col] === num) {
          return true;
      }
  }
  return false;
};

const presentInCol = (grid, col, num) => {
    for(let row=0; row<grid.length; row++) {
        if(grid[row][col] === num) {
            return true;
        }
    }
    return false;
};

const presentInBox = (grid, boxStartRow, boxStartCol, num) => {

    let minCol, maxCol, minRow, maxRow;
    if(boxStartCol >= 1 && boxStartCol <=3) {
        minCol = 0;
        maxCol = 2;
    } else if (boxStartCol >= 4 && boxStartCol <= 6) {
        minCol = 3;
        maxCol = 5;
    } else if (boxStartCol >= 7 && boxStartCol <= 9) {
        minCol = 6;
        maxCol = 8;
    }

    if(boxStartRow >= 1 && boxStartRow <=3) {
        minRow = 0;
        maxRow = 2;
    } else if (boxStartRow >= 4 && boxStartRow <= 6) {
        minRow = 3;
        maxRow = 5;
    } else if (boxStartRow >= 7 && boxStartRow <= 9) {
        minRow = 6;
        maxRow = 8;
    }

    for(let row = minRow; row <= maxRow; row++) {
        for(let col = minCol; col <= maxCol; col++) {
            if(grid[row][col] === num) {
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
   for(let row = 0; row < grid.length; row++) {
       for(let col = 0; col < grid.length; col++) {
           if(grid[row][col] === 0) {
               return ((row + 1)*10) + (col + 1);
           }
       }
   }
   return 0;
};


const solve = (grid, searchedPos) => {

    const limit = 9;

    //first version -> takes to long
    //to be updated

    // for(let i=0; i<searchedPos.length;) {
    //     const row = searchedPos[i][0];
    //     const col = searchedPos[i][1];
    //
    //     let val = 1;
    //     let found = false;
    //
    //     while(!found && val <= limit) {
    //         if(canBeInsert(grid, row, col, val)) {
    //             found = true;
    //             grid[row][col] = val;
    //             i++;
    //         } else {
    //             val++;
    //         }
    //     }
    // }

    return grid;

};
