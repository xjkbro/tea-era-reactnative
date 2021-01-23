import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    ScrollView,
    Animated,
} from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import * as Font from "expo-font";

function RenderItem(props) {
    const { item } = props;
    return (
        <View>
            <Text
                style={{
                    color: "#2F575D",
                    fontWeight: "bold",
                    textAlign: "left",
                    fontSize: 20,
                }}
            >
                Our Mission Statement
            </Text>
            <Image
                style={{ margin: 0, height: 250, width: 400 }}
                source={require("../assets/images/carousel-1.jpg")}
            />
            <Text style={{ textAlign: "right", margin: 10 }}>
                {
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quas nulla atque soluta eum cum, accusantium, hic quaerat, odio quibusdam nemo? Animi facere consequuntu nesciunt et saepe ipsam optio! Laborum nihil tenetur obcaecati incidunt, blanditiis error facere! Placeat molestias nostrum obcaecati! Sed, vitae alias ipsum ea exercitationem nesciunt rem voluptatum soluta delectus iusto praesentium sequi incidunt eveniet odit tenetur quae hic qui autem est reiciendis at, ut, et ab officia!"
                }
            </Text>
        </View>
    );
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        };
    }
    static navigationOptions = {
        title: "Home",
    };
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
        if (this.state.loaded) {
            return (
                <ScrollView style={{ margin: 20 }}>
                    <Animatable.View
                        animation="fadeInDown"
                        duration={700}
                        delay={500}
                        style={{ marginBottom: 20 }}
                    >
                        <Text style={styles.TitleText}>
                            Our Mission Statement
                        </Text>
                        <Image
                            style={{ margin: 0, height: 250, width: 400 }}
                            source={require("../assets/images/carousel-1.jpg")}
                        />
                        <Text style={styles.imgText}>
                            {
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quas nulla atque soluta eum cum, accusantium, hic quaerat, odio quibusdam nemo? Animi facere consequuntu nesciunt et saepe ipsam optio! Laborum nihil tenetur obcaecati incidunt, blanditiis error facere! Placeat molestias nostrum obcaecati! Sed, vitae alias ipsum ea exercitationem nesciunt rem voluptatum soluta delectus iusto praesentium sequi incidunt eveniet odit tenetur quae hic qui autem est reiciendis at, ut, et ab officia!"
                            }
                        </Text>
                    </Animatable.View>
                    <Animatable.View
                        animation="fadeInDown"
                        duration={700}
                        delay={1000}
                        style={{ marginBottom: 20 }}
                    >
                        <Text style={styles.TitleText}>
                            Our Commitment & Responsibility
                        </Text>
                        <Image
                            style={{ margin: 0, height: 250, width: 400 }}
                            source={require("../assets/images/commitment-responsibility.jpg")}
                        />
                        <Text style={styles.imgText}>
                            {
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quas nulla atque soluta eum cum, accusantium, hic quaerat, odio quibusdam nemo? Animi facere consequuntu nesciunt et saepe ipsam optio! Laborum nihil tenetur obcaecati incidunt, blanditiis error facere! Placeat molestias nostrum obcaecati! Sed, vitae alias ipsum ea exercitationem nesciunt rem voluptatum soluta delectus iusto praesentium sequi incidunt eveniet odit tenetur quae hic qui autem est reiciendis at, ut, et ab officia!"
                            }
                        </Text>
                    </Animatable.View>
                </ScrollView>
            );
        } else {
            return null;
        }
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
export default Home;
