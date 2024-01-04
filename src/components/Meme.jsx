import memesData from "./memesData";
import React from "react";

function Meme() {
    const [memeImage,setMemeImage] = React.useState("");
    let memeUrl;
    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        memeUrl = memesArray[randomIndex].url;

        setMemeImage(memeUrl);
    }

    return(
        <main>
        <div className="generator-container">
            <div className="form-container">
                <div className="input-data">
                    <label>Top text</label>
                    <input type={"text"} className="input-box" placeholder="Shut up"></input>
                </div>
                <div className="input-data">
                    <label>Bottom text</label>
                    <input className="input-box" placeholder="And take my money"></input>
                </div>
            </div>
            <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            <img src={memeImage} alt="generated meme" className="meme-img"/>
        </div>
        </main>
    );
}

export default Meme;