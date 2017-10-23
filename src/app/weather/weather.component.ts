import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent {
  txtCityName = '';

  constructor(private weatherSerice: WeatherService) {}

  onGetWeather() {
    this.weatherSerice.getWeather(this.txtCityName)
    .then(temp => alert(temp));
    this.txtCityName = '';
  }
}

// http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=
