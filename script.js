//your JS code here. If required.
const output = document.getElementById("output");
const startTime = Date.now();

output.innerHTML=
	`<tr id="loading">
            <td colspan="2" style = "text-align: center">Loading...</td>
        </tr>`

function createPromise() {
	const time = Math.floor(Math.random()*3)+1;

	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(time);
		}, time*1000);
	});
}

const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

Promise.all([promise1, promise2, promise3])
.then((result)=>{
	output.innerHTML = ""

	result.forEach((time, index) =>{
		const row = document.createElement("tr");

		row.innerHTML=`
			<td>Promise ${index + 1}</td>
           <td>${time}</td>`

		output.appendChild(row);
	});

	const totalTime = (Date.now()-startTime)/1000

	const totalRow = document.createElement("tr");

	totalRow.innerHTML =`
		<td>Total</td>
       <td>${totalTime.toFixed(3)}</td>`
	output.appendChild(totalRow);
})





