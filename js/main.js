window.onload = function() {
	getCovidStats();
}

function getCovidStats() {
	fetch('https://nepalcorona.info/api/v1/data/nepal')
		.then(function (resp) { return resp.json() })
		.then(function (data) {
			console.log('data');
			let tested_positive = data.tested_positive;
			let tested_negative = data.tested_negative;
			let tested_total = data.tested_total;
			let in_isolation = data.in_isolation;
			let quarantined = data.quarantined;
			let recovered = data.recovered;
			let deaths = data.deaths;
			let updated_at = data.updated_at;

			document.getElementById('tested_positive').innerHTML = tested_positive.toLocaleString('en');
			document.getElementById('tested_negative').innerHTML = tested_negative.toLocaleString('en');
			document.getElementById('tested_total').innerHTML = tested_total.toLocaleString('en');
			document.getElementById('in_isolation').innerHTML = in_isolation.toLocaleString('en');
			document.getElementById('quarantined').innerHTML = quarantined.toLocaleString('en');
			document.getElementById('recovered').innerHTML = recovered.toLocaleString('en');
			document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
			document.getElementById('updated_at').innerHTML = updated_at.substr(0, 10);
			document.getElementById('percent').innerHTML = tested_positive - deaths - recovered;
		})
}