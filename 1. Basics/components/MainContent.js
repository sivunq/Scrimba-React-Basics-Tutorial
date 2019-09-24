import React from "react"

function MainContent() {
	
	const date = new Date()
	const hours = date.getHours()
	let timeOfDay
	
	const styles = {
		fontSize: 30
	}
  
	if (hours < 12) {
		timeOfDay = "morning"
		styles.color = "#04756F"
	} else if (hours >= 12 && hours < 17) {
		timeOfDay = "afternoon"
		styles.color = "#2E0927"
	} else {
		timeOfDay = "night"
		styles.color = "#D90000"
	}
	
    return (
		<div>
			<main>This is the main </main>
			<h4>It is currently about {date.getHours() % 12} o'clock!</h4>
			<h4 style={styles}>Good {timeOfDay}!</h4>
		</div>
    )
}

export default MainContent