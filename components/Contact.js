import React, { Component } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import * as Font from "expo-font";

class Contact extends Component {
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
        title: "Contact Information",
    };
    render() {
        return (
            <ScrollView>
                <Animatable.View
                    animation="fadeInDown"
                    duration={700}
                    delay={500}
                >
                    <Card
                        title="West Charleston and Jones"
                        wrapperStyle={styles.title}
                    >
                        <Text style={styles.desc}>
                            The location is in front of CSN's West Charelston
                            campus mainly to provided delicious drinks and an
                            area for students to relax after class.
                        </Text>
                        <Text style={styles.desc}>123 W Charleston Blvd</Text>
                        <Text style={styles.desc}>Las Vegas, NV 89112</Text>
                        <Text style={styles.desc}>U.S.A.</Text>
                        <Text style={styles.desc}>Phone: 1-702-555-1234</Text>
                        <Text style={styles.desc}>Email: jkdelara@tea.era</Text>
                    </Card>
                </Animatable.View>
                <Animatable.View
                    animation="fadeInDown"
                    duration={700}
                    delay={1000}
                >
                    <Card
                        title="UNLV - Maryland and Tropicana"
                        wrapperStyle={styles.title}
                    >
                        <Text style={styles.desc}>
                            The location is in front of UNLV to provided
                            delicious drinks and an area for students to relax
                            after class.
                        </Text>
                        <Text style={styles.desc}>123 Maryland Pkwy</Text>
                        <Text style={styles.desc}>Las Vegas, NV 89102</Text>
                        <Text style={styles.desc}>U.S.A.</Text>
                        <Text style={styles.desc}>Phone: 1-702-555-1235</Text>
                        <Text style={styles.desc}>Email: jkdelara@tea.era</Text>
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "PoiretOne",
        fontWeight: "normal",
        margin: 20,
    },
    desc: {
        fontFamily: "Montserrat",
        marginBottom: 10,
    },
});

export default Contact;
