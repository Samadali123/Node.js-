const fs = require("fs")

/**
code to read the content of a file
 * 
 */

// asynchronouly
// fs.readFile("input.txt", (err, data) => {
//     if (err) {
//         console.info(err);
//     } else {
//         console.log(data.toString()); // Convert the data buffer to string
//     }
// });

// synchronously
// const content = fs.readdirSync("input.txt")
// console.log(content)





/**
code to write  a file
 * 
 */

fs.writeFile("new.txt", "new file text here", (err)=>{
    if(err){
        console.info(err)
    }
    else{
        console.log("file created successfully")
    }
})

// const result = fs.writeFileSync("new2.txt", "hellllooooooooooo");
// console.log("file created successfully")






console.log("hello from last");







/**
code to write the content in a  file
 * 
 */