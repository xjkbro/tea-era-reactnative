import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Input, CheckBox, Button, Icon } from "react-native-elements";
import { createBottomTabNavigator } from "react-navigation-tabs";
import * as Font from "expo-font";

class DrinksTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        };
    }
    async loadFonts() {
        await Font.loadAsync({
            Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
            PoiretOne: require("../assets/fonts/PoiretOne-Regular.ttf"),
        });
        this.setState({ loaded: true });
    }
    componentDidMount() {
        this.loadFonts();
    }

    static navigationOptions = {
        title: "Drinks",
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name="coffee"
                type="font-awesome"
                iconStyle={{ color: tintColor }}
            />
        ),
    };
    render() {
        if (this.state.loaded) {
            return (
                <View>
                    <Text style={{ fontFamily: "Montserrat" }}>Drinks</Text>
                </View>
            );
        } else {
            return null;
        }
    }
}

class SnacksTab extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static navigationOptions = {
        title: "Snacks",
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name="cutlery"
                type="font-awesome"
                iconStyle={{ color: tintColor }}
            />
        ),
    };
    render() {
        return (
            <View>
                <Text>Snack</Text>
            </View>
        );
    }
}

const Menu = createBottomTabNavigator(
    {
        Drinks: DrinksTab,
        Snacks: SnacksTab,
    },
    {
        tabBarOptions: {
            activeBackgroundColor: "#658B6F",
            inactiveBackgroundColor: "#C4CDC1",
            activeTintColor: "#fff",
            inactiveTintColor: "#808080",
            labelStyle: { fontSize: 16 },
            title: "MENU",
        },
    }
);

export default Menu;
