import './main.scss'

import React from 'react'
import { render } from 'react-dom'
// import axios from 'axios'

import Disponibilidad from './components/Disponibilidad.jsx'
import Habitaciones from './components/Habitaciones.jsx'
import Huespedes from './components/Huespedes.jsx'

class App extends React.Component {
  constructor (props) {
    super()

    this.state = {
      reserva: {},
    }

    this.huespedesSeleccionados = this.huespedesSeleccionados.bind(this)
  }

  actualizarFechaRegistro (fechaSalida) {
    this.setState({
      reserva: {
        registro: fechaSalida ? fechaSalida.getTime() : this.state.reserva.registro,
        salida: this.state.reserva.salida,
        huespedes: this.state.reserva.huespedes,
        habitacion: this.state.reserva.habitacion
      }
    })
  }

  actualizarFechaSalida (fechaSalida) {
    this.setState({
      reserva: {
        registro: this.state.reserva.registro,
        salida: fechaSalida ? fechaSalida.getTime() : this.state.reserva.salida,
        huespedes: this.state.reserva.huespedes,
        habitacion: this.state.reserva.habitacion
      }
    })
  }

  huespedesSeleccionados (event) {
    this.setState({
      reserva: {
        registro: this.state.reserva.registro,
        salida: this.state.reserva.salida,
        huespedes: event.target.value ? event.target.value : this.state.reserva.huespedes,
        habitacion: this.state.reserva.habitacion
      }
    })

    this.fakeRequest()
  }

  habitacionSeleccionada (event) {
    this.setState({
      reserva: {
        registro: this.state.reserva.registro,
        salida: this.state.reserva.salida,
        huespedes: this.state.reserva.huespedes,
        habitacion: event.target.value ? event.target.value : this.state.reserva.habitacion
      }
    })
  }

  fakeRequest () {
    setTimeout(() => {
      this.setState({
        habitaciones: [
          {
            id: 1,
            numero: 104
          },
          {
            id: 2,
            numero: 202
          },
          {
            id: 3,
            numero: 204
          },
          {
            id: 4,
            numero: 304
          },
          {
            id: 5,
            numero: 305
          }
        ]
      })
    }, 1500)
  }

  componentDidUpdate () {
    console.log('App state', this.state)
  }

  render () {
    return (<div>
      <form action='/reserva/crear' method='post'>
        <h2>Reservas</h2>
        <Disponibilidad
          reservaState={this.state.reserva}
          makingRequest={this.state.makingRequest}
          actualizarFechaRegistro={this.actualizarFechaRegistro.bind(this)}
          actualizarFechaSalida={this.actualizarFechaSalida.bind(this)}
          huespedesSeleccionados={this.huespedesSeleccionados.bind(this)}
        />
        {this.state.habitaciones
          ? <Habitaciones habitacionesState={this.state.habitaciones} habitacionSeleccionada={this.habitacionSeleccionada.bind(this)} />
          : '' }
        {this.state.habitaciones && this.state.reserva.habitacion
          ? <Huespedes />
          : ''}
      </form>
    </div>)
  }
}

render(<App />, document.querySelector('#app'))
