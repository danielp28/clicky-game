import React from "react";
import "./style.css";


const styles = {
    navbarStyle: {
        background: "green",
        justifyContent: "flex-end",
        width: "100%"
    }
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Navbar() {
    return (
        <nav style={styles.navbarStyle} className="navbar">
            <div className="col-md-4">
                <a href="/">Clicky Game</a>
            </div>
            <div className="col-md-4">
                <p>Click on an image to play</p>
            </div>
            <div className="col-md-4">
                <p>score: {currentScore} </p>
            </div>
        </nav>
    );
}

export default Navbar;