const sudokuGrid = [
    [0,0,0,6,0,7,0,8,5],
    [0,0,0,0,0,0,6,0,0],
    [0,0,7,0,0,0,0,0,0],
    [0,5,0,0,0,3,0,0,4],
    [3,7,0,0,0,8,0,0,0],
    [6,0,0,2,0,0,0,0,0],
    [8,0,0,0,0,0,3,1,0],
    [0,3,1,0,4,9,0,0,0],
    [0,0,0,0,0,0,0,0,9]
];

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

const getEmptyLocations = grid => {
    const emptyLocations = [];
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid.length; col++) {
            if(grid[row][col] === 0) {
                const startingBoxRow = 3 * Math.floor(row / 3);
                const startingBoxCol = 3 * Math.floor(col / 3);
                emptyLocations.push([row, col, startingBoxRow, startingBoxCol]);
            }
        }
    }
    return emptyLocations;
};

const presentInRow = (grid, emptyCell, value) => {
    const row = emptyCell[0];
    for(let col=0; col<9; col++) {
        if(grid[row][col] === value) {
            return true;
        }
    }
    return false;
};

const presentInCol = (grid, emptyCell, value) => {
    const col = emptyCell[1];
    for(let row = 0; row < 9; row++) {
        if(grid[row][col] === value) {
            return true;
        }
    }
    return false;
};

const presentInBox = (grid, emptyCell, value) => {
    const startingBoxRow = emptyCell[2];
    const startingBoxCol = emptyCell[3];
    for(let i=0; i<3; i++) {
        const gridRow = grid[startingBoxRow + i];
        for(let j=0; j<3; j++) {
            if(gridRow[startingBoxCol + j] === value) {
                return true;
            }
        }
    }
    return false;
};

const canBeInsert = (grid, emptyCell, value) => {
    return !presentInBox(grid, emptyCell, value) &&
        !presentInRow(grid, emptyCell, value) &&
        !presentInCol(grid, emptyCell, value);
};

const solve = grid => {
    const emptyLocations = getEmptyLocations(grid);

    nextEmptyCell: for (let i = 0; i < emptyLocations.length;) {
            const allCellData = emptyLocations[i];
            const row = allCellData[0];
            const col = allCellData[1];
            let inputValue = grid[row][col] + 1;
            while (inputValue <= 9) {
                if (canBeInsert(grid, allCellData, inputValue)) {
                    grid[row][col] = inputValue;
                    i++;
                    continue nextEmptyCell;
                }
                inputValue++;
            }
            grid[row][col] = 0;
            if (i === 0) {
                console.log("Sudoku cannot be solved");
            }
            i--;
        }
    return grid;
};

