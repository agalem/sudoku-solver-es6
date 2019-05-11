const emptySudokuGrid = [
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

window.errorFields = [];

const sudokuGrid = emptySudokuGrid.slice(0);
for (let i = 0, len = emptySudokuGrid.length; i < len; i++) {
    sudokuGrid[i] = emptySudokuGrid[i].slice();
}

window.isInputBoardVisible = true;

global.handleChange = () => {
    const value = Number(event.target.value);
    const id = Number(event.target.id);
    const column = id % 10;
    const row = (id - column) / 10;
    const startingBoxRow = 3 * Math.floor(row / 3);
    const startingBoxCol = 3 * Math.floor(column / 3);
    const checkingCell = [row, column, startingBoxRow, startingBoxCol];

    removeWarningBg(row, column);

    if(value === 0) {
        updateGrid(sudokuGrid, row, column, 0);
        document.getElementById(id).value = '';
    } else {
        if(isInRange(value, 1, 9) && canBeInsert(sudokuGrid, checkingCell, value)) {
            for(let i=0; i<window.errorFields.length; i++) {
                if(errorFields[i] === id) {
                    window.errorFields.splice(i, 1);
                }
            }
            addSuccessBg(row, column);
            updateGrid(sudokuGrid, row, column, value);
        } else {
            errorFields.push(id);
            addWarningBg(row, column);
            updateGrid(sudokuGrid, row, column, 0);
        }
    }
};

global.handleClear = () => {
    event.preventDefault();
    for (let i = 0, len = emptySudokuGrid.length; i < len; i++) {
        sudokuGrid[i] = emptySudokuGrid[i].slice();
        for(let j=0; j<emptySudokuGrid[i].length; j++) {
            removeWarningBg(i, j);
        }
    }
    replaceBoard(window.isInputBoardVisible);
    clearInputs();
};

const clearInputs = () => {
    const inputs = document.getElementsByTagName("input");
    for(let i=0; i<inputs.length; i++) {
        inputs[i].value = "";
    }
};

const removeWarningBg = (row, column) => {
    const id = `${row}${column}`;
    const element = document.getElementById(id).parentElement;
    const sElement = document.getElementById("s" + id).parentElement;
    if(element.classList.contains("input--err")) {
        element.classList.remove("input--err");
    }
    if(element.classList.contains("input--succ")) {
        element.classList.remove("input--succ");
    }
    if(sElement.classList.contains("input--given")) {
        sElement.classList.remove("input--given");
    }
};

const addSuccessBg = (row, column) => {
    const id = `${row}${column}`;
    const sID = "s" + id;
    document.getElementById(id).parentElement.classList.add("input--succ");
    document.getElementById(sID).parentElement.classList.add("input--given");
};

const addWarningBg = (row, column) => {
    const id = `${row}${column}`;
    document.getElementById(id).parentElement.classList.add("input--err");
};

global.handleClick = () => {
    event.preventDefault();
    const alert = document.getElementById("alert");
    if(errorFields.length === 0) {
        replaceBoard(isInputBoardVisible);
        putElementsOnBoard(solve(sudokuGrid));
        if(!alert.classList.contains("hidden")) {
            alert.classList.add("hidden");
        }
    } else {
        if(alert.classList.contains("hidden")) {
            alert.classList.remove("hidden");
            alert.innerText = "You gave invalid values. Fix values in red fields.";
        }
    }
};

const putElementsOnBoard = grid => {
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            const id = `s${row}${col}`;
            document.getElementById(id).innerText = grid[row][col];
        }
    }
};


const replaceBoard = isInputBoardVisible => {
    const inputBoardId = "container";
    const solvedBoardId = "container-solved";
    const inputBoard = document.getElementById(inputBoardId);
    const solvedBoard = document.getElementById(solvedBoardId);
    if(isInputBoardVisible) {
        inputBoard.classList.add("hidden");
        solvedBoard.classList.remove("hidden");
    } else {
        inputBoard.classList.remove("hidden");
        solvedBoard.classList.add("hidden");
    }
    window.isInputBoardVisible = !isInputBoardVisible;
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
                const alert = document.getElementById("alert");
                if(alert.classList.contains("hidden")) {
                    alert.classList.remove("hidden");
                    alert.innerText = "Sudoku cannot be solved";
                }
            }
            i--;
        }
    return grid;
};
