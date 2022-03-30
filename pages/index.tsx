import type {NextPage} from 'next'
import play from "../test";
import {useEffect} from "react";
import typeCasting from "../typeCasting";

const Home: NextPage = () => {
    useEffect(() => {
        play();
        typeCasting();
    }, []);

    return (
        <div>
            hello
        </div>
    )
}

export default Home
