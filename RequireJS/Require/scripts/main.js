
require(["purchase"],function(purchase){
  purchase.purchaseProduct();
});

require.config({
  shim: {
    'purchase': ['products','credits'],
    
  }
});