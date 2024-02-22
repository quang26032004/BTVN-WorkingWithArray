const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
    { id: 2, name: "Smartphone", category: "Electronics", price: 699.99 },
    { id: 3, name: "Headphones", category: "Electronics", price: 149.99 },
    { id: 4, name: "Running Shoes", category: "Sports", price: 89.99 },
    { id: 5, name: "Yoga Mat", category: "Sports", price: 29.99 },
    { id: 6, name: "Dumbbells", category: "Sports", price: 49.99 },
    { id: 7, name: "Coffee Maker", category: "Kitchen", price: 79.99 },
    { id: 8, name: "Blender", category: "Kitchen", price: 39.99 },
    { id: 9, name: "Toaster", category: "Kitchen", price: 29.99 },
    { id: 10, name: "Desk Lamp", category: "Home", price: 19.99 },
    { id: 11, name: "Throw Pillow", category: "Home", price: 14.99 },
    { id: 12, name: "Picture Frame", category: "Home", price: 24.99 },
    { id: 13, name: "Watch", category: "Accessories", price: 199.99 },
    { id: 14, name: "Sunglasses", category: "Accessories", price: 129.99 },
    { id: 15, name: "Wallet", category: "Accessories", price: 49.99 },
    { id: 16, name: "Backpack", category: "Bags", price: 79.99 },
    { id: 17, name: "Tote Bag", category: "Bags", price: 39.99 },
    { id: 18, name: "Messenger Bag", category: "Bags", price: 59.99 },
    { id: 19, name: "Gaming Mouse", category: "Gaming", price: 49.99 },
    { id: 20, name: "Gaming Keyboard", category: "Gaming", price: 69.99 }
];


//dùng forEach để in ra giá của từng product
products.forEach(function(product) {
    console.log("//////////////////////////////");
    console.log(product.price);
});

//dùng map để tạo mảng mới chứa giá của từng product
const prices = products.map(function(product) {
    return product.price;
});
console.log("//////////////////////////////");
console.log(prices);

//dùng filter để tạo mảng mới chứa product có giá lớn hơn 100
const over100 = products.filter(function(product) {
    return product.price > 100;
});
console.log("//////////////////////////////");
console.log(over100);

//dùng find để tìm product có giá bằng 100
const product100 = products.find(function(product) {
    return product.price === 100;
});
console.log("//////////////////////////////");
console.log(product100);

//dùng reduce để tính tổng giá của tất cả product
const totalPrice = products.reduce(function(total, product) {
    return total + product.price;
}, 0);
console.log("//////////////////////////////");
console.log(totalPrice);

//dùng some để kiểm tra xem có product nào có giá lớn hơn 200 không
const over200 = products.some(function(product) {
    return product.price > 200;
});
console.log("//////////////////////////////");
console.log(over200);

//dùng every để kiểm tra xem tất cả product có giá lớn hơn 10 không
const over10 = products.every(function(product) {
    return product.price > 10;
});
console.log("//////////////////////////////");
console.log(over10);

//dùng includes để kiểm tra xem có product nào có giá bằng 50 không
const price50 = products.some(function(product) {
    return product.price === 50;
});
console.log("//////////////////////////////");
console.log(price50);

//dùng indexOf để tìm vị trí của product có giá bằng 50
const index50 = products.findIndex(function(product) {
    return product.price === 50;
});
console.log("//////////////////////////////");
console.log(index50);

//dùng slice để tạo mảng mới từ vị trí 5 đến 10
const products5to10 = products.slice(5, 10);
console.log("//////////////////////////////");
console.log(products5to10);