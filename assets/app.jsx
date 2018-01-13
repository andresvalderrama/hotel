import './main.scss'

import React from 'react'
import { render } from 'react-dom'

import Disponibilidad from './components/Disponibilidad.jsx'

class App extends React.Component {
  constructor (props) {
    super()
  }

  render () {
    return (<div>
      <Disponibilidad />
    </div>)
  }
}

render(<App />, document.querySelector('#app'))
