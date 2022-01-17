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
    return `${threat} Give me your ${num1 + num2} chicken nuggies`;
}

let answer = add(32);
document.body.innerText = answer

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

dicegame.init();