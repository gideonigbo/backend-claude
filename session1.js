//1
const product = {
    name: "Puma Shoe",
    price: 15000.00,
    category: "Shoes",
    inStock: true,
    rating: 8
}

//2
const { name, price, category} = product

//3
const products = [
    {
        name: "Puma Shoe",
        price: 15000.00,
        category: "Shoes",
        inStock: true,
        rating: 8
    },
        {
        name: "Itel Charger",
        price: 1500.00,
        category: "Phone Acessories",
        inStock: false,
        rating: 6
    },
        {
        name: "Hp Laptop",
        price: 150000.00,
        category: "Compueters",
        inStock: true,
        rating: 8
    },
        {
        name: "Nivea Lotion",
        price: 15000.00,
        category: "Body Cream",
        inStock: false,
        rating: 7
    },
        {
        name: "Timberland",
        price: 19000.00,
        category: "Shoes",
        inStock: true,
        rating: 8
    }
]

//4
const available = products.filter((product) => product.inStock === true)

//5
const filteredProducts = available.map((product) => product.name)

console.log(filteredProducts)
console.log(available)

//6
const getProductFromDb = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fakeDb = [
                {id: 1, name: "Puma shoe", price: 15900},
                {id: 2, name: "Hp Laptop", price: 1900}
            ];

            const product = fakeDb.find((item) => item.id === id)

            if (product) {
                resolve(product)
            } else {
                reject("Product not found")
            }
        }, 2000);
    })

}


const fetchProductById = async (id) => {
    try {
        const product = await getProductFromDb(id)
        console.log("Found product:", product);
    } catch (err) {
        console.error("Error:", err)
    }
}