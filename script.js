const byteSize = (str) => {
  // write your code here
	  let bytesize = new Blob([str]);
  return bytesize.size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str))
