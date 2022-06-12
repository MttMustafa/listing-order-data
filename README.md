What this code do:

* This small app gets a JSON string from a variable, parses it to a JavaScript object. 
* Creates a list of the orders in the index page (index.js>createList)
* For getting more information about the particular order.
  Each list member attaches to an onClick event, which the event launches the getDetails function. (index.js>getDetails)
* getDetails function destroys and creates a div block for dynamically viewing data
* The div contains basic order attributes and also a table contains PurchaseOrderDetails
* Basic attributes appended from a JavaScript template literal
* Table created dynamically according to number of attributes required, which are taken as an reqAttr argument.
