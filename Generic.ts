import {string} from "prop-types";
interface Person{
    name: string;
}
class Student implements Person{
    name = ""
}
interface car {
    speed : number;
}
class Logger <T extends Person>{
    log(items: Array<T> , callback : (item: T) => T){
        return items.map(item => callback(item));
    }
}

export default function play(){
    const log = new Logger<Student>();
    console.log(log.log([{name : ""}],(e) => e))
}



// interface Person{
//     name: string;
// }
// class Student implements Person{
//     name = ""
// }
// interface car {
//     speed : number;
// }
// class Logger <T>{
//     log(items: Array<T> , callback : (item: T) => T){
//         return items.map(item => callback(item));
//     }
// }
//
// export default function play(){
//     const log = new Logger<string>();
//     console.log(log.log(["s","nima"],(e) => e+9999999))
// }


// class Logger {
//     log(items: Array<string> , callback : any){
//         // debugger
//         items.map(item => callback(item));
//     }
// }
//
//
// export default function play() {
//     const logger = new Logger();
//     // debugger
//     logger.log(["s","a"],(item : any) => {
//         // debugger
//         console.log(item+555555);
//     })
//     // const iterate = (items : Array<string>) => items;
//     // console.log(iterate(["sss"]));
//
// }