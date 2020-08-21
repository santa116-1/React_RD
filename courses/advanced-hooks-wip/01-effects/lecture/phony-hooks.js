import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'

export default function App() {
  const [active, setActive] = useState(false)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    if (active) {
      const id = setInterval(() => {
        setSeconds(seconds => {
          return seconds + 1
        })
      }, 1000)
      return () => clearInterval(id)
    }
  }, [active])

  return (
    <div className="align-center spacing phony-hooks">
      <div className="horizontal-spacing">
        <button className="button" onClick={() => setActive(true)}>
          Start
        </button>
        <button className="button" onClick={() => setActive(false)}>
          Stop
        </button>
      </div>
      <hr />
      <div>Seconds: {seconds}</div>
    </div>
  )
}

function reRender() {
  ReactDOM.render(<App />, document.getElementById('root'))
}
reRender()
