console.log(document.body) // document.body allows us to begin accessing stuff on the HTML page

console.log(document.body.children) // Returns an array of the tags below the body tag

console.log(document.body.childNodes) // Returns an array with all of the children plus their content

console.log(document.body.children.childNodes[0].style.color) // Accesses a style element that we can then modify