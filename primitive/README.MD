# PRIMITIVE TYPE

primitive type is the the most simplest type that we will used for defined a type in Typescript. Most of the type are slef explenatory. hence in "PRIMITIVE TYPE" documentation, we will only explain type which often confused developer.

## Symbol()

A symbol is a primitive data type in javescript and typescript that is used to create unqiue identifiers;

```typescript
let sym1 = Symbol("lalaland");
let sym2 = Symbol("lalaland");

console.log(sym1 === sym2); // ❌ false (Each Symbol is unique)
```

### when to use symbol ?

- To create truly unique keys for objects, avoiding accidental overwrites.

- To hide properties from normal iteration (like for...in or Object.keys()).

- To define constants that are guaranteed to be unique.
