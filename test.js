//Information Technology

const getListFromArray = (arr) => {
  const list = arr.map((element) => `<li>${element}</li>`);
  return list.join("");
};

console.log(getListFromArray([12, 13, 14]));
