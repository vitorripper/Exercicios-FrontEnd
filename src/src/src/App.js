import style from './App.css';
import {useState} from 'react'
import imc from './imc_foto.jpg'
function App() {
  const [valor, setValor] = useState()
  const [resultado, setResultado] = useState({
    valorImc: ""
  })
  function calcular(valor){
    if(valor <= 18.5){
      return('Abaixo do peso')
    }
    else if(18.5 < valor && valor <= 24.9){
      return('Peso Ideal')
    }
    else if(25 <= valor && valor <= 29.9){
      return('Sobrepeso')
    }
    else if(30 <= valor && valor <= 34.9){
      return('Obeso Grau I')
    }
    else if(35 <= valor && valor <= 39.9){
      return('Obeso Grau II')
    }
    else if( valor >= 40 ){
      return('Obeso Grau III')
    }
    else{
      return('Valor Inválido')
    }
  }
  function analisar(evento){
      evento.preventDefault()
      setResultado({
        
        valorImc: calcular(valor)
      })
  }
  return (
    <div className='imc'>

      
      <form onSubmit={analisar}>

        <header className='Titulo'>
          <h1>
            Análise IMC
          </h1>
        </header>

        <div className='entrada'>
          <label>
            IMC:
          </label>

          <input placeholder='Informe o valor do IMC' value={valor} onChange={(evento) => setValor(evento.target.value)}>
          </input>

        </div>

        <button type='submit' className='botao'>Analisar</button>

        <br></br>

        <div className='resultado'>
          <label>
            <strong>Resultado: {resultado.valorImc}</strong>
          </label>
        </div>
        <p>&copy;vitorripper&marcosrosa</p>

      </form>

    </div>
  );
}

export default App;
