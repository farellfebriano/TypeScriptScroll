// DISTRUCTURING AN OBJECT

interface Human {
  name: string;
  age: number;
  address: string;
}

const human1: Human = {
  name: "lala",
  age: 24,
  address: "garland 75042",
};
// { name, address } distructured
function create({ name, address }: Human): void {
  console.log(`he is ${name} and he lives in ${address}`);
}
create(human1);
