// Exercise #6
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

// Start coding here
const asyncFunction = async () => {
  try {
    const getProfile = await getJohnProfile();
    console.log(getProfile);

    const getOrder = await getJohnOrders();
    console.log(getOrder);
  } catch (error) {
    console.log(error);
  }
};

asyncFunction();
