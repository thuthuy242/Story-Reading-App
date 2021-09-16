import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from "react-native"
let { width } = Dimensions.get("window")
// let height = width * 0.6

const CarouselItem = (props: any) => {
    console.log(props);

    const [state, setstate] = useState(props.statusActive ? 3 : 2)
    return (
        <View style={styles.container}>

            <Image
                key={props.keys}
                source={props.item.item.soure}
                style={{ ...styles.image, height: props.statusActive ? 220 : 180, }}
            >
            </Image>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginHorizontal: 20,
        //alignContent: "center",
        alignItems: "center",
        justifyContent: "center",

        //width: width / 4 * 2.5
    },
    image: {
        width: width / 4 * 2.5,

        resizeMode: "cover"
    },
});
export default CarouselItem;
