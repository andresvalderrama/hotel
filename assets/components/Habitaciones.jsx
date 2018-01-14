import React from 'react'

export default class Habitaciones extends React.Component {
  constructor (props) {
    super()
  }

  componentDidMount () {
    console.log('componente renderisado')
  }

  render () {
    return (<div>
      <section className='habitaciones flex'>
        <b className='one legend'>Habitaciones dispobibles</b>
        <fieldset>
          <input type='radio' name='habitacion' value='101' id='habitacion-101' required />
          <label htmlFor='habitacion-101'>habitacion 101</label>
        </fieldset>
        <fieldset>
          <input type='radio' name='habitacion' value='102' id='habitacion-102' required />
          <label htmlFor='habitacion-102'>habitacion 102</label>
        </fieldset>
        <fieldset>
          <input type='radio' name='habitacion' value='103' id='habitacion-103' required />
          <label htmlFor='habitacion-103'>habitacion 103</label>
        </fieldset>
      </section>
      <section>
        <p className='footer'>
          <button>Reservar</button>
        </p>
      </section>
    </div>)
  }
}
