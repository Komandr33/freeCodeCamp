// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {


    if (value !== '' && prop !== 'tracks') {
        records[id][prop] = value;
    } else if (prop === 'tracks' && value !== '' &&
        records[id].hasOwnProperty('tracks') === false) {
        records[id][prop] = [value];
    } else if (prop === 'tracks' && value !== '') {
        records[id][prop].push(value)
    } else if (value == '') {
        delete records[id][prop];
    };

    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

//-----------------------------------------------------------------------

const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}

//-----------------------------------------------------------------------

const myArray = [];
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}

//-----------------------------------------------------------------------

const myArray = [];
for (let i = 1; i < 10; i += 2) {
    myArray.push(i)
}

//-----------------------------------------------------------------------

const myArray = [];
for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

//-----------------------------------------------------------------------

const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

//-----------------------------------------------------------------------

function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//-----------------------------------------------------------------------

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 10)

//-----------------------------------------------------------------------

function sum(arr, n) {
  if (n > 0) {
      return sum(arr, n - 1) + arr[n - 1];
    } else {
      return 0;
    }
}

//-----------------------------------------------------------------------
