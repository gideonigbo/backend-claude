// Assignment
// Task 1 — File Manager:
const fs = require("fs/promises")
const path = require("path")


const filePath = path.join(__dirname, "data.txt")
console.log("New file created @:", filePath)

const fileManager = async () => {
    try {
        //Write
        await fs.writeFile(filePath, "Ebuka Gideon Igbo, 5th July 2026", "utf8")
        console.log("Written")

        //Read
        const data = await fs.readFile(filePath, "utf8")
        console.log(data)

        //Append
        await fs.appendFile(filePath, "\nBackend course — Session 3 complete", "utf8")
        console.log("File Updated!")

        //Read
        const update = await fs.readFile(filePath, "utf8")
        console.log(update)
        
    } catch (err) {
        console.error(err)
    }
}

fileManager()


//Task 2 — Multi-route Server:
const http = require("http")

const server = http.createServer((req, res) => {
    const {method, url } = req

    res.setHeader("Content-Type", "application/json")

    if (method === "GET" && url === "/"){
        res.writeHead(200)
        res.end(JSON.stringify({
            message: "Welcome"
        }))
    } else if (method === "GET" && url === "/products") {
        res.writeHead(200)
        res.end(JSON.stringify({
            products : [
                {id: 23, productName: "Shoes", price: 3400},
                {id: 21, productName: "paper", price: 400},
                {id: 22, productName: "Cream", price: 34500},
                {id: 27, productName: "Laptop", price: 420000}
            ]
        }))
    } else if(method === "GET" && url === "/products/featured")
        // Task 3
// C:\Program Files\nodejs\node.exe .\session3.js
// Server is running on http://localhost:3000
// Uncaught ReferenceError ReferenceError: methad is not defined
//     at <anonymous> (c:\Users\HP\Desktop\AXIA\relearn\backend-course-again\session3.js:57:12)
        {
        const products = [
            {id: 23, productName: "Shoes", price: 3400, featured: true},
            {id: 21, productName: "paper", price: 400, featured: false},
            {id: 22, productName: "Cream", price: 34500, featured: true},
            {id: 27, productName: "Laptop", price: 420000, featured: true}
        ]

        const featured = products.filter((product) => product.featured === true)
        res.writeHead(200)
        res.end(JSON.stringify({
            featured
        }))
    } else if(method === "POST" && url === "/products") {
        res.writeHead(201)
        res.end(JSON.stringify({
            message: "Product created",
            method: req.method
        }))
    } else {
         res.writeHead(404)
         res.end(JSON.stringify({
            error: "Not found"
         }))
    }
})


const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


































// // console.log("Node.js is running!")
// // console.log("Node version: ", process.version)
// // console.log("Operating system: ", process.platform)

// const http = require("http");

// const server = http.createServer((req, res) => {
//     // req — the incoming request object
//     // res — the response object you use to send back data

//     const { method, url } = req;
//     res.setHeader("Content-type", "application/json")

//     if (method === "GET" && url === "/users") {
//         res.writeHead(200)
//         res.end(JSON.stringify({
//             users: [
//                 {id: 1, name: "Gee"},
//                 {id: 2, name: "Tee"}
//             ]
//         }))
//     } else if (method === "GET" && url === "/health") {
//         res.writeHead(200)
//         res.end(JSON.stringify({status: "Server is healthy"}))
//     } else {
//         res.writeHead(404)
//         res.end(JSON.stringify({ error: "Route not found"}))
//     }
// });

// const PORT = 3000;

// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

// process.on("SIGINT", () => {
//     console.log("\nServer shutting down gracefully...");
//     process.exit(0);
// });