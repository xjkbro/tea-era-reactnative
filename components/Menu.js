import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static navigationOptions = {
        title: "Menu",
    };
    render() {
        return (
            <View>
                <Text>Menu</Text>
            </View>
        );
    }
}
export default Menu;
