const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "patrick",
  [password]: "1234567",
  age: 27
};

console.log(user.username);
console.log(user.password);