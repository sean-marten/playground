// To make an object/array into a string, you can use stringify (essentially stringify)

const me = { name: "sean" };

console.log(JSON.stringify(me))

// To return the string format back into whatever array/object is was before, use parse

const jArray = JSON.parse(me);