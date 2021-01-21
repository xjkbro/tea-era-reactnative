import React, { Component } from "react";
import { View, Image, Text, ScrollView, Animated } from "react-native";
import { Card } from "react-native-elements";

class Attractions extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static navigationOptions = {
        title: "Attractions",
    };
    render() {
        return (
            <ScrollView style={{ margin: 20 }}>
                <View style={{ marginBottom: 20 }}>
                    <Text
                        style={{
                            color: "#2F575D",
                            fontWeight: "bold",
                            textAlign: "left",
                            fontSize: 24,
                            marginBottom: 5,
                        }}
                    >
                        Our Mission Statement
                    </Text>
                    <Image
                        style={{ margin: 0, height: 250, width: 400 }}
                        source={require("../assets/images/carousel-1.jpg")}
                    />
                    <Text
                        style={{
                            textAlign: "right",
                            fontWeight: "light",
                            margin: 10,
                        }}
                    >
                        {
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quas nulla atque soluta eum cum, accusantium, hic quaerat, odio quibusdam nemo? Animi facere consequuntu nesciunt et saepe ipsam optio! Laborum nihil tenetur obcaecati incidunt, blanditiis error facere! Placeat molestias nostrum obcaecati! Sed, vitae alias ipsum ea exercitationem nesciunt rem voluptatum soluta delectus iusto praesentium sequi incidunt eveniet odit tenetur quae hic qui autem est reiciendis at, ut, et ab officia!"
                        }
                    </Text>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text
                        style={{
                            color: "#2F575D",
                            fontWeight: "bold",
                            textAlign: "left",
                            fontSize: 24,
                        }}
                    >
                        Our Commitment & Responsibility
                    </Text>
                    <Image
                        style={{ margin: 0, height: 250, width: 400 }}
                        source={require("../assets/images/commitment-responsibility.jpg")}
                    />
                    <Text style={{ textAlign: "right", margin: 10 }}>
                        {
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quas nulla atque soluta eum cum, accusantium, hic quaerat, odio quibusdam nemo? Animi facere consequuntu nesciunt et saepe ipsam optio! Laborum nihil tenetur obcaecati incidunt, blanditiis error facere! Placeat molestias nostrum obcaecati! Sed, vitae alias ipsum ea exercitationem nesciunt rem voluptatum soluta delectus iusto praesentium sequi incidunt eveniet odit tenetur quae hic qui autem est reiciendis at, ut, et ab officia!"
                        }
                    </Text>
                </View>
            </ScrollView>
        );
    }
}
export default Attractions;
