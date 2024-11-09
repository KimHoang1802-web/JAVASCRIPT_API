let name = "Nguyễn Văn A";
console.log("name: ", name);
let age = 20;
console.log("age: ", age);

// setTimeout: chờ trong 1 khoảng thời gian mới thực hiện code
setTimeout(() =>{
    // logic cần xử lý sẽ chạy sau 1000ms
    console.log("ok");
}, 1000);
console.log("after setTimeout");

// callback function: định nghĩa là tham số
// đối số là giá trị mà khi mình gọi hàm
// parameter: định nghĩa khi mà mình khai báo hàm
//promise: có 3 trạng thái - pending, resolve(success), reject (fail)
let number = 10;
const myPromise = new Promise((resolve, reject) => {
    // Thực thi các tác vụ bất đồng bộ (call api)
    setTimeout(() => {
        if (number > 10){
            reject("fail");
        }
        resolve("true");
    }, 1000);
});

myPromise.then((response) =>{
    console.log("response: ", response)
})
.catch((error) =>{
    console.log("error: ", error)
});
//promise: giải quyết vấn đề callback hell
// khi có nhiều api phụ thuộc vào nhau
// promise chaning
// function doSomething(){
//     return new Promise((resolve) => {
//         setTimeout(() =>{
//             console.log("Did something");
//             resolve("https://example.com/");
//         },200);
//     });
// }
// doSomething, doSomethingElse, doThirdThing: những promise
// doSomething().then(function(){
//     //result: tại đây là kết quả trả về của doSomething
//     return doSomethingElse(result);
// })
// .then(function(newResult){
//     // newResult: kết quả trả về của doSomethingElse
//     return doThirdThing(newResult);
// })
// .then(function(finalResult){
//     // finalResult: kết quả trả về của doThirdThing
//     console.log(`Got the final result: ${finalResult}`);
// })
// .catch(failureCallback);

// ES7: async await
async function fetchData() {
    try {
        const response = await fetch("https://65fc26b514650eb2100ba786.mockapi.io/products");
        const data = response.json();
        console.log("data: ", data);

        // API 2: chờ data từ API1 để xử lí tiếp
        const response2 = await fetch("https://65fc26b514650eb2100ba786.mockapi.io/products");
        const data2 = response2.await.json()
        console.log("data2: ", data2);
    } catch (error) {
        console.error("error: ", error);
    }
}
fetchData();