
//listData recieves mvPurchaseOrders array in parsed json object
function createList(listData) {

    const ul = document.createElement("ul");
    //Creates list elements for each element in mvPurchaseOrders array
    for (let i = 0; i < listData.length; i++) {
        
        const element = listData[i];
        const li = `<li><a href="#" onclick="getDetails(${i})">{${element.PurchaseOrderTypeAbbreviation}}–{${element.PurchaseOrderNo}}</a></li>`
        ul.insertAdjacentHTML('beforeend',li);
    }

    document.body.appendChild(ul);
}

function createTable(tableData, reqAttr) {

    const table = document.createElement('table')
    //Table data contains PurchaseOrderDetails of specific order
    for (let i = -1; i < tableData.length; i++) {
        //Creating table row for each each element in tabledata
        const tr = document.createElement('tr');
        //Traversing each element in requested attributes
        reqAttr.forEach(element => {
            //If i is -1 create header with given attribute names (in reqAttr)
            if(i == -1) {
                const th = document.createElement('th');
                th.innerText = element;
                tr.appendChild(th);
            } else {
                //Else get the value of specific keys from reqAttr
                const td = document.createElement('td');
                td.innerText = tableData[i][element];
                tr.appendChild(td);
            }

        });
        //Append the row filled with data
        table.appendChild(tr);
    }
    //Return table
    return table;
}


function getDetails(index) {

    //Remove last created details div from the DOM if there is one
    const lastClicked = document.querySelector('#order-details');
    if(lastClicked) document.body.removeChild(lastClicked);

    //Create the new div
    const orderDetails = document.createElement('div');
    orderDetails.id = 'order-details';

    //Create paragraph with basic attributes and append it in orderDetails 
    const  orderBasicAttr= `<hr/> 
                            <p>PurchaseOrderAddress: ${ordersData[index].PurchaseOrderAddress}\n</p>
                            <hr/>                        
                            <hr>PurchaseOrderContactPerson: ${ordersData[index].PurchaseOrderContactPerson}\n</p>
                            <hr/> 
                            <p>PurchaseOrderStatus: ${ordersData[index].PurchaseOrderStatus}\n</p>
                            <hr/> 
                            `;
    orderDetails.insertAdjacentHTML('afterbegin',orderBasicAttr);

    //Create table with required attributes and append it in orderDetails
    tableReqAttr = ['PurchaseOrderRowProductSKU', 'PurchaseOrderRowQuantity', 'PurchaseOrderRowUnitPriceWithoutTaxOrDiscount', 'PurchaseOrderRowTotalAmount'];
    const orderAttrTable = createTable(ordersData[index].PurchaseOrderDetails, tableReqAttr)
    orderDetails.appendChild(orderAttrTable)
    
    //Append orderDetails in body
    document.body.appendChild(orderDetails)
}

createList(ordersData);