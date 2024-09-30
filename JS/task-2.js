function formatMessage(message, maxLength) {
    if (message.length <= maxLength) {
        return message; 
    } else {
        return message.slice(0, maxLength) + "..."; 
    }
}

const resultsContainer = document.getElementById("task2-result");
resultsContainer.innerHTML = `
    <p>${formatMessage("Curabitur ligula sapien", 16)}</p>
    <p>${formatMessage("Curabitur ligula sapien", 23)}</p>
    <p>${formatMessage("Vestibulum facilisis purus nec", 20)}</p>
    <p>${formatMessage("Vestibulum facilisis purus nec", 30)}</p>
    <p>${formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)}</p>
    <p>${formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)}</p>
`;
