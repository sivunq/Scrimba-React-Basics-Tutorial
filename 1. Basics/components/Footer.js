import React from "react"

function Footer() {
	
	const author= "Navdeep"
	
    return (
        <footer style={{color: "#FF8C00", backgroundColor: "#FF2D00"}}>This is the footer created by {'${author}'}</footer>
    )
}

export default Footer