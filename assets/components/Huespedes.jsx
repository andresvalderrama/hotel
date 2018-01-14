import React from 'react'

export default class Huespedes extends React.Component {
  constructor (props) {
    super()
  }

  render () {
    return (<div>
      <section className='habitaciones flex'>
        <b className='one legend'>Informacion de los huespedes</b>
      </section>
      <fieldset className='one-half'>
        <input type='text' id='nombres' required />
        <label htmlFor='nombres'>nombres</label>
      </fieldset>
      <fieldset className='one-half'>
        <input type='text' id='apellidos' required />
        <label htmlFor='apellidos'>apellidos</label>
      </fieldset>
    </div>)
  }
}
