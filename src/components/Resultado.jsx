import styled from '@emotion/styled'

const Resultado = ({resultado}) => {

  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado

  return (
    <div>
      <p>El precio es de: <span>{PRICE}</span></p>
      <p>Precio mas alto deldia: <span>{HIGHDAY}</span></p>
      <p>Precio mas bajo deldia: <span>{LOWDAY}</span></p>
      <p>Varición delas ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></p>
      <p>Última actualizacion: <span>{LASTUPDATE}</span></p>
    </div>
  )
}

export default Resultado
