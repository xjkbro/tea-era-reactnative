import React, { Component } from "react";
import Home from "./Home";
import { Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home },
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#5637DD",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
        },
    }
);

const AppNavigator = createAppContainer(HomeNavigator);

class Main extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop:
                        Platform.OS === "ios"
                            ? 0
                            : Expo.Constants.statusBarHeight,
                }}
            >
                <AppNavigator />
            </View>
        );
    }
}

export default Main;
