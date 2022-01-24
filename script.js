/* DATATYPER */

let string = "Hello, I'm a string";
let numbers = 1234.892102380
let boolean = true || false;
let nul = null;
let uf = undefined;

let gimme = '༼ つ ◕_◕ ༽つ'
let threat = '( •_•)>⌐■-■'

/* FUNKTIONER */
function name(name) {
    console.log(`Hejsan ${name}, din gamle get!`);
}

function add(num1 = 0, num2 = 0) {
    console.log(`${threat} Give me your ${num1 + num2} chicken nuggies`);
}

// let answer = add(32);
// document.body.innerText = answer

/* DATASTRUKTURER*/
let arr = ['༼ つ ◕_◕ ༽つ', '(☞ﾟヮﾟ)☞', '☜(ﾟヮﾟ☜)', '( •_•)>⌐■-■'];
// arr.splice(index, amount_from_and_including_index, potential_replacement)

//Filter = samma som .each funktion i Ruby
let num = [1,32,4,56,67,7,678,879,2,345,45,43];
let b = num.filter(num => num > 20);

//Sorterar alpha (index för index, 36 kommer före 7)
let c = b.sort((a,b) => a - b);

let dicegame = {
    sides: 6,
    numOfThrows: 1000,
    totalValue: 0,
    stats: [0,0,0,0,0,0,0,0,0,0,0],
    throw() {
        return Math.ceil(Math.random()*this.sides)
    },
    init() {
        for(i = 0; i<this.numOfThrows; i++) {
            let value1 = this.throw();
            let value2 = this.throw();

            let total = (value1 + value2);
            this.stats[total-2]++;

            this.totalValue += total;
        }

        console.log(this.stats);

    }
};

// for loop
for(let i = 0; i < num.length; i++) {

    if(num[i] >= 20 && num[i] <= 100) {
        // document.write(`<p>Varv ${i}, värde: ${num[i]}</p>`);
    } else {
        // document.write(`<p>Varv ${i}, värde: ${num[i]} är INTE mellan 20 - 100</p>`);
    }
}

document.querySelector('h1').innerText = "Hello Johan!"
document.querySelector('h2').style.backgroundColor = "red"
document.querySelector('h2').remove();

let list = document.querySelectorAll('li');
list.forEach(el => {
    el.addEventListener('click', () => {
        console.log(`Du klickade på: ${el.innerText}`);
        el.classList.toggle("clicked")
    })
})

let template = `<p>Hejsan hoppsan! Jag är en template string</p>`

document.querySelector('body').insertAdjacentHTML('beforeend', template)

document.querySelector('body').innerHTML = "";