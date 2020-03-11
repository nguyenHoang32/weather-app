import React from 'react';
class Weather extends React.Component{
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
            toggle
           } = this.props;
        return(
            <div onClick={this.props.onClick} style={{border: '1px soild black'}}>
                {icon && <img alt='' src={"http://openweathermap.org/img/w/" + icon + ".png"}></img>}
                {city && <p>Thành phố: {city}</p>}
                {temp && (toggle ? (<p>Nhiệt độ :{Math.floor(temp - 273.15)}°C </p>):(<p>Nhiệt độ :{Math.floor(temp)}°F </p>) )}
                {feels_like && (toggle ? <p>Cảm thấy như :{Math.floor(feels_like - 273.15)}°C</p> : <p>Cảm thấy như :{Math.floor(feels_like)}°F</p>) }
                {/* {temp_max && <p>Nhiệt độ cao nhất :{Math.floor(temp_max - 273.15)}°C</p>}
                {temp_min && <p>Nhiệt độ thấp nhất :{Math.floor(temp_min - 273.15)}°C</p>} */}
                {humidity && <p>Độ ẩm :{humidity}%</p>}
                {description && <p>Mô tả :{description}</p>}
            </div>
        )
    }
}
export default Weather;