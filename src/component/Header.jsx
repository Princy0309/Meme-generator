import trollFace from "/troll-face.png"

export default function Header() {
    return(
        <header className="header">
            <img className="troll-face-img" src={trollFace}/>
            <h1 className="meme-generator">Meme Generator</h1>
        </header>
    )
}