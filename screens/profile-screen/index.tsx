import * as React from 'react';
import { StyleSheet, ImageBackground, Dimensions, ScrollView, FlatList, SafeAreaView } from 'react-native';
import { Text, View } from '../../components/base_group/Themed';
import BellIcon from "../../components/icon-group/bell"
import Avatar from './Avatar';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ContenChapter from '../../components/model-group/ContentChapter'
import { LoadingGenre } from '../../components/loading-group/LoadingGenre';
import { GenreItem } from "../../components/item-group/GenreItem"
const background = require("../../assets/images/background.png");
let { width, height } = Dimensions.get("window")
// import Banner from "./banner/HomeBanner"
// import ListHotStory from './HomeListHotStory';
function Profile(props) {
    let fall = new Animated.Value(1)
    const renderContent = () => (
        <ContenChapter></ContenChapter>
    );

    const sheetRef: { current: any } = React.useRef(null);
    return (
        <View style={styles.container}>
            
            <ImageBackground blurRadius={0} source={background} resizeMode="cover" style={styles.backgroundImage}>
                <View style={styles.wrapper}>


                    <View style={styles.header}>
                        <Text style={styles.title}> Menu</Text>
                        <View style={styles.removeBackground}>

                            <View style={styles.icon}>
                                <BellIcon onPress={() => sheetRef.current.snapTo(0)}></BellIcon>
                                {/* <FaderIcon></FaderIcon> */}
                            </View>
                        </View>
                    </View>
                    
                    {/* avatar */}
                    <Avatar></Avatar>

                    {/* bottom_Sheet */}

                    {/* < SafeAreaView> */}
                    {/* </View> */}
                </View>
            </ImageBackground>
            {/* </SafeAreaView> */}
        </View>
     );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    wrapper: {
        marginTop: 20,
        backgroundColor: "rgba(255, 255, 255, 0)",
    },
    removeBackground: {
        backgroundColor: "rgba(255, 255, 255, 0)",
    },
    container: {
        width: width,
        height: height,
    },
    header: {
        backgroundColor: "rgba(255, 255, 255, 0)",
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 25,
    },
    title: {
        color: "#22201E",
        fontSize: 25,
        fontFamily:'Montserrat-Bold'
    },

    icon: {
        paddingLeft: width / 2 + 60,
        //pLeft: width / 5,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end",
        backgroundColor: "rgba(255, 255, 255, 0)",

    },
    scroll: {
        marginTop: 20,
        display: 'flex',
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    }
});
export default Profile;