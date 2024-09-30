function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = quantity * pricePerDroid;
    if (totalPrice > customerCredits) {
      return "Insufficient funds!";
    } else {
      return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }
  }
  
  document.getElementById("task1-result").innerHTML = `
    <p>${makeTransaction(5, 3000, 23000)}</p>
    <p>${makeTransaction(3, 1000, 15000)}</p>
    <p>${makeTransaction(10, 5000, 8000)}</p>
    <p>${makeTransaction(8, 2000, 10000)}</p>
    <p>${makeTransaction(10, 500, 5000)}</p>
  `;
  