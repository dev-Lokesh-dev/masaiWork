function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') return obj;

  const result = {};
  for (let key in obj) {
    result[key] = deepCopy(obj[key]);
  }
  return result;
}

const obj = {
  name: "John",
  address: {
    city: "New York",
    zip: 10001
  }
};

const copy = deepCopy(obj);
console.log(copy); 