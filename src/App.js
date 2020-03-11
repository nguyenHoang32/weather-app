import React from 'react';
import Axios from 'axios';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';
const API_ID = 'cfca78f2c6e86f610af3b24434aba7de';
class App extends React.Component{
  state = {
    city: undefined,
    temp: undefined,
    feels_like: undefined,
    temp_max: undefined,
    temp_min: undefined,
    humidity: undefined,
    description: undefined,
    icon : undefined,
    error: undefined,
    toggle : undefined
  }
  getApi = (event) => {
    event.preventDefault();
    const city = event.target.city.value;
    if(city){
      Axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_ID}&lang=vi`)
    .then((res) => {
      const data = res.data;
      console.log(data)
      this.setState({
        city: data.name,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon : data.weather[0].icon,
        error: undefined
      })
    }).catch((error) => this.setState({
      city: undefined,
      temp: undefined,
      feels_like: undefined,
      temp_max: undefined,
      temp_min: undefined,
      humidity: undefined,
      description: undefined,
      icon : undefined,
      error : 'Thành phố không hợp lệ'
    })
    );
    }else{
      this.setState({
        error: 'Hãy điền tên thành phố'
      })
    }
  }
  onClick = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  render(){
    const { 
      city,
      temp,
      feels_like,
      temp_max,
      temp_min,
      description,
      humidity,
      icon,
      error,
      toggle
     } = this.state;
    return(
      <div>
        <Form 
        getApi={this.getApi}
        error={error}
        />
        <Weather 
        city={city}
        temp={temp}
        feels_like={feels_like}
        temp_max={temp_max}
        temp_min={temp_min}
        description={description}
        humidity={humidity}
        icon={icon}
        toggle={toggle}
        onClick={this.onClick}
        />
      </div>
    )
  }
}

export default App;
