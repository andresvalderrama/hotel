import React from 'react'
import Pikaday from 'pikaday'

export default class Disponibildad extends React.Component {
  constructor (props) {
    super()
  }

  fechaRegistroSeleccionada (fechaRegistro) {
    this.props.actualizarFechaRegistro(fechaRegistro)

    /* actualizamos rangos max y min de fechas */
    this.registro.setStartRange(fechaRegistro)
    this.salida.setStartRange(fechaRegistro)
    this.salida.setMinDate(fechaRegistro)
    // this.salida.setMinDate(addDays(this.startDate2, 1))

    if (this.props.parentState.reserva.registro && !this.props.parentState.reserva.salida) return this.salida.show()
  }

  fechaSalidaSeleccionada (fechaSalida) {
    this.props.actualizarFechaSalida(fechaSalida)

    /* actualizamos rangos max y min de fechas */
    this.registro.setEndRange(fechaSalida)
    this.registro.setMaxDate(fechaSalida)
    this.salida.setEndRange(fechaSalida)

    if (this.props.parentState.reserva.salida && !this.props.parentState.reserva.registro) return this.registro.show()
  }

  componentDidMount () {
    this.registro = new Pikaday({
      field: document.querySelector('#registro'),
      minDate: new Date(),
      maxDate: new Date(2018, 6, 30),
      // onSelect: this.fechaRegistroSeleccionada.bind(this)
      onSelect: this.fechaRegistroSeleccionada.bind(this)
    })

    this.salida = new Pikaday({
      field: document.querySelector('#salida'),
      minDate: new Date(),
      maxDate: new Date(2018, 6, 30),
      onSelect: this.fechaSalidaSeleccionada.bind(this)
      // onSelect: this.fechaSalidaSeleccionada.bind(this)
    })

    this.reserva = this.props.parentState.reserva
  }

  componentDidUpdate () {
    console.log('Disponibilidad component', this.props.parentState.habitaciones)
  }

  render () {
    return (<div>
      <section className='disponibilidad  flex'>
        <b className='one legend'>Verificar disponibilidad</b>
        <fieldset className='one-half'>
          <input id='registro' type='text' name='registro' required autoComplete='false' disabled={this.props.parentState.habitaciones} />
          <label htmlFor='registro'>registro</label>
        </fieldset>
        <fieldset className='one-half'>
          <input id='salida' type='text' name='salida' required autoComplete='false' disabled={this.props.parentState.habitaciones}/>
          <label htmlFor='salida'>salida</label>
        </fieldset>
        <fieldset className='one'>
          <select id='huespedes' name='huespedes' required onChange={this.props.huespedesSeleccionados}>
            <option disabled value='' selected />
            <option value='1'>1 huesped</option>
            <option value='2'>2 huespedes</option>
            <option value='3'>3 huespedes</option>
            <option value='4'>4 huespedes</option>
          </select>
          <label htmlFor='huespedes'># huespedes</label>
        </fieldset>
      </section>
    </div>)
  }
}
