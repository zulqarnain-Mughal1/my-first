// // // This Is About Strings 

// // const pakistancity = ["lahore", "islamabad","sheikhupura","khanqah Dogran"]
// // const indiancity = ["delhi", "Haidrabad", "markhor"]

// // pakistancity.push("sukheki")
// // pakistancity.sort()
// // let st = "pakistan zinda bad"
// // // // console.log(pakistancity.length);
// // // // console.log(indiancity.includes("markhor")); 
// // // // console.log(pakistancity);
// // // console.log(typeof(pakistancity.join(" "))); 
// // // console.log(st.split(" "));

// // console.log(pakistancity.slice(0))
 





// // let fruits = ["apple", "banana","mango","pineapple","guava"]

// // let fruitslice = fruits.slice(1,4)
// // let fruitsplice = fruits.splice(1,3)

// // console.log(fruits);
// // console.log(fruitslice);
// // console.log(fruitsplice);
// // let fruits = ["apple", "banana","mango","pineapple","guava"]
// // let another = ["grapes","orange"]

// // let collect = [...fruits, ...another]

// // console.log(collect);
// // console.log(fruits.concat(another))






// // const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// // const real_another_array = another_array.flat(Infinity)
// // console.log(real_another_array);

// let score1 = 100
// let score2 = 200
// let score3 = 300
// let score4 = 400

// let arry = Array.of(score1,score3,score4)
// let arry2 = Array.from({name:"zulqarnain"})

// console.log(arry);
// console.log(arry2);

let user = {
    id: 101,
    name: "Ali Khan",
    email: "ali.khan@example.com",
    age: 28,
    address: {
        city: "Lahore",
        country: "Pakistan"
    },
    hobbies: ["Cricket", "Reading", "Gaming"],
    isActive: true,
    
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(user);
user.greet();  // Hello, my name is Ali Khan
