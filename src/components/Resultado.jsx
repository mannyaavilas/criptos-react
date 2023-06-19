import styled from '@emotion/styled'

const Contenedor = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
`;

const Imagen =styled.img`
  display: block;
  width: 150px;
  gap: 1rem;
  margin-top: 50px;
`;

const Texto = styled.p`
  font-size: 18px;
  span{
    color: #8afe66;
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 30px;
  span{
    color: #16d8c1;
    font-weight: 700;
  }
`;


const Resultado = ({resultado}) => {

  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado

  return (
    <Contenedor>
      <Imagen 
        src={`http://cryptocompare.com/${IMAGEURL}`} 
        alt="imagen cripto" 
      />
      <div>
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Texto>Precio mas alto deldia: <span>{HIGHDAY}</span></Texto>
        <Texto>Precio mas bajo deldia: <span>{LOWDAY}</span></Texto>
        <Texto>Varición delas ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Última actualizacion: <span>{LASTUPDATE}</span></Texto>
      </div>
    </Contenedor>
  )
}

export default Resultado
