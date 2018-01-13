import React from 'react'

export default class Disponibildad extends React.Component {
  constructor (props) {
    super()
  }

  render () {
    return (<div>
      <section className='disponibilidad  flex'>
        <b className='one legend'>Verificar disponibilidad</b>
        <fieldset className='one-half'>
          <input id='ingreso' type='text' name='ingreso' required />
          <label htmlFor='ingreso'>ingreso</label>
        </fieldset>
        <fieldset className='one-half'>
          <input id='salida' type='text' name='salida' required />
          <label htmlFor='salida'>salida</label>
        </fieldset>
        <fieldset className='one'>
          <select id='huespedes' name='huespedes' required>
            <option disabled value='' selected />
            <option value='1'>1 huesped</option>
            <option value='2'>2 huespedes</option>
            <option value='3'>3 huespedes</option>
            <option value='4'>4 huespedes</option>
          </select>
          <label htmlFor='huespedes'># huespedes</label>
        </fieldset>
        <div className='footer'>
          <button>Ver disponibilidad</button>
        </div>
      </section>
    </div>)
  }
}
