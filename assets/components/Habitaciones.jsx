import React from 'react'

export default class Habitaciones extends React.Component {
  constructor (props) {
    super()
  }

  render () {
    return (<div>
      <section className='habitaciones flex'>
        <b className='one legend'>Habitaciones disponibles</b>
        {this.props.parentState.habitaciones.map((habitacion) => {
          return (<fieldset key={habitacion.id}>
            <input type='radio' name='habitacion' value={habitacion.id} id={`habitacion-${habitacion.numero}`} required
              onChange={this.props.habitacionSeleccionada} />
            <label htmlFor={`habitacion-${habitacion.numero}`}>habitacion {habitacion.numero}</label>
          </fieldset>)
        })}
      </section>
    </div>)
  }
}
