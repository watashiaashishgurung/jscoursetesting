let items = [];
let totalCost = 0;

function addItem() {
    const itemName = document.getElementById('itemName').value;
    const quantity = parseFloat(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('price').value);

    if (itemName && !isNaN(quantity) && !isNaN(price)) {
        const itemTotalCost = quantity * price;
        items.push({ name: itemName, quantity: quantity, price: price, totalCost: itemTotalCost });

        updateItemList();
        updateTotalCost();
    } else {
        alert('Please enter valid item details.');
    }
}

function updateItemList() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item';
        itemElement.innerText = `${item.name} - Quantity: ${item.quantity}, Price per Unit: $${item.price.toFixed(2)}, Total Cost: $${item.totalCost.toFixed(2)}`;
        itemList.appendChild(itemElement);
    });
}

function updateTotalCost() {
    totalCost = items.reduce((sum, item) => sum + item.totalCost, 0);
    document.getElementById('totalCost').innerText = `Total Cost: $${totalCost.toFixed(2)}`;
}