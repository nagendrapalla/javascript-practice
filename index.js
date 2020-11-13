let inp = `3 4
0 0 0 0
0 0 1 0
0 0 0 0
1 0 0 1
1 0 1 1
1 0 0 1
`;

let inpArr = inp.split("\n");
let rows_n_cols = inpArr[0].split(" ");

let rows = Number(rows_n_cols[0]);
let cols = Number(rows_n_cols[1]);

let rowSteps = Math.ceil(rows / 3);
let colSteps = Math.ceil(cols / 3);

let a = [];
let b = [];

for (let i = 0; i < rows; i++) {
  a[i] = inpArr[i + 1].split(" ").map((l) => Number(l));
  b[i] = inpArr[i + rows + 1].split(" ").map((l) => Number(l));
}

let step = 0;
let r = 0;
let c = 0;

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    updateSubMatrixA(r, c);
    step++;
    c = c + 3;
    if (cols === c) {
      break;
    }
    if (cols - (c + 3) >= 0) {
    } else if (cols - (c + 2) >= 0) {
      c = c - 1;
    } else if (cols - (c + 1) >= 0) {
      c = c - 2;
    } else if (cols - (c + 0) >= 0) {
      c = c - 3;
    }
    if (a.toString() === b.toString()) {
      break;
    }
  }
  r = r + 3;
  if (rows === r) {
    break;
  }
  if (rows - (r + 3) >= 0) {
  } else if (rows - (r + 2) >= 0) {
    r = r - 1;
  } else if (rows - (r + 1) >= 0) {
    r = r - 2;
  } else if (rows - (r + 0) >= 0) {
    r = r - 3;
  }
  if (a.toString() === b.toString()) {
    break;
  }
}

console.log(a);
console.log(b);
console.log(step);

function updateSubMatrixA(row, col) {
  let updated = false;
  for (let i = row; i < row + 3; i++) {
    for (let j = col; j < col + 3; j++) {
      if (a[i][j] !== b[i][j]) {
        a[i][j] = b[i][j];
        updated = true;
      }
    }
  }
  return updated;
}
