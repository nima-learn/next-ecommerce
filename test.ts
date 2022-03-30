import {type} from "os";

type Person = {
    name : string,
    age : number
}
interface Car{
    name : string,
    speed : number
}

interface RaceCar extends Car  {
    color : string,
    speedLimit : number
}

interface luxuryCar {
    color : string,
    price : number
}
export default function play(){
    function log(person: Person) {
        console.log(person.name,person.age)
    }
    // log({name: "nima",age:20});
    const logCar = (car: Car) => car;
    const race_car : RaceCar = {
        color : "#ffffff",
        speedLimit : 20,
        name : "ferrari",
        speed : 10
    }
    console.log(logCar(race_car).speed);
}