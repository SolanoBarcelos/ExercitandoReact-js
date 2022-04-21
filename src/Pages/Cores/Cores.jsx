import React, {useState} from "react";
import './Cores.css';

function Cores() {

    const [cor, setCor] = useState("")
    const [background, setBackground] = useState("")

    function funcaoCorVermelho(){
        setCor ("vermelho")
        setBackground ("red")
    }

    function funcaoCorLaranja(){
        setCor ("laranja")
        setBackground ("orange")
    }

    function funcaoCorAmarelo(){
        setCor ("amarelo")
        setBackground ("yellow")
    }

    function funcaoCorVerde(){
        setCor ("verde")
        setBackground ("green")
    }

    function funcaoCorAzul(){
        setCor ("azul")
        setBackground ("blue")
    }

    function funcaoCorAnil(){
        setCor ("anil")
        setBackground ("indigo")
    }

    function funcaoCorVioleta(){
        setCor ("violeta")
        setBackground ("violet")
    }

  return (

      <body style={{backgroundColor:background}}>

          <main>

          <div className="container">

              <div><h1>Clique nos botões para alterar a cor da pagina:</h1></div>

              <button style={{backgroundColor:"red"}} onClick={funcaoCorVermelho}>Vermelho</button>
              <button style={{backgroundColor:"orange"}} onClick={funcaoCorLaranja}>Laranja</button>
              <button style={{backgroundColor:"yellow"}} onClick={funcaoCorAmarelo}>Amarelo</button>
              <button style={{backgroundColor:"green"}} onClick={funcaoCorVerde}>Verde</button>
              <button style={{backgroundColor:"blue"}} onClick={funcaoCorAzul}>Azul</button>
              <button style={{backgroundColor:"indigo"}} onClick={funcaoCorAnil}>Anil</button>
              <button style={{backgroundColor:"violet"}} onClick={funcaoCorVioleta}>Violeta</button>

          </div>
        
        <div><h3>A cor escolhida foi {cor}</h3></div>

        </main>
        
      </body>


  );
}

export default Cores;