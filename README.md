What this code do:

* This small app gets a JSON string from a variable, parses it to a JavaScript object. 
* Creates a list of the orders in the index page (index.js>createList)
* For getting more information about the particular order.
  Each list member attaches to an onClick event, which the event launches the getDetails function. (index.js>getDetails)
* getDetails function destroys and creates a div block for dynamically viewing data
* The div contains basic order attributes and also a table contains PurchaseOrderDetails
* Basic attributes appended from a JavaScript template literal
* Table created dynamically according to number of attributes required, which are taken as an reqAttr argument.

How it relates to my previous knowledge:

I have been working with JavaScript about 2 years. So, being familiar to the language and my overall knowledge about interacting with DOM helped a lot
I learned backend side of the JS more recently and while working with it, I got familiar with working JSON from interacting APIs which most of them use data stored in JSON format.


