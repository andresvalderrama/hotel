import React from 'react'
import stickybits from 'stickybits'

export default class PrecioReserva extends React.Component {
  constructor (props) {
    super()

    this.state = {
      suite: [50000, 75000, 100000, 125000],
      preferencial: [40000, 60000, 80000, 100000],
      standard: [30000, 50000]
    }
  }

  obtenerPrecioReserva () {
    let tipoHabitacion = this.props.parentState.reserva.tipo_habitacion
    let cantHuespedes = this.props.parentState.huespedes.length

    let total = () => {
      if (this.state[tipoHabitacion].length >= cantHuespedes) {
        return this.state[tipoHabitacion][cantHuespedes - 1] * cantHuespedes
      } else {
        return 'seleccione una habitacion'
      }
    }

    return total()
  }

  componentDidMount () {
    stickybits('.precio-reserva', {stickyBitStickyOffset: 40})
    console.log('PrecioReserva componentDidMount', this.state)
  }

  render () {
    return (
      <section className='precio-reserva'>
        Precio: <b>{this.obtenerPrecioReserva()}</b>
      </section>
    )
  }
}
