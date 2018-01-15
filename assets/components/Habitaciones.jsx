import React from 'react'

export default class Habitaciones extends React.Component {
  constructor (props) {
    super()
  }

  filtrarHabitaciones () {
    this.habitacionesFiltradas = this.props.parentState.habitaciones.filter(habitacion => {
      if (this.props.parentState.huespedes.length > 2) {
        return habitacion.numero_habitacion > 200
      } else {
        return true
      }
    })
  }

  componentWillMount () {
    this.filtrarHabitaciones()
  }

  componentDidUpdate () {
    this.filtrarHabitaciones()
  }

  render () {
    return (<div>
      <section className='habitaciones flex'>
        <b className='one legend'>Habitaciones disponibles</b>
        {this.habitacionesFiltradas.map((habitacion) => {
          return (<fieldset key={habitacion.id} className={habitacion.tipo}>
            <input type='radio' name='habitacion' value={habitacion.id} id={`habitacion-${habitacion.numero_habitacion}`} data-tipo={habitacion.tipo} required
              onChange={this.props.habitacionSeleccionada} />
            <label htmlFor={`habitacion-${habitacion.numero_habitacion}`}>habitacion {habitacion.numero_habitacion} <span>{habitacion.tipo}</span></label>
          </fieldset>)
        })}
      </section>
    </div>)
  }
}
