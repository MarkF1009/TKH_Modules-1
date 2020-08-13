let names = [['Westly'], ['Snipes'], ['Nicholas'],['Cage'], ['Nasir'], ['Jones'], ['Sean'], ['Carter'], ['Sean'], ['Combs'], ['Michael'],['Jordan'], ['Patrick'], ['Ewing']];

let firstName = [];

let lastName = [];

for (let i=0; i <= names.length; i++) {
	if (names[i] % 2 == 0) {
	firstName.push(names[i]);
  }else{
	  lastName.push(names[i]);
  }
}
console.log(firstName)

console.log(lastName)
