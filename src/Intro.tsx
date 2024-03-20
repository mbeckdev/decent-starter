import React from 'react';

interface IntroProps {
    name: string;
}

const Intro: React.FC<IntroProps> = ({ name }) => {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>Welcome to my website.</p>
        </div>
    );
};

export default Intro;