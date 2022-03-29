type Person = {
    name : string,
    age : number
}
export default function play(){
    function log(person: Person) {
        console.log(person.name,person.age)
    }
    log({name: "nima",age:20})
}