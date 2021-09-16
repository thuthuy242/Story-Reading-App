import  React ,{useState} from 'react';
import { StyleSheet, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { Text, View } from '../../components/base_group/Themed';

const background = require("../../assets/images/background.png");
import Banner from "./banner/HomeBanner"
import ListHotStory from './HomeLastestStory';
import ListRecentStory from './HomeListRecentStory';
import ListRecommendedStory from './HomeListRecommendedStory';
import ListTOPStory from './HomeListTOPStory';
import ListMostViewedStory from './HomeListMostViewedStory';


function HomePage(props) {
	
    return (
        <View style={styles.container}>
            <ImageBackground blurRadius={0} source={background} resizeMode="cover" style={styles.backgroundImage}>
                {/* <View> */}
                {/* < SafeAreaView> */}
                <ScrollView>
                    <Banner></Banner>
                    <ListHotStory></ListHotStory>
                    <ListRecentStory></ListRecentStory>
                    <ListRecommendedStory></ListRecommendedStory>
                    <ListTOPStory></ListTOPStory>
                    <ListMostViewedStory></ListMostViewedStory>
                    

                </ScrollView >
                {/* </View> */}
            </ImageBackground>
            {/* </SafeAreaView> */}
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        // zIndex: -1,
        width: 600,
        //resizeMode: 'cover'
    },
    container: {
        // position: "relative",
        // zIndex: 0,
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    title: {
        zIndex: 1,
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
export default HomePage;