import React, { useState } from "react";
import "./assets/style/App.css";

function App() {
    const [ color, setColor ] = useState('#000000');
    let colorCode = color.replace('#', "");
    let url = `https://coolors.co/${colorCode}`;


    const randomColorGenerator = () => {
        //This will generate a random number within the bounds and convert it to hexadecimal. 
        //It is then padded with zeros so that it's always a valid six-digit hex code.
        let color = (Math.random()* 0xFFFFFF << 0).toString(16).padStart(6, '0');
        let result = '#'+color;
        setColor(result);
        console.log(`generated random color: ${result}`)
    }

    const hexToRGB = (colorToConvert) => {
        let aRGBHex = colorToConvert.match(/.{1,2}/g);
        let aRGB = [
            parseInt(aRGBHex[0], 16),
            parseInt(aRGBHex[1], 16),
            parseInt(aRGBHex[2], 16)
        ]

        return (
            <React.Fragment>RGB: { aRGB[0] }, { aRGB[1] }, { aRGB[2] }</React.Fragment>
        )
    }

    return (
        <main className="random-color-container">
            <div className="random-color__color-area" style={ {backgroundColor: color} }></div>
            <section className="random-color__info-area">
                <input className="random-color__btn" type="button" value="Generate!" name="Generate Random Color" onClick={() => randomColorGenerator()}></input>
                <div className="random-color__hex-code">HEX: { color }</div>
                <div className="random-color__rgb-code"> { hexToRGB(colorCode) } </div>
                <a className="random-color__info-link" href={ url } hrefLang="en" target="_blank" rel="noreferrer"> Check the color specifications on coolors.co </a>
            </section>
        </main>  
        
    )
}

export default App;