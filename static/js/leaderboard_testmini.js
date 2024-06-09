// function generateTable() {
// 	var data = score_table; // The variable from model_scores.js

// 	var table = '<table class="js-sort-table" id="results">';
// 	table += `<tr>
//         <td class="js-sort"><strong>Model</strong></td>
//         <td class="js-sort"><strong>atkins</strong></td>
//         <td class="js-sort"><strong>chemmc</strong></td>
//         <td class="js-sort"><strong>quan</strong></td>
//         <td class="js-sort-number"><strong>matter</strong></td>
//         <td class="js-sort-number"><strong>fund</strong></td>
//         <td class="js-sort-number"><strong>class</strong></td>
//         <td class="js-sort-number"><strong>thermo</strong></td>
//         <td class="js-sort-number"><strong>diff</strong></td>
//         <td class="js-sort-number"><strong>stat</strong></td>
//         <td class="js-sort-number"><strong>calc</strong></td>
//         <td class="js-sort-number"><strong>Avg</strong></td>
//     </tr>`;

// 	// Iterate through the outer sections
// 	for (var section in data) {
// 		// Add section title row
// 		// table += `<tr class="section-title"><td colspan="13">${section}</td></tr>`;

// 		// Iterate through the inner models within each section
// 		for (var modelName in data[section]) {
// 			var entry = data[section][modelName];

// 			table += '<tr>';
// 			table += `<td><b>${modelName}</b></td>`;
// 			table += `<td>${entry.atkins}</td>`;
// 			table += `<td>${entry.chemmc}</td>`;
// 			table += `<td>${entry.quan}</td>`;
// 			table += `<td>${entry.matter}</td>`;
// 			table += `<td>${entry.fund}</td>`;
// 			table += `<td>${entry.class}</td>`;
// 			table += `<td>${entry.thermo}</td>`;
// 			table += `<td>${entry.diff}</td>`;
// 			table += `<td>${entry.stat}</td>`;
// 			table += `<td>${entry.calc}</td>`;
// 			table += `<td>${entry.Avg}</td>`;
// 			table += '</tr>';
// 		}
// 	}

// 	table += '</table>';
// 	document.getElementById('textbook_leaderboard').innerHTML = table;
// }

// // Call the function when the window loads
// window.onload = generateTable;
function generateTable() {
    var data = score_table; // Assuming score_table is defined in your model_scores.js

    // Start the table and add the header with two rows
    var table = '<table class="js-sort-table" id="results">';
    table += `
        <thead>
            <tr>
                <th rowspan="2"><strong>Model</strong></th>
				<th rowspan="2"><strong>Param</strong></th>
				<th colspan="3"><strong>Diagnosis</strong></th>
                <th colspan="3"><strong>Procedures</strong></th>
				<th colspan="3"><strong>Lab Test Orders</strong></th>
				<th colspan="3"><strong>Prescriptions</strong></th>
            </tr>
            <tr>
                
				<td class="js-sort-number"><strong>Pre.</strong></td>
				<td class="js-sort-number"><strong>Rec.</strong></td>
				<td class="js-sort-number"><strong>F1</strong></td>
				<td class="js-sort-number"><strong>Pre.</strong></td>
				<td class="js-sort-number"><strong>Rec.</strong></td>
				<td class="js-sort-number"><strong>F1</strong></td>
				<td class="js-sort-number"><strong>Pre.</strong></td>
				<td class="js-sort-number"><strong>Rec.</strong></td>
				<td class="js-sort-number"><strong>F1</strong></td>
				<td class="js-sort-number"><strong>Pre.</strong></td>
				<td class="js-sort-number"><strong>Rec.</strong></td>
				<td class="js-sort-number"><strong>F1</strong></td>
            </tr>
        </thead>
        <tbody>`;

    // Iterate through the outer sections
    for (var section in data) {
        // Optional: Add section title row
        // table += `<tr class="section-title"><td colspan="12">${section}</td></tr>`;

        // Iterate through the inner models within each section
        for (var modelName in data[section]) {
            var entry = data[section][modelName];

            table += '<tr>';
            table += `<td><b>${modelName}</b></td>`;
			table += `<td><b>${entry.param}</b></td>`;
			table += `<td>${entry.pre_d}</td>`; //dia
            table += `<td>${entry.rec_d}</td>`;
            table += `<td>${entry.f1_d}</td>`;
			table += `<td>${entry.pre_s}</td>`;//procedures
            table += `<td>${entry.rec_s}</td>`;
			table += `<td>${entry.f1_s}</td>`;
            table += `<td>${entry.pred_p}</td>`;//lab
            table += `<td>${entry.rec_p}</td>`;
            table += `<td>${entry.f1_p}</td>`;
            table += `<td>${entry.pre_l}</td>`;//prescription
            table += `<td>${entry.rec_l}</td>`;
            table += `<td>${entry.f1_l}</td>`;
            
            table += '</tr>';
        }
    }

    table += '</tbody></table>';
    document.getElementById('textbook_leaderboard').innerHTML = table;
}

// Call the function when the window loads
window.onload = generateTable;
