//Exercise #3
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

function onSuceessDisplay (data) {
  console.log(data)
  }
  function onFailDisplay (error) {
    console.log(error) 
  }

  getJohnProfile()
  .then(onSuceessDisplay)
  .then(getJohnOrders) 
  .then(onSuceessDisplay)