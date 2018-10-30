// var argvs = process.argv;

// console.log(argvs);

var argvs = process.argv.slice(2);

// console.log(argvs.toString());

switch(argvs[0]){
	case "init":
		console.log("123");
		break;
	case "install":
	 var install = argvs[1]; 
		console.log("456"+install);
		break;
	case "add":
		console.log("789");
		break;
}
