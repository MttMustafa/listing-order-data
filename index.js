
function createList(listData) {

    const ul = document.createElement("ul");
    
    for (let i = 0; i < listData.length; i++) {
        
        const element = listData[i];
        const li = `<li><a href="#" onclick="getDetails(${i})">{${element.PurchaseOrderTypeAbbreviation}}–{${element.PurchaseOrderNo}}</a></li>`
        ul.insertAdjacentHTML('beforeend',li);
    }

    document.body.appendChild(ul);
}

function createTable(tableData, reqAttr) {

    const table = document.createElement('table')

    for (let i = -1; i < tableData.length; i++) {

        const tr = document.createElement('tr');
        
        reqAttr.forEach(element => {

            if(i == -1) {
                const th = document.createElement('th');
                th.innerText = element;
                tr.appendChild(th);
            } else {
                const td = document.createElement('td');
                td.innerText = tableData[i][element];
                tr.appendChild(td);
            }

        });

        table.appendChild(tr);
    }
    
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