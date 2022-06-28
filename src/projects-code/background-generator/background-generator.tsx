import React, { useState } from "react";

import { BGContainer, Colors, Input, H1, H2, H3, Button } from './background-generator.style';

const BG = () => {
    const [value1, setValue1] = useState('#f1d7a3');
    const [value2, setValue2] = useState('#0ff922');

    const random = () => {
        var x=Math.round(0xffffff * Math.random()).toString(16);
        var y=(6-x.length);
        var z="000000";
        var z1 = z.substring(0,y);
        setValue1("#" + z1 + x);

        var q=Math.round(0xffffff * Math.random()).toString(16);
        var w=(6-q.length);
        var e="000000";
        var e1 = e.substring(0,w);
        setValue2("#" + e1 + q);
    }

    const background = "linear-gradient(to right, " + value1 + ", " + value2 + ")";	
    
    return(
        <BGContainer property={background}>
            <H1>BACKGROUND GENERATOR</H1>
            <Colors>
                <Input type="color" onChange={(e) => setValue1(e.target.value)} value={value1}/>
                <Input type="color" onChange={(e) => setValue2(e.target.value)} value={value2}/>
            </Colors>
            <H2>CURRENT CSS BACKGROUND</H2>
            <H3>{background}</H3>
            <Button property={background} onClick={random}>Random Generator</Button>
        </BGContainer>
    )
}

export default BG;