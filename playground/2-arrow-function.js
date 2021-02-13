// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   return x * x;
// };

// const square = (x) => x * x;

// console.log(square(20));

const event = {
  name: 'Graduation',
  guestList: ['Sarah', 'Josh', 'Mike'],
  printGuestList() {
    console.log('Seating arrangement for ' + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name);
    });
  },
};

event.printGuestList();
