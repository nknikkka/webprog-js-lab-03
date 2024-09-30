function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}

const results = [
    checkForSpam("Latest technology news"), 
    checkForSpam("JavaScript weekly newsletter"), 
    checkForSpam("Get best sale offers now!"),
    checkForSpam("Amazing SalE, only tonight!"), 
    checkForSpam("Trust me, this is not a spam message"),
    checkForSpam("Get rid of sPaM emails. Our book is on sale!"), 
    checkForSpam("[SPAM] How to earn fast money?") 
];
const task3ResultDiv = document.getElementById('task3-result');
results.forEach((result, index) => {
    task3ResultDiv.innerHTML += `Test ${index + 1}: ${result}<br>`;
});
