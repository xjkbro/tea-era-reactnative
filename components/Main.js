import React, { Component } from "react";
import Home from "./Home";
import Menu from "./Menu";
import Attractions from "./Attractions";
import Tea from "./Tea";
import Contact from "./Contact";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home },
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#658B6F",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
        },
    }
);

const MenuNavigator = createStackNavigator(
    {
        Menu: { screen: Menu },
    },
    {
        initialRouteName: "Menu",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#658B6F",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
        },
    }
);

const TeaNavigator = createStackNavigator(
    {
        Tea: { screen: Tea },
    },
    {
        initialRouteName: "Tea",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#658B6F",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
        },
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact },
    },
    {
        initialRouteName: "Contact",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#658B6F",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
        },
    }
);

const AttractionsNavigator = createStackNavigator(
    {
        Attractions: { screen: Attractions },
    },
    {
        initialRouteName: "Attractions",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#658B6F",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
        },
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="home"
                        type="font-awesome"
                        size={18}
                        color={tintColor}
                    />
                ),
            },
        },
        Menu: {
            screen: MenuNavigator,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="list"
                        type="font-awesome"
                        size={18}
                        color={tintColor}
                    />
                ),
            },
        },
        Attractions: {
            screen: AttractionsNavigator,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="puzzle-piece"
                        type="font-awesome"
                        size={18}
                        color={tintColor}
                    />
                ),
            },
        },
        Tea: {
            screen: TeaNavigator,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="leaf"
                        type="font-awesome"
                        size={18}
                        color={tintColor}
                    />
                ),
            },
        },
        Contact: {
            screen: ContactNavigator,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="address-card"
                        type="font-awesome"
                        size={18}
                        color={tintColor}
                    />
                ),
            },
        },
    },
    {
        drawerBackgroundColor: "#DEE1DD",
    }
);

const AppNavigator = createAppContainer(MainNavigator);

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
