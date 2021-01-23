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

class Attractions extends Component {
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
        title: "Attractions",
    };
    render() {
        return (
            <ScrollView style={{ margin: 20 }}>
                <Animatable.View
                    animation="fadeInLeft"
                    duration={700}
                    delay={500}
                    style={{ marginBottom: 20 }}
                >
                    <Text style={styles.TitleText}>Board Games</Text>
                    <Image
                        style={{ margin: 0, height: 500, width: 400 }}
                        source={require("../assets/images/chess.jpeg")}
                    />
                    <Text style={styles.imgText}>
                        {
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quas nulla atque soluta eum cum, accusantium, hic quaerat, odio quibusdam nemo? Animi facere consequuntu nesciunt et saepe ipsam optio! Laborum nihil tenetur obcaecati incidunt, blanditiis error facere! Placeat molestias nostrum obcaecati! Sed, vitae alias ipsum ea exercitationem nesciunt rem voluptatum soluta delectus iusto praesentium sequi incidunt eveniet odit tenetur quae hic qui autem est reiciendis at, ut, et ab officia!"
                        }
                    </Text>
                </Animatable.View>
                <Animatable.View
                    animation="fadeInLeft"
                    duration={700}
                    delay={1000}
                    style={{ marginBottom: 20 }}
                >
                    <Text style={styles.TitleText}>Gaming Cafe</Text>
                    <Image
                        style={{ margin: 0, height: 250, width: 400 }}
                        source={require("../assets/images/pccafe.jpeg")}
                    />
                    <Text style={styles.imgText}>
                        {
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quas nulla atque soluta eum cum, accusantium, hic quaerat, odio quibusdam nemo? Animi facere consequuntu nesciunt et saepe ipsam optio! Laborum nihil tenetur obcaecati incidunt, blanditiis error facere! Placeat molestias nostrum obcaecati! Sed, vitae alias ipsum ea exercitationem nesciunt rem voluptatum soluta delectus iusto praesentium sequi incidunt eveniet odit tenetur quae hic qui autem est reiciendis at, ut, et ab officia!"
                        }
                    </Text>
                </Animatable.View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    imgText: {
        fontFamily: "Montserrat",
        textAlign: "right",
        margin: 10,
    },
    TitleText: {
        fontFamily: "PoiretOne",
        color: "#7a6a53",
        textAlign: "left",
        fontSize: 32,
        marginBottom: 5,
    },
});
export default Attractions;
