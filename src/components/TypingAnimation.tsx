"use client"


import {TypeAnimation} from "react-type-animation";

const TypingAnimation = () => {
    return (
        <div>
            <TypeAnimation
                sequence={[
                    "Software Developer",
                    1000,
                    "UI/UX Designer",
                    1000,
                    "Rock Climber",
                    1000,
                ]}
                speed={50}
                repeat={Infinity}
                style={{ fontSize: '2em' }}
            />
        </div>
    );
};

export default TypingAnimation;
