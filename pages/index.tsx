import type {NextPage} from 'next'
import {useEffect} from "react";
import play from "../Generic";

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
