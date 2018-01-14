import React from 'react'
import Pikaday from 'pikaday'

export default class Disponibildad extends React.Component {
  constructor (props) {
    super()
  }

  enableSubmitButton () {
    let reserva = this.props.reservaState

    if (!!reserva.registro && !!reserva.salida && !!reserva.huespedes) {
      this.domSubmitButton.disabled = false
    }
  }

  fechaRegistroSeleccionada (fechaRegistro) {
    this.props.actualizarFechaRegistro(fechaRegistro)

    /* actualizamos rangos max y min de fechas */
    this.registro.setStartRange(fechaRegistro)
    this.salida.setStartRange(fechaRegistro)
    this.salida.setMinDate(fechaRegistro)
    //this.salida.setMinDate(addDays(this.startDate2, 1))

    if (this.reserva.registro && !this.reserva.salida) return this.salida.show()
  }

  fechaSalidaSeleccionada (fechaSalida) {
    this.props.actualizarFechaSalida(fechaSalida)

    /* actualizamos rangos max y min de fechas */
    this.registro.setEndRange(fechaSalida)
    this.registro.setMaxDate(fechaSalida)
    this.salida.setEndRange(fechaSalida)

    if (this.reserva.salida && !this.reserva.registro) return this.registro.show()
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

    this.reserva = this.props.reservaState
  }

  componentDidUpdate () {
    this.enableSubmitButton()
  }

  render () {
    return (<div>
      <section className='disponibilidad  flex'>
        <b className='one legend'>Verificar disponibilidad</b>
        <fieldset className='one-half'>
          <input id='registro' type='text' name='registro' required autoComplete='false' />
          <label htmlFor='registro'>registro</label>
        </fieldset>
        <fieldset className='one-half'>
          <input id='salida' type='text' name='salida' required autoComplete='false' />
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
        <div className='footer'>
          <button disabled ref={button => { this.domSubmitButton = button }}
          >Ver disponibilidad</button>
        </div>
      </section>
    </div>)
  }
}
