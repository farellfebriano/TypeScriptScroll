// ARRAY
const arrOfString: string[] = ["test", "test", "test", "test"]; // list of string
const arrOfObject: Object[] = [
  { test_1: "test" },
  { test_1: "test" },
  { test_1: "test" },
  { test_1: "test" },
]; //list of object

//UNION
const arrOfUnion: Object | String | Number[] = [
  1,
  "Mixed Media Creation",
  { test_1: "I'm object" },
];

// OBJECT

let explicitlyTypeObject: object = {
  name: String,
  age: Number,
  beltColour: String,
};

explicitlyTypeObject = {
  name: "Mixed Media Creation",
  age: 7,
  beltColour: "red",
};
