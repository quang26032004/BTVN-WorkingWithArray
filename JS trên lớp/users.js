const users = [
    { id: 1, name: "John Smith", email: "john.smith@example.com", age: 35, city: "New York" },
    { id: 2, name: "Emily Johnson", email: "emily.johnson@example.com", age: 28, city: "Los Angeles" },
    { id: 3, name: "Michael Brown", email: "michael.brown@example.com", age: 42, city: "Chicago" },
    { id: 4, name: "Emma Davis", email: "emma.davis@example.com", age: 31, city: "Houston" },
    { id: 5, name: "Sophia Wilson", email: "sophia.wilson@example.com", age: 25, city: "Phoenix" },
    { id: 6, name: "Daniel Martinez", email: "daniel.martinez@example.com", age: 40, city: "San Antonio" },
    { id: 7, name: "Olivia Anderson", email: "olivia.anderson@example.com", age: 29, city: "San Diego" },
    { id: 8, name: "Alexander Thomas", email: "alexander.thomas@example.com", age: 38, city: "Dallas" },
    { id: 9, name: "Ava Taylor", email: "ava.taylor@example.com", age: 33, city: "Philadelphia" },
    { id: 10, name: "William White", email: "william.white@example.com", age: 27, city: "San Francisco" },
    { id: 11, name: "Mia Harris", email: "mia.harris@example.com", age: 45, city: "Austin" },
    { id: 12, name: "James Martin", email: "james.martin@example.com", age: 26, city: "Seattle" },
    { id: 13, name: "Charlotte Garcia", email: "charlotte.garcia@example.com", age: 39, city: "Denver" },
    { id: 14, name: "Benjamin Rodriguez", email: "benjamin.rodriguez@example.com", age: 32, city: "Portland" },
    { id: 15, name: "Amelia Martinez", email: "amelia.martinez@example.com", age: 30, city: "Atlanta" },
    { id: 16, name: "Ethan Walker", email: "ethan.walker@example.com", age: 36, city: "Miami" },
    { id: 17, name: "Isabella King", email: "isabella.king@example.com", age: 24, city: "Detroit" },
    { id: 18, name: "Abigail Green", email: "abigail.green@example.com", age: 34, city: "Minneapolis" },
    { id: 19, name: "Liam Adams", email: "liam.adams@example.com", age: 41, city: "Tampa" },
    { id: 20, name: "Grace Scott", email: "grace.scott@example.com", age: 37, city: "Boston" }
];

//dùng forEach để in ra tuổi của từng user
users.forEach(function(user) {
    console.log(user.age);
});

//dùng map để tạo mảng mới chứa tuổi của từng user
const ages = users.map(function(user) {
    return user.age;
});
console.log("//////////////////////////////");
console.log(ages);

//dùng filter để tạo mảng mới chứa user có tuổi lớn hơn 30
const over30 = users.filter(function(user) {
    return user.age > 30;
});
console.log("//////////////////////////////");
console.log(over30);

//dùng find để tìm user có tuổi bằng 30
const user30 = users.find(function(user) {
    return user.age === 30;
});
console.log("//////////////////////////////");
console.log(user30);

//dùng reduce để tính tổng tuổi của tất cả user
const totalAge = users.reduce(function(total, user) {
    return total + user.age;
}, 0);
console.log("//////////////////////////////");
console.log(totalAge);

//dùng some để kiểm tra xem có user nào có tuổi lớn hơn 40 không
const over40 = users.some(function(user) {
    return user.age > 40;
});
console.log("//////////////////////////////");
console.log(over40);

//dùng every để kiểm tra xem tất cả user có tuổi lớn hơn 20 không
const over20 = users.every(function(user) {
    return user.age > 20;
});
console.log("//////////////////////////////");
console.log(over20);

//dùng includes để kiểm tra xem có user nào có tuổi bằng 25 không
const age25 = users.some(function(user) {
    return user.age === 25;
});
console.log("//////////////////////////////");
console.log(age25);

//dùng indexOf để tìm vị trí của user có tuổi bằng 25
const index25 = users.findIndex(function(user) {
    return user.age === 25;
});
console.log("//////////////////////////////");
console.log(index25);

//dùng slice để tạo mảng mới từ vị trí 5 đến 10
const users5to10 = users.slice(4, 10);
console.log("//////////////////////////////");
console.log(users5to10);




