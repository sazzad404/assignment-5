//hisotry data
const historyData = [];

//Heart Icons funtion
let counter = 0;
const hearts = document.querySelectorAll(".heart");
for (const heart of hearts) {
	heart.addEventListener("click", function handler() {
		if (heart.style.color === "red") return;

		heart.style.color = "red";

		counter++;
		const setHeartNumber = document.getElementById("heart-number");
		setHeartNumber.innerText = counter;
	});
}

//Call button funtions

const callButton = document.querySelectorAll(".call-btn");
const coins = document.getElementById("coins").innerText;
const coinsId = document.getElementById("coins");
const reduceCoins = 20;

for (const button of callButton) {
	button.addEventListener("click", function () {
		const card = button.closest(".parent-card");

		if (card) {
			serviceName = card.querySelector("h1").innerText || "service";
			serviceNumber = card.querySelector("h1.text-3xl").innerText || "Number";
		}

		alert(`Service Name: ${serviceName}\nCalling... ${serviceNumber}`);

		let currentCoins = parseInt(coinsId.innerText, 10);

		if (currentCoins >= reduceCoins) {
			currentCoins -= reduceCoins;
			coinsId.innerText = currentCoins;
		} else {
			alert("Not enough coins");
		}

		const data = {
			name: serviceName,
			number: serviceNumber,
			date: new Date().toLocaleTimeString(),
		};

		historyData.push(data);

		const historyContainer = document.getElementById("history");
        historyContainer.innerText= ''

		for (const data of historyData) {
			const div = document.createElement("div");
			div.innerHTML = `
        <div class="flex justify-between items-center p-3 rounded-xl bg-[#fafafa] mt-3">
            <div >
                <h2 class="text-lg mb-3 font-bold">${data.name}</h2>
                <p class="text-gray-500 font-semibold">${data.number}</p>
            </div>
            <div>
                <p class="font-semibold" >${data.date}</p>
            </div>
        </div>
    `;
			historyContainer.appendChild(div);
		}
	});
}

// clear button function

const clearButton = document.getElementById('clear-btn').addEventListener('click', function(){
    historyData.length = '';
    
    document.getElementById('history').innerHTML = ''
})


// copy button function
let copyCounter = 2

const copyButton = document.querySelectorAll(".copy-button")
for(const copy of copyButton){
    copy.addEventListener("click", async function(){
        const card = copy.closest(".parent-card")

        const numberElement = card.querySelector(".hotline-number")
        
        const numberToCopy = numberElement.innerText

        try{
            await navigator.clipboard.writeText(numberToCopy);
            alert(`Copied: ${numberToCopy}`)
        }
        catch(e){
            alert("Copy failed!")
        }

        
        const copyNumbers = document.getElementById("copy-number")
        copyCounter++
        copyNumbers.innerText = copyCounter

    })
}


