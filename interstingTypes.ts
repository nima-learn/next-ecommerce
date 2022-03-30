import {string} from "prop-types";

export default function play() {
    // const printInfo = (someObject: {[key: string]: string | boolean}) => {
    //     console.log(someObject);
    // }
    const printInfo = (someObject: any) => someObject;
    console.log(printInfo(true));
    // printInfo({age: "20",married: true})
}