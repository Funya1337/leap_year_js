let years = [2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2064, 2068, 2072, 2076, 2080, 2084, 2088, 2092, 2096];
let i;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('------------------');
console.log('COMMANDS:');
console.log('all -- show leap years');
console.log('------------------');
rl.question('What is your year? ', (answer) => {
  console.log(`Your year: ${answer}`);
	if(answer === "all") {
		for (i=0; i<years.length; i++) {
			console.log(years[i]);
		}
	}
	if (years.includes(parseInt(answer))) {
		console.log('true');
	} else {
		console.log('false');
	}
  rl.close();
});

