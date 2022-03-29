<<<<<<< HEAD
import {type} from "os";

=======
>>>>>>> AI
type Person = {
    name : string,
    age : number
}
<<<<<<< HEAD
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
=======
>>>>>>> AI
export default function play(){
    function log(person: Person) {
        console.log(person.name,person.age)
    }
<<<<<<< HEAD
    // log({name: "nima",age:20});
    const logCar = (car: Car) => car;
    const race_car : RaceCar = {
        color : "#ffffff",
        speedLimit : 20,
        name : "ferrari",
        speed : 10
    }
    console.log(logCar(race_car).speed);
=======
    log({name: "nima",age:20})
>>>>>>> AI
}