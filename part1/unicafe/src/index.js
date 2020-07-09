import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = (props) => {
	return (
		<tr>
			<td>{props.text}</td> 
			<td>{props.value}</td>
		</tr>
	)
}

const Statistics = (props) => {
	if (props.all === 0) {
	    return (
	      <div>
	        No feedback given yet
	      </div>
	    )
	  }
	  
	return (
		<table>
			<tbody>
				<Statistic text='good' value={props.good} />
				<Statistic text='neutral' value={props.neutral} />
				<Statistic text='bad' value={props.bad} />
				<Statistic text='all' value={props.all} />
				<Statistic text='average' value={props.average} />
				<Statistic text='positive' value={props.positive}/>
			</tbody>
		</table>
	)
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // save values for statistics
  const all = good+bad+neutral
  const average = (good - bad)/all
  const positive = (good/all * 100).toFixed(2) + '%'

  const handleGoodClick = () => {
	setGood(good + 1)
	}

  const handleNeutralClick = () => {
	setNeutral(neutral + 1)
	}
  
  const handleBadClick = () => {
	setBad(bad + 1)
	}



  return (
    <div>
      <h1> give feedback </h1>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral ' />
      <Button onClick={handleBadClick} text='bad' />
      <h1> statistics </h1>
      <Statistics good={good} neutral={neutral} bad={bad} 
       all={all} average={average} positive = {positive}/>    
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)