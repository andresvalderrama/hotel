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
      makingRequest: false
    }

    this.huespedesSeleccionados = this.huespedesSeleccionados.bind(this)
    this.guardarHuesped = this.guardarHuesped.bind(this)
  }

  actualizarFechaRegistro (fechaSalida) {
    this.setState({
      reserva: {
        registro: fechaSalida ? fechaSalida.getTime() : this.state.reserva.registro,
        salida: this.state.reserva.salida,
        habitacion: this.state.reserva.habitacion
      }
    })
  }

  actualizarFechaSalida (fechaSalida) {
    this.setState({
      reserva: {
        registro: this.state.reserva.registro,
        salida: fechaSalida ? fechaSalida.getTime() : this.state.reserva.salida,
        habitacion: this.state.reserva.habitacion
      }
    })
  }

  huespedesSeleccionados (event) {
    let numeroDeHuespedes = Number(event.target.value)
    let huespedesArray = Array(numeroDeHuespedes)

    for (let i = 0; i < huespedesArray.length; i++) {
      huespedesArray[i] = {}
    }

    this.setState({
      reserva: {
        registro: this.state.reserva.registro,
        salida: this.state.reserva.salida,
        habitacion: this.state.reserva.habitacion
      },
      huespedes: huespedesArray.length > 0 ? huespedesArray : this.state.reserva.huespedes,
      makingRequest: true
    })
  }

  habitacionSeleccionada (event) {
    this.setState({
      reserva: {
        registro: this.state.reserva.registro,
        salida: this.state.reserva.salida,
        habitacion: event.target.value ? Number(event.target.value) : this.state.reserva.habitacion
      },
      huespedes: this.state.huespedes
    })
  }

  fakeRequest () {
    setTimeout(() => {
      this.setState({
        habitaciones: [
          {
            id: 1,
            numero: 104,
            tipo: 'standard'
          },
          {
            id: 2,
            numero: 202,
            tipo: 'preferencial'
          },
          {
            id: 3,
            numero: 204,
            tipo: 'preferencial'
          },
          {
            id: 4,
            numero: 304,
            tipo: 'suite'
          },
          {
            id: 5,
            numero: 305,
            tipo: 'suite'
          }
        ],
        makingRequest: false
      })
    }, 200)
  }

  guardarHuesped (huespedes) {
    console.log('guarder huespedes', huespedes)
  }

  componentDidUpdate () {
    console.log('App state', this.state)

    if (!!this.state.reserva.registro && !!this.state.reserva.salida && !!this.state.huespedes && this.state.makingRequest) {
      this.fakeRequest()
    }
  }

  render () {
    return (<div>
      <form action='/reserva/crear' method='post'>
        <h2>Reservas</h2>
        <Disponibilidad
          parentState={this.state}
          actualizarFechaRegistro={this.actualizarFechaRegistro.bind(this)}
          actualizarFechaSalida={this.actualizarFechaSalida.bind(this)}
          huespedesSeleccionados={this.huespedesSeleccionados.bind(this)}
        />
        {this.state.habitaciones
          ? <Habitaciones parentState={this.state} habitacionSeleccionada={this.habitacionSeleccionada.bind(this)} />
          : '' }
        {this.state.habitaciones && this.state.reserva.habitacion
          ? <Huespedes parentState={this.state}
            guardarHuesped={this.guardarHuesped} />
          : ''}
      </form>
    </div>)
  }
}

render(<App />, document.querySelector('#app'))
