// const putDisplay = (sum) => {
//   const root = document.getElementById("root");

//   const heading2 = document.createElement("h2");
//   heading2.innerText = sum;
//   heading2.classList.add("heading2");
//   root.append(heading2);
// };

// const calculate = (n1, n2) => {
//   let res = n1 + n2;
//   return res;
// };

// const add = calculate(15, 5);
// putDisplay(add);
// console.log(add);

// PROMISE

const arr = [];

const fetchData = () => {
  //   const a = new Promise((resolve, reject) => {
  //     let success = false;
  //     if (success) {
  //       resolve("promise fullfilled");
  //     } else {
  //       reject("SOme technical error");
  //     }
  //   });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      arr.push({ name: "ajay" }); // comment it to ge error
      if (arr.length > 0) {
        resolve("Data fetched");
      } else {
        reject("error");
      }
    }, 2000);
  });
};
fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finally we reach here");
  });

// 1. NOT GOOD PRACTICE
// a.then(
//   (para) => {
//     console.log(para);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// 2.  SEPERATE PROMISE handler
// a.then((para) => {
//   console.log(para);
// });

// a.catch((err) => {
//   console.log(err);
// });
