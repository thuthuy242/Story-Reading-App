import * as React from 'react';
import { StyleSheet, ImageBackground, Dimensions, ScrollView, FlatList } from 'react-native';
import { Text, View } from '../../components/base_group/Themed';
import FaderIcon from "../../components/icon-group/FaderHorizotal"
import SearchIcon from "../../components/icon-group/IconSearch"
import { LoadingGenre } from '../../components/loading-group/LoadingGenre';
import { GenreItem } from "../../components/item-group/GenreItem"
const background = require("../../assets/images/background.png");
let { width, height } = Dimensions.get("window")
// import Banner from "./banner/HomeBanner"
// import ListHotStory from './HomeListHotStory';
function BookCase(props) {
    return (
        <View style={styles.container}>
            <ImageBackground blurRadius={0} source={background} resizeMode="cover" style={styles.backgroundImage}>
                <View style={styles.wrapper}>


                    <View style={styles.header}>
                        <Text style={styles.title}> GENRES</Text>
                        <View style={styles.removeBackground}>

                            <View style={styles.icon}>
                                <SearchIcon width={25} height={25}></SearchIcon>
                                <FaderIcon></FaderIcon>
                            </View>
                        </View>
                    </View>
                    {/* < SafeAreaView> */}
                    <ScrollView contentContainerStyle={styles.scroll}>
                        {/* <LoadingGenre></LoadingGenre> */}

                        <GenreItem></GenreItem>
                        <GenreItem></GenreItem>
                        <GenreItem></GenreItem>
                        <GenreItem></GenreItem>
                        
                        {/* <FlatList>

                        </FlatList> */}
                        {/* <Banner></Banner>
                    <ListHotStory></ListHotStory> */}

                    </ScrollView >
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
        margin: 20,
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
        alignItems: "flex-start",
        alignContent: "center",
        justifyContent: "flex-end",
        flexDirection: "row",
        marginTop: 25,
    },
    title: {
        color: "#22201E",
        fontSize: 20,
        fontFamily:'Montserrat-Bold',


    },

    icon: {
        paddingLeft: width / 2 - (width / 3.5),
        //pLeft: width / 5,
        display: "flex",
        alignItems: "flex-end",
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
export default BookCase;