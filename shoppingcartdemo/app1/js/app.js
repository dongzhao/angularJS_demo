'use strict';

var demoApp = angular.module('ShoppingcartDemo', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/store', {
        templateUrl: 'view/store.htm',
        controller: storeController 
      }).
      when('/products/:code', {
        templateUrl: 'view/product.htm',
        controller: storeController
      }).
      when('/cart', {
        templateUrl: 'view/shoppingCart.htm',
        controller: storeController
      }).
      otherwise({
        redirectTo: '/store'
      });
}]);

demoApp.factory("DataService", function () {

    // create store
    var myStore = new store();

    // create shopping cart
    var myCart = new shoppingCart("ShoppingcartDemo");

    // enable PayPal checkout
    // note: the second parameter identifies the merchant; in order to use the 
    // shopping cart with PayPal, you have to create a merchant account with 
    // PayPal. You can do that here:
    // https://www.paypal.com/webapps/mpp/merchant
    myCart.addCheckoutParameters("PayPal", "bernardo.castilho-facilitator@gmail.com");

    // enable Google Wallet checkout
    // note: the second parameter identifies the merchant; in order to use the 
    // shopping cart with Google Wallet, you have to create a merchant account with 
    // Google. You can do that here:
    // https://developers.google.com/commerce/wallet/digital/training/getting-started/merchant-setup
    myCart.addCheckoutParameters("Google", "500640663394527",
        {
            ship_method_name_1: "UPS Next Day Air",
            ship_method_price_1: "20.00",
            ship_method_currency_1: "USD",
            ship_method_name_2: "UPS Ground",
            ship_method_price_2: "15.00",
            ship_method_currency_2: "USD"
        }
    );

    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
});