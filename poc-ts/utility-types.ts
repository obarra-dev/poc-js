interface User {
    createAt: Date,
    name: string,
    lastname?: string,
}

function createUser(user: User): void {
    console.log(user)
}

createUser({name: 'user with lastname', createAt: new Date(), lastname: 'lastname'})
createUser({name: 'user without lastname', createAt: new Date()})



type RequiredUser = Required<User>
function createFullUser(user: RequiredUser): void {
    console.log(user)
}

createFullUser({name: 'user with lastname', createAt: new Date(), lastname: 'lastname'})
// createFullUser({name: 'user without lastname', createAt: new Date()}) // does not compile because it is required

type PartialUser = Partial<User>

function find(user: PartialUser): User {
    return {name: 'user without lastname', createAt: new Date()}
}
console.log(find({name:''}))

type OmitUser = Omit<User, 'createAt'>
function findAllWithOutCreateAt(): OmitUser {
    return {name: 'user without lastname'}
}
console.log(findAllWithOutCreateAt())


type ReadonlyUser = Readonly<Omit<User, 'createAt'>>
function findAllReadonly(): ReadonlyUser {
    return {name: 'user without lastname'}
}

const us = findAllReadonly()
// us.name = 'new name'// does not compile
console.log(us)


type PickUser = Pick<User, 'name'>
function findAllWithName(): PickUser {
    return {name: 'user without lastname'}
}
console.log(findAllWithName())

// no es fasil de leer
function groupByName() : {[prop: string]: User[]} {
    return {
        omar: [{name: 'omar', createAt: new Date(), lastname: 'user1'}],
        barra: [{name: 'barra', createAt: new Date(), lastname: 'user2'}],
        alberto: [{name: 'alberto', createAt: new Date(), lastname: 'user3'}],
      };
}

type UserGroup = Record<string, User[]>
function groupByNameUsingRecord() : UserGroup {
    return {
        omar: [{name: 'omar', createAt: new Date(), lastname: 'user1'}],
        barra: [{name: 'barra', createAt: new Date(), lastname: 'user2'}],
        alberto: [{name: 'alberto', createAt: new Date(), lastname: 'user3'}],
      };
}

console.log(groupByNameUsingRecord())