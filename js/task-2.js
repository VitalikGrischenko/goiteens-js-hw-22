
// Напиши клас User для створення користувача з наступними властивостями:

//      name — рядок

//      age — число

//      followers — число

// Добав метод getInfo(), який, виводить рядок: User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers

// const mango = new User({
// name: 'Mango',
// age: 2,
// followers: 20,
// });
// mango.getInfo(); // User Mango is 2 years old and has 20 followers
// const poly = new User({
// name: 'Poly',
// age: 3,
// followers: 17,
// });
// poly.getInfo(); // User Poly is 3 years old and has 17 followers


  class aboutVasa {
    constructor({vasaname, vasaage, vasafollowers}) {
      this.vasaname + vasaname;
      this.vasaage = vasaage;
      this.vasafollowers = vasafollowers;
    }
    getInfo() {
      return `User ${this.vasaname} is ${this.vasaage} years old and has ${this.vasafollowers} followers`;
    }
  }
  
  const vasaInformation = new aboutVasa({
    vasaname: 'vasapro228',
    vasaage: '34',
    vasafollowers: '3284',
  })
  console.log(vasaInformation.getInfo());