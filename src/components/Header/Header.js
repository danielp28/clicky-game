import React from "react";



const styles = {
    head: {
        background: "great",
        width: "100%",
        height: "20%"
    },
    headtext: {
        justifyContent: "center",
        alignItems: "center"
    }
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Header() {
    return (
        <div style={styles.head}>
            <h1 style={styles.headtext}>this is the clicky game</h1>
        </div>
    );
}

export default Header;