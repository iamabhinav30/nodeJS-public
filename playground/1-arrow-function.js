const event = {
    name: 'Birthday Party',
    guestList : ['Abhinav', 'Kanchan','Manu', 'Lavi', 'Niket', 'GUllo'],
    printGuestList()  {
        console.log('Guest list for ' + this.name)
        fname = 'test'
        this.guestList.forEach((guest)=>{
            console.log(guest + '  is attending ' + this.name   )
        })
    }
}

event.printGuestList()


// const square = function (x) {
//     return x*x
// }

// const square = (x) => {
// return x*x
// }

// const square = (x) => x*x

// console.log(square(3))