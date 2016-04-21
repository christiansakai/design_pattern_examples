public class WeatherData {

  public void measurementChanged() {
    float temperature = getTemperature();
    float humidity = getHumidity();
    float pressure = getPressure();

    currentConditionsDisplay.update(temperature, humidity, pressure);
    statisticsDisplay.update(temperature, humidity, pressure);
    forecastDisplay.update(temperature, humidity, pressure);
  }

}
