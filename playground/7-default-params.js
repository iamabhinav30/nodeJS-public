const greeter = (name= 'User', age) => {
    console.log('Hello ', name)
}

greeter('Abhinav Singh')
// If we dont provide any parameter to the function, it will give undefined since undefined is the default
greeter()