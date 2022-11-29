
const item = [
   { name: 'Bike', price: 100 },
   { name: 'TV', price: 200 },
   { name: 'Album', price: 10 },
   { name: 'Book', price: 5 },
   { name: 'Phone', price: 500 },
   { name: 'Computer', price: 1000 }
];

var n = item.length;
var total = 0;
console.log("List of available items and their price");
for (let i = 0; i < n; i++) {

   console.log(item[i].name + ":" + item[i].price);

}
// Sorting algorithm:Bubble sort 

function Sort(item) {

   for (var i = 0; i < n; i++) {

      for (var j = 0; j < (n - i - 1); j++) {

         if (item[j].price > item[j + 1].price) {

            var temp = item[j].price
            var swapp = item[j].name
            item[j].price = item[j + 1].price
            item[j].name = item[j + 1].name
            item[j + 1].price = temp
            item[j + 1].name = swapp
         }
      }
   }
}
Sort(item);
//Question 1
console.log("The cheap product is:" + item[0].name + "  " + "which cost:" + item[0].price);
//Question 2
console.log("The Expensive product is:" + item[n - 1].name + "  " + "which cost:" + item[n - 1].price);
//Question 3
for (let j = 0; j < n; j++) {

   total += item[j].price;

}
console.log("The total item's price is:" + total);
total = 0;
//Question 4
for (let j = 0; j < n; j++) {
   if (item[j].price < 10) { 

      total= total;

   }
   else {

      total += item[j].price;

   }


}
console.log("The total is:" + total);