import * as React from "react"
import { View, StyleSheet, ImageBackground } from "react-native"
import Svg, { Path } from "react-native-svg"
const background = require("../../assets/images/tranparent.png");
function SvgComponent(props) {
    return (
        <ImageBackground source={background} style={styles.backgroundImage}>

            <Svg
                xmlns="http://www.w3.org/2000/svg"
                //style={{ background: "rgba(255, 255, 255, 0)" }}
                width={26}
                height={26}
                fill="none"
                fill-opacity="0.5"
                viewBox="0 0 26 26"
                {...props}
            >
                <Path

                    stroke={props.color ? props.color : "#22201E"}
                    strokeWidth="2"

                    d="M15.031 17.468H4.062m17.876 0h-2.844M17.063 19.5a2.031 2.031 0 100-4.063 2.031 2.031 0 000 4.062zM8.531 8.53H4.062m17.876 0h-9.344m-2.031 2.032a2.031 2.031 0 100-4.063 2.031 2.031 0 000 4.063z"
                />
            </Svg>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    backgroundImage: {
        //backgroundColor: "rgba(255, 255, 255, 0)",
        zIndex: 10

    },
})
export default SvgComponent