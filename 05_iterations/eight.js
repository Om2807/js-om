const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 3)

const myTotal = myNums.reduce( (acc, currval)  => acc+currval, 0 )

// console.log(myTotal);

const shoppingcart = [
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "py course",
        price: 999
    },
    {
        itemname: "mobiledeveloping course",
        price: 5999
    },
    {
        itemname: "datascience course",
        price: 12999
    },
]

const pricetopay = shoppingcart.reduce( (acc,item) => acc + item.price, 0)
console.log(pricetopay);
