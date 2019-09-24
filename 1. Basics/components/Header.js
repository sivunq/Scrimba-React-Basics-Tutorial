import React from "react"

function Header() {
	
	const website= "Apna"
	
	const styles = {
		color: "#FF8C00", 
		backgroundColor: "#FF2D00"
	}
	
    return (
        <header className="navbar"  style={styles}>This is the header for website {website}</header>
    )
}

export default Header