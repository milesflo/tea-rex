# teaRex

#### What is teaRex? 
teaRex is a single page e-commerce platform where users can dynamically search, filter, and shop from our wide catalogue of items. 


![screenshot](http://i68.tinypic.com/2whnnfr.png)


### Contents

* [Prompt](#prompt)
* [Features](#features)
* [Technologies](#technologies)
  * [Intermediate Angular](#intermediate-angular)
* [Contributors](#contributors)

#### Prompt

 "Given a .json file, create a single-page application that will render the entire Cataloge in one view, and a Cart in another view. The Catalogue page should support query search, filtering entries via dropdown menus, and the ability to add items to your cart. The Cart view should display items added to cart, quantity of each item, and the total cost of an order, and have the ability to remove items from the cart."

#### Features

_Current_
 - [x] Functioning Cart
 - [x] Search for items with a text query
 - [x] Sort items by Low to High and High to Low
 - [x] Add and Remove items from cart

_Future_
 - [ ] Replace .json file with server/database architecture
 - [ ] Checkout page with oAuth to Paypal

#### Technologies

For this application, our team used the SEAN stack (Sql, Express servers, Angular, and Node.js). All of the information seen is derived from a .json file. We initially used pure CSS, but one of the more atristically inclined collaborators insisted that we try using Google's Materialize. Materialize is a wonderful styling sheet that can be described as "Movement with Purpose". The GUI is kept minimalistic and user interactions are animated in a sublte and intuitive fashion. The end result is a very clear and effortless frontend design.

##### Intermediate Angular

For the team, this was an introduction to some of Angular's more nuanced features. This included filters and services/factories/providers. 

To give users the ability to quickly search by both query **and** by categories, we had to implement what are called _filters_. We used these filters to **only** display entries that met all of a user's search criteria at a given time. In order to have a functioning cart, we needed to be able to persist data from our two separate views. There are a couple of ways to do this, but we thought that a ```factory``` would be most appropriate. If you're not familiar with factories/services/providers and the differences between the three, you can read up on them (here)[http://tylermcginnis.com/angularjs-factory-vs-service-vs-provider/]. In short, **a factory is an object with a number of properties that can be passed into a controller to be read or altered**, as seen here:

```javascript
// typical Angular controller
app.controller('myFactoryController', function($scope, myFactory) {
  alert( myFactory.name + " really likes the color " + myFactory.color );
  // creates an alert "Bob really likes the color green"
  // ====
  // Now let's alter myFactory from this controller
  myFactory.name = "Jim";
  alert( myFactory.name + " really likes the color " + myFactory.color );
  // creates an alert "Jim really likes the color green"
}

// Here we are creating a factory named "myFactory"
app.factory("myFactory",function() {
  var service = {};
  
  service.name = "Bob";
  service.color = "green";
  
  return service;
}
```
This is great! Having an object that transcends ```$scope``` means that controllers don't need to get muddied up by reduntant business logic and information can easily be transfered across a number of different views. This may also allow for better performance and space complexity as applications scale up.

#### Contributors
 * [Miles Florence](http://github.com/milesflo)
 * [Luis Rocha](http://github.com/luisrochadev)
 * [Eric Hodges](http://github.com/erichodges)

---
> teaRex logo is custom and copyright of Luis Rocha.
