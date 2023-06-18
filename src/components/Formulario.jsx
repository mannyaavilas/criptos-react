import {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
    background: linear-gradient(90deg, rgba(3,247,174,1) 0%, rgba(23,214,194,1) 100%);
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    border-radius: 30px;
    text-transform: uppercase;
    font-size: 20px;
    transition: background-color .5s ease;

    &:hover{
        background: #0fa999;
        cursor: pointer;
    }
`;

const Formulario = () => {

  const [criptos, setCriptos] = useState([]);  

  const [ moneda, SelectMonedas ] = useSelectMonedas('Elije tu Moneda', monedas);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
      const respuesta = await fetch(url);
      const resultado = await respuesta.json()

      const arrayCriptos = resultado.Data.map(cripto => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }
        return objeto
      })
      setCriptos(arrayCriptos)
    }
    consultarAPI()
  }, [])

  

  return (
    <form>
      <SelectMonedas />
      
      <InputSubmit type="submit" value='Cotizar' />
    </form>
  )
}

export default Formulario
