import type {NextPage} from 'next'
import play from "../test";
import {useEffect} from "react";

const Home: NextPage = () => {
    useEffect(() => {
        play();
    }, []);

    return (
        <div>
            hello
        </div>
    )
}

export default Home
