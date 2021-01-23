import React, { Component } from "react";
import Home from "./Home";
import Menu from "./Menu";
import Attractions from "./Attractions";
import Tea from "./Tea";
import Contact from "./Contact";
import {
    View,
    Platform,
    StyleSheet,
    Text,
    ScrollView,
    Image,
} from "react-native";
import { Icon } from "react-native-elements";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import SafeAreaView from "react-native-safe-area-view";
import * as Font from "expo-font";

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "#658B6F",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontFamily: "PoiretOne",
                color: "#fff",
            },
            headerLeft: (
                <Icon
                    name="home"
                    type="font-awesome"
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            ),
        }),
    }
);

const MenuNavigator = createStackNavigator(
    {
        Menu: { screen: Menu },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "#658B6F",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontFamily: "PoiretOne",
                color: "#fff",
            },
            headerLeft: (
                <Icon
                    name="list"
                    type="font-awesome"
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            ),
        }),
    }
);

const TeaNavigator = createStackNavigator(
    {
        Tea: { screen: Tea },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "#658B6F",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontFamily: "PoiretOne",
                color: "#fff",
            },
            headerLeft: (
                <Icon
                    name="leaf"
                    type="font-awesome"
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            ),
        }),
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "#658B6F",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontFamily: "PoiretOne",
                color: "#fff",
            },
            headerLeft: (
                <Icon
                    name="address-card"
                    type="font-awesome"
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            ),
        }),
    }
);

const AttractionsNavigator = createStackNavigator(
    {
        Attractions: { screen: Attractions },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "#658B6F",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontFamily: "PoiretOne",
                color: "#fff",
            },
            headerLeft: (
                <Icon
                    name="puzzle-piece"
                    type="font-awesome"
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            ),
        }),
    }
);

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView
            style={styles.container}
            forceInset={{ top: "always", horizontal: "never" }}
        >
            <View style={styles.drawerHeader}>
                <View style={{ flex: 1 }}>
                    <Image
                        source={require("../assets/images/tealogo.png")}
                        style={styles.drawerImage}
                    />
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerLabel: "Home",
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
                drawerLabel: "Menu",
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
                drawerLabel: "Attractions",
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
                drawerLabel: "The Tea",
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
                drawerLabel: "Contact Information",
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
        contentOptions: {
            labelStyle: { fontWeight: "normal", fontFamily: "PoiretOne" },
        },
        contentComponent: CustomDrawerContentComponent,
    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: "#DEE1DD",
        height: 140,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        flexDirection: "row",
    },
    drawerHeaderText: {
        fontFamily: "PoiretOne",
        color: "#fff",
        fontSize: 24,
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 250,
    },
    stackIcon: {
        marginLeft: 10,
        color: "#fff",
        fontSize: 24,
    },
});

export default Main;
