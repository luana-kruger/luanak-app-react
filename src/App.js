/*Importando um hook nativo da biblioteca react (para fazer um two way data binding)*/
import { useState, useEffect } from "react"; 

/* Hooks permitem que você use o state e outros recursos do React sem escrever uma classe */

function App() {
  //Boolean [city, setCity] = useState("");
  const [city, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(null);
  //const [isLoading, setloadWeather] = useState(true);

  const searchForescastWeather = () => {
    fetch(`
          http://api.weatherapi.com/v1/current.json?key=e751ea9cf5bc4fcbbb3225428211810&q=${city}&lang=pt
    `).then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      }).then((data) => {
        //console.log(data);
        setWeatherForecast(data);
      });
  };
/*
  const loadWeather = () => {
      setTimeout(() => setloadWeather(false), 1000)
  };
*/
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };


  return ( /* aqui no return podemos usar tags html */
    <div>
      {/*<nav className="navbar (é o estilo) navbar-expand-md (tamanho médio) navbar-dark (mais escuro) bg-dark (bd escuro) mb-4 (margem baixo de 4">*/}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a className="navbar-brand" href="#search">
          Weather Forecast Now!
        </a>
      </nav>

      <main className="container" id="search">

        <div className="jumbotron">

          <h1>Consulte a previsão do tempo em sua cidade</h1>

          <p className="lead"> 
            Esse site fornece uma previsão do tempo nacional e local para as cidades. <br />
            Digite o nome da sua cidade e em seguida clique em <b>pesquisar</b>.
          </p>

          <div className="mb-4">
            <div>

              <input type="text" className="form-control" value={city} onChange={handleCityChange}/>

            </div>
          </div>

          <button className="btn btn-lg btn-primary" onClick={searchForescastWeather}>
            PESQUISAR
            {/*{isLoading ? "Pesquisando ....": "PESQUISAR" }*/}
          </button>

          { weatherForecast ? (
          
            <div className="mt-4 d-flex align-items-center">
                <div className="col-sm-1">
                  <img src={weatherForecast.current.condition.icon} alt="Weather Icon"/>
                </div>

                <div>
                  <h3>Hoje o dia está: {weatherForecast.current.condition.text}</h3>
                  <p className="lead">   Temperatura: {weatherForecast.current.temp_c} °C</p>
                </div>

            </div>
           
          ) : null
          }

        </div>

      </main>
    </div>  
  );
}

export default App;


// Teste1 two way data binding

/* Dentro de function App() {
  const saudacao = "Bem vindo!"
  const [inputValue, setInputValue] = useState("")
  const handleInputChange = (element) => {
    setInputValue(element.target.value)
*/

/* Dentro do return:
      <div>
        <h1> Olá mundo! {inputValue} </h1>
        {/* O que eu estou "inputando" no DOM vai alterar o valor dentro do react e este altera o valor dentro do DOM*/ //}
        /*<input type="text" value={inputValue} onChange={handleInputChange}/>
      </div> */