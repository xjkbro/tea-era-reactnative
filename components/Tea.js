import React, { Component } from "react";
import {
    View,
    Image,
    StyleSheet,
    Text,
    ScrollView,
    Animated,
} from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import * as Font from "expo-font";

class Tea extends Component {
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
        title: "The Tea",
    };
    render() {
        return (
            <View style={{ margin: 20 }}>
                <View style={{ marginBottom: 20 }}>
                    <Animatable.View
                        animation="fadeInLeft"
                        duration={700}
                        delay={500}
                    >
                        <Image
                            style={{
                                marginBottom: 50,
                                height: 250,
                                width: 350,
                            }}
                            source={require("../assets/images/tea.jpeg")}
                        />
                    </Animatable.View>
                    <Animatable.View
                        animation="fadeInRight"
                        duration={700}
                        delay={500}
                    >
                        <Text style={styles.imgText}>
                            {
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quas nulla atque soluta eum cum, accusantium, hic quaerat, odio quibusdam nemo? Animi facere consequuntu nesciunt et saepe ipsam optio! Laborum nihil tenetur obcaecati incidunt, blanditiis error facere! Placeat molestias nostrum obcaecati! Sed, vitae alias ipsum ea exercitationem nesciunt rem voluptatum soluta delectus iusto praesentium sequi incidunt eveniet odit tenetur quae hic qui autem est reiciendis at, ut, et ab officia!"
                            }
                        </Text>
                    </Animatable.View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imgText: {
        fontFamily: "Montserrat",
        textAlign: "center",
        margin: 10,
    },
});

export default Tea;
