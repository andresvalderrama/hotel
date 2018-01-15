import React from 'react'

export default class Huespedes extends React.Component {
  constructor (props) {
    super()

    this.state = {}
    this.fakeState = Array(props.parentState.huespedes.length)

    this.informacionHuesped = this.informacionHuesped.bind(this)
  }

  /* funcion para iterar sobre los padres de un elemento
   * retorna en data-id(numero) del huespde que se esta
   * llenando.
   */
  getParentDataId (el, className) {
    while (el && el.parentNode) {
      el = el.parentNode
      if (el.classList.contains(className)) return Number(el.getAttribute('data-id'))
    }
  }

  informacionHuesped (event) {
    let element = event.target
    let value = element.value
    let name = element.name
    let heuspedNumero = this.getParentDataId(element, 'huesped')

    this.fakeState[heuspedNumero] = this.fakeState[heuspedNumero] || {}
    this.fakeState[heuspedNumero][name] = value.trim()

    this.setState(this.fakeState)
  }

  componentDidUpdate () {
    this.props.guardarHuesped(this.fakeState)
  }

  render () {
    return (<div>
      <section className='huespedes'>
        <b className='one legend'>Informacion de los huespedes</b>
        {this.props.parentState.huespedes.map((huesped, index) => {
          return (<div className='huesped flex' key={index} data-id={index}>
            <span className='counter' />
            <fieldset className='one-half'>
              <input type='text' id='nombre' name='nombre' required onBlur={this.informacionHuesped} />
              <label htmlFor='nombre'>nombres</label>
            </fieldset>
            <fieldset className='one-half'>
              <input type='text' id='apellidos' name='apellidos' required onBlur={this.informacionHuesped} />
              <label htmlFor='apellidos'>apellidos</label>
            </fieldset>
            <fieldset className='one'>
              <select id='numero-documento' name='numero-documento' required onBlur={this.informacionHuesped}>
                <option value='' selected disabled />
                <option value='cedula'>cedula de ciudadania</option>
                <option value='pasaporte'>pasaporte</option>
                <option value='tarjeta'>tarjeta de identidad</option>
              </select>
              <label htmlFor='numero-documento'>tipo de documento</label>
            </fieldset>
            <fieldset className='one'>
              <input type='text' id='tipo-documento' name='tipo-documento' required onBlur={this.informacionHuesped} />
              <label htmlFor='tipo-documento'>numero de documento</label>
            </fieldset>
          </div>)
        })}
      </section>
    </div>)
  }
}
