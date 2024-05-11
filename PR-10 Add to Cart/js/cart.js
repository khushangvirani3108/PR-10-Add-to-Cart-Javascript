let cart = JSON.parse(localStorage.getItem("cart")) ||[];
function record(){
    let tbl = "";
    let grandTotal = 0;
    cart.forEach((val, index) => {
        let total = val.price * val.qty;
        grandTotal += total;
        tbl += `
            <tr>
                <td><img src="${val.image}" height="200px"/></td>
                <td>${val.category}</td>
                <td>
                    <button class="btn btn-success" onclick="qtyPlus(${index})">+</button>
                    <input type="text" id="qty-${index}" value="${val.qty}" min="1">
                    <button class="btn btn-success" onclick="qtyMinus(${index})">-</button>
                </td>
                <td>${val.company}</td>
                <td>₹ ${val.price}</td>
                <td>${val.rating}🌟</td>
                <td>₹ ${total}</td>
                <td><button class="btn btn-danger" onclick="deleteData(${index})">Delete</button></td>
            </tr>`;
    });
    tbl += `
        <tr>
            <td colspan="6" class="fs-4">Grand Total</td>
            <td colspan="2" class= "fs-4"><b>₹ ${grandTotal}</b></td>
        </tr>`;

    document.getElementById("record").innerHTML = tbl;
}


record();

function qtyPlus(index) {
    cart[index].qty++;
    updateCart();
}

function qtyMinus(index) {
    if (cart[index].qty > 1) {
        cart[index].qty--;
        updateCart();
    }
}

function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    record();
}

record();

function deleteData(index){
    cart.splice(index,1);
    alert("Item Successfully Removed !")
    updateCart();
}