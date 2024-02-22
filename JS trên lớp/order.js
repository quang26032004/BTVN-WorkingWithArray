const orders = [
    { id: 1, userId: 1, productId: 2, quantity: 2, date: "2024-02-21T08:00:00Z" },
    { id: 2, userId: 2, productId: 3, quantity: 1, date: "2024-02-20T10:30:00Z" },
    { id: 3, userId: 3, productId: 1, quantity: 3, date: "2024-02-19T15:45:00Z" },
    { id: 4, userId: 4, productId: 4, quantity: 2, date: "2024-02-18T12:15:00Z" },
    { id: 5, userId: 5, productId: 5, quantity: 1, date: "2024-02-17T09:20:00Z" },
    { id: 6, userId: 1, productId: 6, quantity: 2, date: "2024-02-16T14:30:00Z" },
    { id: 7, userId: 2, productId: 7, quantity: 1, date: "2024-02-15T11:45:00Z" },
    { id: 8, userId: 3, productId: 8, quantity: 3, date: "2024-02-14T10:00:00Z" },
    { id: 9, userId: 4, productId: 9, quantity: 2, date: "2024-02-13T13:20:00Z" },
    { id: 10, userId: 5, productId: 10, quantity: 1, date: "2024-02-12T09:00:00Z" },
    { id: 11, userId: 1, productId: 11, quantity: 3, date: "2024-02-11T16:15:00Z" },
    { id: 12, userId: 2, productId: 12, quantity: 1, date: "2024-02-10T14:30:00Z" },
    { id: 13, userId: 3, productId: 13, quantity: 2, date: "2024-02-09T11:45:00Z" },
    { id: 14, userId: 4, productId: 14, quantity: 1, date: "2024-02-08T10:00:00Z" },
    { id: 15, userId: 5, productId: 15, quantity: 3, date: "2024-02-07T13:20:00Z" },
    { id: 16, userId: 1, productId: 16, quantity: 2, date: "2024-02-06T09:00:00Z" },
    { id: 17, userId: 2, productId: 17, quantity: 1, date: "2024-02-05T16:15:00Z" },
    { id: 18, userId: 3, productId: 18, quantity: 3, date: "2024-02-04T14:30:00Z" },
    { id: 19, userId: 4, productId: 19, quantity: 2, date: "2024-02-03T11:45:00Z" },
    { id: 20, userId: 5, productId: 20, quantity: 1, date: "2024-02-02T10:00:00Z" }
];

//dùng forEach để in ra ngày của từng order
orders.forEach(function(order) {
    console.log(order.date);
});

//dùng map để tạo mảng mới chứa ngày của từng order
const dates = orders.map(function(order) {
    return order.date;
});
console.log("//////////////////////////////");
console.log(dates);

//dùng filter để tạo mảng mới chứa order có ngày sau ngày 2024-02-15
const after15 = orders.filter(function(order) {
    return order.date > "2024-02-15";
});
console.log("//////////////////////////////");
console.log(after15);

//dùng find để tìm order có ngày bằng 2024-02-15
const order15 = orders.find(function(order) {
    return order.date === "2024-02-15";
});
console.log("//////////////////////////////");
console.log(order15);

//dùng reduce để tính tổng số lượng của tất cả order
const totalQuantity = orders.reduce(function(total, order) {
    return total + order.quantity;
}, 0);
console.log("//////////////////////////////");
console.log(totalQuantity);

//dùng some để kiểm tra xem có order nào có ngày sau ngày 2024-02-20 không
const after20 = orders.some(function(order) {
    return order.date > "2024-02-20";
});

console.log("//////////////////////////////");
console.log(after20);

//dùng every để kiểm tra xem tất cả order có ngày sau ngày 2024-02-01 không
const after01 = orders.every(function(order) {
    return order.date > "2024-02-01";
});
console.log("//////////////////////////////");
console.log(after01);

//dùng includes để kiểm tra xem có order nào có ngày bằng 2024-02-10 không
const date10 = orders.some(function(order) {
    return order.date === "2024-02-10";
});
console.log("//////////////////////////////");
console.log(date10);

//dùng indexOf để tìm vị trí của order có ngày bằng 2024-02-10
const index10 = orders.findIndex(function(order) {
    return order.date === "2024-02-10";
});
console.log("//////////////////////////////");
console.log(index10);

//dùng slice để tạo mảng mới từ vị trí 5 đến 10
const slice5to10 = orders.slice(5, 10);
console.log("//////////////////////////////");
console.log(slice5to10);
