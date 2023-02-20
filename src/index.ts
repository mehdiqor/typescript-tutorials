let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;
let level;

/*====================================*/

function render(document: any){
    console.log(document);
    
}

/*====================================*/

// let numbers: number[] = [1, 2, 3];
let numbers: number[] = [];
numbers[0] = 1;
// numbers[1] = '1'
numbers.forEach(n => n.toString)

let user: [number, string] = [1, 'mehdi'];

/*====================================*/

// const small = 1;
// const medium = 2;
// const large = 3;

//PascalCase
enum Size {Small = 1, Medium, Large}
let mySize: Size = Size.Medium;
console.log(mySize);

/*====================================*/

function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10_000);

/*====================================*/

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: 'Mehdi',
    retire: (date: Date) => {
        console.log(date);
    }
};
// employee.id = 0;

/*====================================*/

function kgToLbs(weight: number | string): number {
    //Narrowing
    if(typeof weight === 'number')
        return weight * 2.2;
    else 
        return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');

/*====================================*/

type Draggable = {
    drag: () => void
};
type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

/*====================================*/

// Literal (exact, specific)
// let quantity: 50 | 100 = 50; this is hard code!!
// let quantity: 50 | 100 = 100; this is hard code!!
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

/*====================================*/

function greet(name: string | null | undefined) {
    if(name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}
greet(null);
greet(undefined);

/*====================================*/

type Customer = {
    birthday?: Date
};

function getCustomr(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()};
}
let customer = getCustomr(1);
// if(customer !== null && customer !== undefined)
// we remove if() and use this method that called "Optional property access operator" (?.)
    console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customer?.[0]