// callback fun & callback hell

// HOFunction that receive function as parameter

//  1.
// const sum = (a, b, c) => {
//   let sum = a + b;

//   c(sum);
// };

// const displaySum = (sum) => {
//   let root = document.getElementById("root");
//   let h2 = document.createElement("h2");
//   h2.innerHTML = `<h1>${sum}</h1>`;
//   root.append(h2);
// };

// // callback function pass as parameter
// sum(5, 5, displaySum);

// 2.

// Not good practice to repete code

// const arr = [1, 2, 3, 4, 5];

// function calculateMul(arr) {
//   const res = [];

//   for (let i = 0; i < arr.length; i++) {
//     res.push(arr[i] * 2);
//   }

//   console.log(res);
// }

// function calculateDiv(arr) {
//   const res = [];

//   for (let i = 0; i < arr.length; i++) {
//     res.push(arr[i] / 2);
//   }

//   console.log(res);
// }

// calculateMul(arr);
// calculateDiv(arr);

// 3.

// const arr = [1, 2, 3, 4, 5];

// function calculateMul(arr, callback) {
//   const res = [];

//   for (let i = 0; i < arr.length; i++) {
//     let element = callback(arr[i]);
//     res.push(element);
//   }

//   console.log(res);
// }

// function multiply(a) {
//   return a * 2;
// }

// function divide(a) {
//   return a / 2;
// }

// calculateMul(arr, multiply);
// calculateMul(arr, divide);

// 4.

const gameList = [];
const game = {};

const fetchData = (callback) => {
  setTimeout(
    (callback) => {
      gameList.push(
        {
          name: "game 1",
          id: "fffhhfhfjjsj",
        },
        {
          name: "game 2",
          id: "rtyreueeie",
        },
        {
          name: "game 3",
          id: "fghdhdjskss",
        }
      );

      console.log("clg after fetching");

      callback();
      console.log(gameList);
    },
    4000,
    callback
  );
};

const displayGame = () => {
  setTimeout(() => {
    for (let i = 0; i < gameList.length; i++) {
      const p = document.createElement("p");
      p.innerText = gameList[i].name;
      document.body.append(p);
    }
    console.log("clg after display");
  }, 1000);
};

// displayGame();
fetchData(displayGame);
