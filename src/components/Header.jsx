import "./Header.css"
export default function Header(){
    return(
        <header>
            <img className="headerImg" src={require("../images/logo/vec 1.png")} alt="airtracker_logo"/>
            <button className="about"><a href="https://github.com/">About</a></button>
        </header>
    )
}