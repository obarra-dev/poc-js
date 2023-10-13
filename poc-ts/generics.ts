interface Person {
    id: number,
    name: string,
}

interface Employee extends Person  {
    role: string,
}

interface Product {
    id: number,
    name: string,
    price: number,
}

interface Data<T> {
    addItem(newItem: T): void;
}

class DataCollection<T extends Person> {
    private items: T[] = []

    addItem(newItem: T): void {
        this.items.push(newItem);
    }

    getItems(): string {
        return JSON.stringify(this.items)
    }

    getNames(): string[] {
        return this.items.map((item) => item.name)
    }

    getItemById(id: number): T | undefined {
        return this.items.find(item => item.id === id)
    }
}

const dataCollectionEmploye = new DataCollection<Employee>()
let employee: Employee = {id: 2, name: 'employee', role: 'admin'}
dataCollectionEmploye.addItem(employee)
employee = {id: 3, name: 'emplyee ownder', role: 'ownder'}
dataCollectionEmploye.addItem(employee)

console.log(dataCollectionEmploye.getItems())
console.log(dataCollectionEmploye.getNames())
console.log(dataCollectionEmploye.getItemById(3))


const dataCollectionPerson = new DataCollection<Person>()
let person: Person = {id: 2, name: 'person'}
dataCollectionPerson.addItem(person)
person = {id: 3, name: 'person admin'}
dataCollectionPerson.addItem(person)

console.log(dataCollectionPerson.getItems())
console.log(dataCollectionPerson.getNames())
console.log(dataCollectionPerson.getItemById(3))


// I can use product even if it is not a person becouse the product hast id and name, and the generic function does not use price
const dataCollectionProduct = new DataCollection<Product>()
let product: Product = {id: 2, name: 'producone', price: 8}
dataCollectionProduct.addItem(product)
product = {id: 3, name: 'Product two', price: 9}
dataCollectionProduct.addItem(product)

console.log(dataCollectionProduct.getItems())
console.log(dataCollectionProduct.getNames())
console.log(dataCollectionProduct.getItemById(3))