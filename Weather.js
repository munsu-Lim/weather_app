import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
    Rain: {
        colors:["#00C6FB", "#005BEA"],
        title: "Raning days",
        subtitle: "For more info look outside",
        icon: 'weather-pouring'
    },
    clear: {
        colors:["#FEF253", "#FF7300"],
        title: "Sunny days",
        subtitle: "Go outside and play!",
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors:["#00ECBC", "#007ADF"],
        title: "Thunder is comming",
        subtitle: "Watch out your head!",
        icon: 'weather-lightning'
    },
    Clouds: {
        colors:["#D7D2CC", "#304352"],
        title: "Clouds days...",
        subtitle: "So boooooooooring...",
        icon: 'weather-cloudy'
    },
    Snow: {
        colors:["#7DE2FC", "#B9B6E5"],
        title: "Snow Snow ~",
        subtitle: "Let's make snowman!",
        icon: 'weather-snowy'
    },
    Drizzel: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is it rain? ",
        icon: 'weather-rainy'
    },
    Haze: {
        colors:["#D7D2CC", "#304352"],
        title: "Haze days...",
        subtitle: "Can you see someting?",
        icon: 'weather-fog'
    },
    mist: {
        colors:["#D7D2CC", "#304352"],
        title: "mist!",
        subtitle: "yee!",
        icon: 'weather-hail'
    },
}

function weather({  temp, name }) {
    console.log(name);
    return(
        <LinearGradient colors={weatherCases[name].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[name].icon}/>
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[name].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[name].subtitle}</Text>
            </View>
        </LinearGradient>             
    )
}

weather.propTypes = {
    temp: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}

export default weather

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upper: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
    },
    temp: {
        fontSize: 48,
        color:"white",
        marginBottom: 24,
        marginTop: 10,
    },
    lower: {
        flex: 1,
        alignItems:"flex-start",
        justifyContent:"flex-end",
        paddingLeft: 25,
    },
    title: {
        fontSize: 38,
        color:"white",
        marginBottom: 10,
        fontWeight: "300",
    },
    subtitle: {
        fontSize: 24,
        color:"white",
        marginBottom: 24,
    },
})