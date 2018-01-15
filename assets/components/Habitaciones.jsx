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
          return (<fieldset key={habitacion.id} class={habitacion.tipo}>
            <input type='radio' name='habitacion' value={habitacion.id} id={`habitacion-${habitacion.numero_habitacion}`} required
              onChange={this.props.habitacionSeleccionada} />
            <label htmlFor={`habitacion-${habitacion.numero_habitacion}`}>habitacion {habitacion.numero_habitacion} <span>{habitacion.tipo}</span></label>
          </fieldset>)
        })}
      </section>
    </div>)
  }
}
