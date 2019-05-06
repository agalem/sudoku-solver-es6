const sudokuGrid = [
    [8,9,5,7,4,0,1,3,6],
    [2,0,1,9,6,0,4,8,5],
    [4,0,3,5,8,0,7,9,2],
    [9,0,4,6,1,0,2,0,8],
    [5,0,7,0,3,0,9,0,4],
    [6,8,2,0,5,9,3,0,1],
    [1,5,9,0,7,4,6,0,3],
    [7,4,6,0,2,5,8,0,9],
    [3,2,8,1,9,6,5,0,7]
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
    console.log(solve(sudokuGrid));
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
    if(boxStartCol >= 0 && boxStartCol <=2) {
        minCol = 0;
        maxCol = 2;
    } else if (boxStartCol >= 3 && boxStartCol <= 5) {
        minCol = 3;
        maxCol = 5;
    } else if (boxStartCol >= 6 && boxStartCol <= 8) {
        minCol = 6;
        maxCol = 8;
    }

    if(boxStartRow >= 0 && boxStartRow <=2) {
        minRow = 0;
        maxRow = 2;
    } else if (boxStartRow >= 3 && boxStartRow <= 5) {
        minRow = 3;
        maxRow = 5;
    } else if (boxStartRow >= 6 && boxStartRow <= 8) {
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

const getEmptyLocations = grid => {
    const emptyLocations = [];
   for(let row = 0; row < grid.length; row++) {
       for(let col = 0; col < grid.length; col++) {
           if(grid[row][col] === 0) {
               //return ((row + 1)*10) + (col + 1);
               emptyLocations.push([row, col]);
           }
       }
   }
   return emptyLocations;
};

const testValues = (grid, index) => {
  if(index >= grid.length) {
      return true;
  } else if (grid[index] !== 0) {
      return testValues(grid, index + 1);
  }

  for(let i=1; i<=9; i++) {
      if(canBeInsert(grid, Math.floor(index / 9), index % 9, i)) {
          grid[index] = i;
          if(testValues(grid, index + 1)) {
              return true;
          }
      }
  }

  grid[index] = 0;
  return false;
};

const findPossibleValues = (grid, emptyLocations) => {
    const possibleValues = [];
    for(let i=0; i<emptyLocations.length; i++) {
        const temp = [];
        const row = emptyLocations[i][0];
        const col = emptyLocations[i][1];

        for(let val = 1; val <= 9; val ++) {
            if(canBeInsert(grid, row, col, val)) {
                temp.push(val);
            }
        }
        possibleValues.push(temp);
    }
    return possibleValues;
};

const solve = (grid) => {
    let emptyLocations = getEmptyLocations(grid);
    let possibleValues = findPossibleValues(grid, emptyLocations);

    for (let i = 0; i < emptyLocations.length; i++) {
        const row = emptyLocations[i][0];
        const col = emptyLocations[i][1];
        if (possibleValues[i].length === 1) {
            grid[row][col] = possibleValues[i][0];
            return solve(grid);
        }
    }
    if (possibleValues.map(elem => elem.length !== 1)) {
        for (let i = 0; i < emptyLocations.length; i++) {
            const row = emptyLocations[i][0];
            const col = emptyLocations[i][1];

            for (let j = 0; j < possibleValues[i].length; j++) {
                updateGrid(grid, row, col, possibleValues[i][j]);
                return solve(grid);
            }
        }

    }
    return grid;
};
