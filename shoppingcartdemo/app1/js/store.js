//----------------------------------------------------------------
// store
function store() {
    this.products = [
        new product("CAKE-1", "Chocolate Velvet Boule", "A dome shaped cake filled with a velvety chocolate mousse and clothed in a gorgeous chocolate glaze.", 40),
        new product("CAKE-2", "Three Layer Chocolate Happy Birthday Cake", "This is the ultimate chocolate birthday cake! A high three layered chocolate cake is filled with rich chocolate cream. It is surrounded by chocolate glaze, appointed with an elegant chocolate border, and decorated with 'Happy Birthday'.", 40),
        new product("CAKE-3", "Personalizable Vanilla Bean Cake", "No one can resist this deliciously delectable cake which has flecks of real vanilla bean speckled on top of three moist cake layers, which are separated by a light vanilla specked buttercream. Finished with white chocolate shavings and a super smooth buttercream icing touched with just the right amount of sweetness.", 40),
        new product("CAKE-4", "Personalizable White & Chocolate Mousse", "A fantasy dessert! Satin white chocolate mousse nests on a layer of chocolate mousse. Together they are enrobed with a divine dark chocolate. White chocolate drizzles decorate the top for a decadent touch!", 40),
        new product("CAKE-5", "Chocolate Mousse Torte", "Even the hardest-to-please chocolate addict will be more than satisfied by this decadent creation. Creamy chocolate mousse provides the filling for two layers of impossibly moist chocolate cake. As if that wasn’t enough of a cocoa fix, the entire cake is enrobed with a milk chocolate icing and dark chocolate glaze. Fudge rosettes and dark chocolate shavings make the cake as beautiful as it is delicious.", 40),
        new product("CAKE-6", "Red Velvet Cake", "Flavorful cream cheese icing and white chocolate shavings generously cover the most luscious red chocolate cake. Send this Southern classic as a gift and make your special someone happy!", 40),
        new product("CAKE-7", "Tiramisu Classico Happy Birthday Cake", "Coffee-washed cake layered with classic mascarpone custard and garnished with delicious coffee whipped cream, dark chocolate shavings and a dusting of cocoa . . . that’s amore!", 40),
        new product("CAKE-8", "Chocolate Molten Cakes", "Notoriously delicious but equally difficult to make, chocolate molten cakes are a restaurant staple. We've taken the hard work out of it by making these 4 individual cakes just for you and your lucky recipient. Simply pop them in the oven and they're ready to be devoured.", 40),
    ];
}
store.prototype.getProduct = function (code) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].code == code)
            return this.products[i];
    }
    return null;
}
