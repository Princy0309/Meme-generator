import { useEffect, useState } from 'react'


export default function Main() {

    const[meme, setMeme] = useState({
        topText :"Shut up",
        bottomText: "And take my money",
        MainImageURL: "/Group-1.png",
        ImageLogoURL: "/gallery.png"
    })


    function handleClick(event){
    const {value, name} = event.currentTarget

    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    
    }));
    
    };

    const[allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => setAllMemes(data.data.memes));
    }, []);

    function getMemeImage() {

        const randomNumber = Math.floor(Math.random()*allMemes.length)
        const newMemeUrl = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            MainImageURL: newMemeUrl
        }))
    }

    return (
        <main className="main">
            <section className="section">
                <div className="div-1">
                    <label className="top-text">Top text
                        <input className="input"
                         type="text"
                         placeholder="Shut up"
                         name='topText'
                         onChange={handleClick}
                        value={meme.topText}
                         
                        />
                    </label>
                </div>
                <div className="div-2">
                    <label className="bottom-text">Bottom text
                        <input className="input"
                         type="text"
                         placeholder="And take my money"
                         name='bottomText'
                         onChange={handleClick}
                         value={meme.bottomText}
                        />
                    </label>
                </div>

            </section>
            <div className="new-meme-img">
                <button onClick={getMemeImage} className="new-meme-img-text">Get a new meme image</button>
                <img className="gallery-icon" src={meme.ImageLogoURL} />
            </div>
            <div className='meme'>
                <img className="meme-main-img" src={meme.MainImageURL}/>
                <span className="top">{meme.topText}</span>
                <span className='bottom'>{meme.bottomText}</span>
            </div>

        </main>
    )
}