import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import Weather from "./Weather";

const API_KEY = "052fe2254832b04f6354eea928d120b2";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
        this.__getWeather(position.coords.latitude, position.coords.longitude);
    },
    error => {
      this.setState({
        error: error
      })
    }
    );
  }
  __getWeather = (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        temperature: json.main.temp,
        name:json.weather[0].main
      });
    })
  }
  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {isLoaded ? <Weather name={name} temp={Math.floor(temperature - 273.15)}/> : (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Getting the weather</Text>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
      )}
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 24
  },
  errorText: {
    color: "red",
    marginBottom: 20,
  }
});
