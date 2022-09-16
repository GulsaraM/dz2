import React from 'react';
import About from "../../components/about/About";

function AboutUs(props) {
    const text = {
        title: "hello",
        subtitle: "lorem lorem lorem"
    }

    return (
        <>
            <About textOne={text}/>
        </>
    );
}

export default AboutUs;