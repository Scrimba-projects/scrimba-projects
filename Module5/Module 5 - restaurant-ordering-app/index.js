import {menuArray} from './data.js'

let orderItems = [];

document.addEventListener('click', function (e) {
    if (e.target.dataset.additem) {
        handleAddItemClick(e.target.dataset.additem);
    } else if (e.target.dataset.removeitem) {
        handleRemoveItemClick(e.target.dataset.removeitem);
    } else if (e.target.id === 'complete-order-btn') {
        handleCompleteOrderClick();
    }
})

function handleAddItemClick(itemId) {
    const itemAdded = menuArray.filter(function (menuItem) {
        return menuItem.id == itemId
    })[0];

    orderItems.push(itemAdded);
    render();
}

function handleRemoveItemClick(itemId) {
    orderItems = orderItems.filter(l => l.id != itemId);
    render();
}

function handleCompleteOrderClick() {
    console.log('Complete order');
}


function getMenuHTML() {
    let orderSummaryHTML = '';

    if (orderItems.length > 0) {
        let totalPrice = 0;

        orderSummaryHTML += `
            <h2 class="order-title">Your order</h2>
            <div class="order-details">
        `;

        for (let orderItem of orderItems) {
            orderSummaryHTML += ` 
                    <div class="order-item-details">
                        <div class="order-item-name">
                            <h2 class="title">${orderItem.name}</h2>
                            <span class="remove-btn" data-removeitem="${orderItem.id}">remove</span>
                        </div>
                        <div class="order-item-price">
                            <span class="price">$${orderItem.price}</span>
                        </div>
                    </div>             
            `;
            totalPrice += orderItem.price;
        }

        orderSummaryHTML += `
           </div>
           <div class="order-summary">
                <div class="order-item-details">
                    <div class="order-item-name">
                        <h2 class="title">Total price:</h2>
                    </div>
                    <div class="order-item-price">
                        <span class="price">$${totalPrice}</span>
                    </div>
                </div>
           </div>
           <span class="complete-order-btn" id="complete-order-btn">Complete order</span>
        `;
    }

    let menuHTML = ''
    menuArray.forEach((menuItem) => {
        menuHTML += `
            <div class="menu-item-inner">
                <div class="menu-item-image">
                    <img src="${menuItem.pic}" alt="" class="menu-item-picture">
                </div>
                <div class="menu-item-details">
                    <h2 class="title">${menuItem.name}</h2>
                    <p class="description">${menuItem.ingredients}</p>
                    <h3 class="price">$${menuItem.price}</h3>
                </div>
                <div class="menu-item-actions">
                    <img src="images/add-btn.png" data-additem="${menuItem.id}" alt=""/>
                </div>
            </div>
            `
    })

    menuHTML += `
            <div class="order" id="order">
                   ${orderSummaryHTML}
            </div>
    `;

    return menuHTML;
}

function render() {
    document.getElementById('menu').innerHTML = getMenuHTML();
}

render()