// DISTRUCTURING AN OBJECT
var human1 = {
    name: "lala",
    age: 24,
    address: "garland 75042",
};
function create(_a) {
    var name = _a.name, address = _a.address;
    console.log("he is ".concat(name, " and he lives in ").concat(address));
}
create(human1);
