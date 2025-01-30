// // let myDate = new Date()

// // // console.log(myDate.toDateString())
// // // console.log(myDate.toISOString())
// // // console.log(myDate.toJSON())
// // // console.log(myDate.toLocaleDateString())
// // // console.log(myDate.toLocaleString())
// // // console.log(myDate.toString())
// // // console.log(myDate.toLocaleTimeString())
// // // console.log(myDate.toTimeString())
// // // console.log(myDate.toUTCString())

// // // console.log(myDate.getDate())
// // // console.log(myDate.getDay())
// // // console.log(myDate.getHours())
// // // console.log(myDate.getFullYear())
// // // console.log(myDate.getMinutes())
// // // console.log(myDate.getMonth()+1)
// // // console.log(myDate.getSeconds())
// // // console.log(myDate.getTime())

// // // let myCreateDate = new Date(2025,0,23,6,4)
// // let testDate = new Date("02-14-2024")
// // // let myCreatedDate = new Date("01-14-2023")
// // // console.log(myCreateDate.toLocaleString())

// // let myOnly = Date.now()
// // // console.log(myOnly)
// // // console.log(testDate.getTime())

// // console.log(testDate.getTime() - myOnly)

// // console.log(Math.floor(myOnly/1000))

// let start = new Date("1996-10-04");
// let end = new Date("2025-02-01");

// let diff = end - start;  // Difference in milliseconds

// // console.log(diff / (1000 * 60 * 60 * 24));  // Convert to days (Output: 31)

// console.log(Math.floor((diff/(1000*60*60*24))/365))


let zaki = new Date()

console.log(zaki.toLocaleString("default",{
    // dateStyle:"full",
    // dateStyle:"short",
    // dateStyle:"medium",
    // dateStyle:"long",
    era:"long"

}))
