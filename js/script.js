document.write('<h1>Elzero</h1>');
document.querySelector('h1').style.color="blue"
console.log('%cElzero %cWeb %cSchool', 'color:red; font-size:40px', 'color:green; font-size:40px; font-weight:bold', 'color:#fff; background-color:blue; font-size:40px');
console.table(['elzero', 'ahmed', 'sameh', 'gamal', 'aya'])



let title, desc, date;
title='elzero';
desc='elzero web school';
date='25/10';

let card=`
    <div>
        <h3>Hello ${title}</h3>
        <p>${desc}</p>
        <span>${date}</span>
    </div>
`;

document.write(card.repeat(4));




let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my[1][5] = my[1][5].toUpperCase();

console.log(my[1]);











function func(...para){
    let str, num, boo;
    for(let i = 0; i<para.length; i++){
        if(typeof para[i]==="string"){
            str=para[i];
        }else if(typeof para[i]==="number"){
            num=para[i];
        }else{
            boo=para[i];
        }
    }
    if(boo===true){
        return `Hello ${str}, Your Age Is ${num}, You Are Avilable For Hire`;
    }else{
        return `Hello ${str}, Your Age Is ${num}, You Are Not Avilable For Hire`;
    }
}

console.log(func('omar', 38, true));
console.log(func(38, 'omar', true));
console.log(func(true, 38, 'omar'));
console.log(func(false, 'omar', 38));















let mix = "A13BS2ZX";

let res = mix.split('').filter((el) => parseInt(el)).map((el) => el ** 2);

console.log(res)













let myString = '1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,z'

let solution = myString.split(',').filter((ele) => isNaN(parseInt(ele))).map((ele) => ele === '_' ? ' ' : ele).map((ele) => ele.length > 1 ? ele[0] : ele).reduce(function(acc, curr, index, arr){
    if(index === arr.length-1){
        curr='';
    }
    return `${acc}${curr}`
})

console.log(solution) //Elzero Web School













/////////////////////////// Object //////////////////////////
let user = {
    //Properties
    theName: 'Omar',
    theAge: 21,
    //Methods
    sayHello: function(){
        return `Hello`
    }
}

console.log(user.theName)
console.log(user.theAge)
console.log(user.sayHello())












for(let i = 0; i < 100; i++){
    let myEle = document.createElement('div');
    let myHead = document.createElement('h1');
    let myP = document.createElement('p');
    let myHeadText = document.createTextNode(`Product ${i+1}`);
    let myPText = document.createTextNode('available')

    myEle.className = 'product';
    myHead.appendChild(myHeadText);
    myEle.appendChild(myHead);
    myP.appendChild(myPText);
    myEle.appendChild(myP);

    document.body.appendChild(myEle)
}




















let myBtn = document.querySelectorAll('input')[2];
let inputs = document.getElementsByClassName('input');

myBtn.onclick = function(e) {
    e.preventDefault()
    
    let content = document.getElementsByClassName('results')[0];
    content.innerHTML = '';

    if(inputs[2].value === 'Div'){
        for(let i = 0; i < inputs[0].value; i++){
            let myDiv = document.createElement('div');
            let myDivText = document.createTextNode(inputs[1].value);

            myDiv.className = 'box';
            myDiv.setAttribute('title', 'Element');
            myDiv.setAttribute('id', `id-${i+1}`);

            myDiv.append(myDivText);
            myDiv.style.cssText = "background-color: orange; width: 28%; padding: 20px; color: #fff; float: left; margin: .5%; text-align: center; font-size: 20px; font-weight: bold"
            content.appendChild(myDiv)
        }
    }else{
        for(let i = 0; i < inputs[0].value; i++){
            let mySection = document.createElement('section');
            let mySectionText = document.createTextNode(inputs[1].value);

            mySection.className = 'box';
            mySection.setAttribute('title', 'Element');
            mySection.setAttribute('id', `id-${i+1}`);

            mySection.append(mySectionText);
            mySection.style.cssText = "background-color: orange; width: 28%; padding: 20px; color: #fff; float: left; margin: .5%; text-align: center; font-size: 20px; font-weight: bold"
            content.appendChild(mySection)
        }
    }
}













let myCount = document.getElementById('counter');

function countDown(){
    myCount.innerHTML -= 1;
    if(myCount.innerHTML === '0'){
        clearInterval(counter)
    }
}

let counter = setInterval(countDown, 1000)















let btn = document.querySelector('button');

window.onscroll = function(){
    if(window.scrollY >= 600){
        btn.style.display = 'block';
    }else{
        btn.style.display = 'none';
    }
}

btn.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}













let myColors = document.querySelectorAll('ul li');
let res = document.querySelector('.res');

if(window.localStorage.getItem("color")){
    res.style.backgroundColor = window.localStorage.getItem("color");

    myColors.forEach((li) => {
        li.classList.remove('active')
    })

    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add('active');
}

myColors.forEach((li) => {
    li.addEventListener('click', (e) => {
        myColors.forEach((li) => {
            li.classList.remove('active');
        })

        e.currentTarget.classList.add('active');

        window.localStorage.setItem("color", e.currentTarget.dataset.color)

        res.style.backgroundColor = window.localStorage.getItem("color")
    })
})




















let myInput = document.getElementById('input-val');
let btnAdd = document.getElementById('add-item');
let resDiv = document.querySelector('.res')

