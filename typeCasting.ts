type Car = {
    name : string,
    speed : number
}

type RaceCar = {
    speed : number,
    color : string,
    name : string,
    speedLimit : number
}

type luxuryCar =  {
    color : string,
    price : number
}

export default function typeCasting() {
    const logCar = (car: Car) => {
        console.log((car as RaceCar))
        console.log(<RaceCar>car);
        return car;
    };
    const race_car : RaceCar = {
        color : "#ffffff",
        speedLimit : 20,
        name : "ferrari",
        speed : 10
    }
    console.log(logCar((race_car)));
}