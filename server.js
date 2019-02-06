const fs = require('fs');
let og = require('./oData.json');

fs.copyFile('oData.json', 'data.json', (err) => {
	if(err) console.log(err);

	console.log('file copied')
	let cpFile = './data.json';
	let cdata = require(cpFile);

	for(let i=0; i<4; i++) {
		let gSummer =0, 
			usSummer =0, 
			supSummer =0, 
			remSummer =0;

		for(let j=0; j<5; j++) {
			gSummer += cdata[i][j].gJobDemand
		}
		for(let k=0; k<5; k++) {
			cdata[i][k].gJobDemand = (cdata[i][k].gJobDemand / (gSummer * 0.01)).toFixed(2);
			// console.log(cdata[i][k].gJobDemand);
		}

		for(let j=0; j<5; j++) {
			usSummer += cdata[i][j].usJobDemand
		}
		for(let k=0; k<5; k++) {
			cdata[i][k].usJobDemand = (cdata[i][k].usJobDemand / (usSummer * 0.01)).toFixed(2);
			// console.log(cdata[i][k].usJobDemand);
		}

		for(let j=0; j<5; j++) {
			supSummer += cdata[i][j].supJobDemand
		}
		for(let k=0; k<5; k++) {
			cdata[i][k].supJobDemand = (cdata[i][k].supJobDemand / (supSummer * 0.01)).toFixed(2);
			// console.log(cdata[i][k].supJobDemand);
		}

		for(let j=0; j<5; j++) {
			remSummer += cdata[i][j].remJobDemand
		}
		for(let k=0; k<5; k++) {
			cdata[i][k].remJobDemand = (cdata[i][k].remJobDemand / (remSummer * 0.01)).toFixed(2);
			// console.log(cdata[i][k].remJobDemand);
		}

		console.log(gSummer);
	}

	fs.writeFile(cpFile, JSON.stringify(cdata, null, 4), function(error) {
		if(error) console.log(error);

		console.log(JSON.stringify(cdata));
		console.log(cpFile);
	})
});