btnAdd.addEventListener('click', function(){
    if(myInput.value.trim() !== ''){
        let resItem = document.createElement('div');
        let resItemP = document.createElement('p');
        let resItemText = document.createTextNode(myInput.value);
        let resItemBtn = document.createElement('button');
        let resItemBtnText = document.createTextNode('Delete')

        resItemP.appendChild(resItemText);
        resItem.appendChild(resItemP)
        resItemBtn.appendChild(resItemBtnText)
        resItemBtn.classList.add('btnDelete');
        resItem.appendChild(resItemBtn)

        resItemBtn.style.cssText = "background-color: rgb(187, 121, 0); color: #fff; padding: 5px 10px; outline: none; border: 1px solid #FFF; cursor: pointer; border-radius: 10px;"
        resItem.style.cssText = "margin: 10px; background-color: #fff; border-radius: 10px; display: flex; justify-content: space-between; padding: 10px";

        resDiv.appendChild(resItem)

        myInput.value = '';
        myInput.focus()

        if(resDiv.innerHTML !== ''){
            let btnsDelete = document.querySelectorAll('.btnDelete');
            
            btnsDelete.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.currentTarget.parentElement.remove()
                })
            });
        }
    }else{
        alert('اكتب حاجة الأول ي حبيبي!')
    }
})















let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /(https?:\/\/)?(www.)?\w+.\w+.+/ig; // Write Your Pattern Here

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));







//////////////////////////////////////////////// OOP ////////////////////////////////////////////////////

// constructor function:-

function User(id, username, salary){
    this.i = id;
    this.u = username; // this here is refering to the object which will be created from this object.
    this.s = salary + 1000;
}

class User {
    constructor(id, username, salary){
        this.i = id;
        this.u = username;
        this.s = salary;
    }
}

let userOne = new User(100, 'Omar', 6000);
let userTwo = new User(101, 'Salem', 7000);
let userThree = new User(102, 'Ahmed', 8000);

console.log(userOne.i);
console.log(userTwo.u);
console.log(userThree.s);

////////////////////////////////////////Deal with properties and methods:-

class User {
    constructor(id, username, salary){
        this.i = id;
        this.u = username || 'unknown';
        this.s = salary < 6000 ? salary+500 : salary;
        this.msg = function(){
            return `Hello ${this.u} your salary is ${this.s}`;
        }
    }
    // Methods
    writeMsg(){
        return `Hello ${this.u} your salary is ${this.s}`;
    }
    // Update value
    updateName(newName){
        this.u = newName;
    }
}

/////////////////////////////// Static properties and methods: can't be acceced witt the created objesct => only for the main class

class User {
    // Static property
    static count = 0;

    constructor(id, username, salary){
        this.i = id;
        this.u = username;
        this.s = salary;
        User.count++
    }

    // Static method => mesure the number of objects which be created from this class.
    static countObjects(){
        return `${this.count} membeers created`
    }
}

let userOne = new User(100, 'Omar', 6000);
let userTwo = new User(101, 'Salem', 7000);
let userThree = new User(102, 'Ahmed', 8000);

console.log(User.countObjects()) //3


//////////////////////////////////////////////////////////////Inhertance :-

class User {
    constructor(id, username){
        this.i = id;
        this.u = username;
    }
    sayHello(){
        return `Hello ${this.u}`;
    }
}

class Admin extends User{
    constructor(id, username, permession){  //=> Here you add the inherted propertires and the new properties for the new class.
        super(id, username); //=> Here you add the inherted properties.
        this.p = permession;
    }
} // Note: the methods were inherted too.

// Another inhertance.
class Superman {
    constructor(id, username, permession, ability){
        super(id, username, permession);
        this.a = ability;
    }
}


//////////////////////////////////////////////////////////////// Encapsulation (Private property):-

class User {
    #e; //=> private property must be decleared at first like this. it is visible onle=y in this scope, that means that it can't be acceced out of this scope even in the object which will be created from this class.
    constructor(id, username, eSalary){
        this.i = id;
        this.u = username;
        this.#e = eSalary;
    }
    getSalary(){
        return parseInt(this.#e);
    }
}

let userOne = new User(1, 'omar', '5000 gneh');
console.log(userOne.getSalary());

// trying of inhertance:
class Admin extends User {
    constructor(id, username, eSalary, permission){
        super(id, username, eSalary);
        this.p = permission;
    }
}

let inhertedUser = new Admin(2, 'ahmed', '400 gneh', 1)
console.log(inhertedUser.getSalary())


////////////////////////////////////////////////////////////Define property:-

const myObj = {
    a: 1,
    b: 2,
    // c: 3  //=> will add it with defineProperty
}

Object.defineProperty(myObj, 'c', {
    writable: false, //=> now you can't overwrite this value/
    enumerable: false, //> make it unvisible in loops for example. you can say you make (continue) in loops.
    configurable: false, //=> you can't edit it like deleete it.
    value: 3,
});

console.log(myObj)







































////////////////////////////////////////////////////////////////////// JSON and AJAX.

let myRequest = new XMLHttpRequest();

myRequest.open('GET', 'https://api.github.com/users/omarsalem222/repos');
myRequest.send()

myRequest.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        let jsData = JSON.parse(this.responseText);
        
        for(let i = 0; i < jsData.length; i++){
            console.log(jsData[i].name)
            let div = document.createElement('div');
            let repoName = document.createTextNode(jsData[i].name);
            div.appendChild(repoName);
            document.body.appendChild(div);
        }
    }
}






////////////////////////////////////////////////////////////////////// Fetch:-

fetch('https://api.github.com/users/omarsalem222/repos').then((result) => {
    // console.log(result);
    let data = result.json();
    // console.log(data);
    return data
}).then((allData) => {
    allData.lenght = 10;
    // console.log(allData)
    return allData;
}).then((finalData) => {
    console.log(finalData[0].name)
})