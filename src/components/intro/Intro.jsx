import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/person.png" alt="man" />
                </div>
            </div>
            
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Daniel Ty</h1>
                    <h3>Junior Dev<span></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="down" />
                </a>
            </div>
        </div>
    )
}
