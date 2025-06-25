// Object property shorthand

const name = 'Abhinav'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'India'
}

console.log(user)

// Object destructuring
const product = {
    label : 'Rednoteboook',
    price :3,
    stock:24,
    salePrice: undefined,
    // rating: 4.3
}

const {label: productLabel, stock, rating=5} = product
console.log(productLabel, rating )

const transaction = (type, {label, stock, art=3} = {}) => {
    console.log(type, label, stock, art)
}

transaction('order', product)