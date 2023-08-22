
// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email. 
// В prototype функції-конструктора добав метод getInfo(), 
// який виводить в консоль значення полів login і email об'єкта який його викликав.

// console.log(Account.prototype.getInfo); 
//function
// const mango = new Account({
// login: 'Mangozedog',
// email: 'mango@dog.woof',
// });
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
// const poly = new Account({
// login: 'Poly',
// email: 'poly@mail.com',
// });
// poly.getInfo(); // Login: Poly, Email: poly@mail.com


const Account = {
    login: '',
    email: '',
    getInfo() {
        return `${this.login} ${this.email}`
    },
};

const user = Object.create(Account);
user.email = 'useruserevich8542gmail.com';
user.login = 'user userevich';
console.log(user.getInfo());
