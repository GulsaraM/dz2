import React from 'react';

function About(props) {
    return (
        <ul>
            <li>title: {props.textOne.title}</li>
            <li>subtitle: {props.textOne.subtitle}</li>
        </ul>
    );
}

export default About;