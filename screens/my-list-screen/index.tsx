import * as React from 'react';
import { StyleSheet, ImageBackground, Dimensions, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { Text, View } from '../../components/base_group/Themed';
import { ItemResumeReading } from '../../components/item-group/my-list/ItemResumeReading';
import { LoadingCollectionMyList } from '../../components/loading-group/my-list/LoadingCollectionMyList';
import { LoadingRecentMyList } from '../../components/loading-group/my-list/LoadingRecentMyList';
import { LoadingRecommendMyList } from '../../components/loading-group/my-list/LoadingRecommendMyList';

const background = require("../../assets/images/background.png");
let { width, height } = Dimensions.get("window")

function MyList(props) {
    return (
        <View style={styles.container}>
            <ImageBackground blurRadius={0} source={background} resizeMode="cover" style={styles.backgroundImage}>
                <View style={styles.wrapper}>
                    <View style={styles.header}>
                        <Text style={styles.title}>MY LIST</Text>
                    </View>
                    
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <LoadingRecentMyList/>
                        <LoadingCollectionMyList/>  
                        <ItemResumeReading/> 
                        <LoadingRecommendMyList/>
             
                    </ScrollView >
                    
                </View>
            </ImageBackground>
            
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    wrapper: {
        margin: 15,
        backgroundColor: "rgba(255, 255, 255, 0)",
    },

    container: {
        width: width,
        height: height,
    },
    header: {
        backgroundColor: "rgba(255, 255, 255, 0)",
        display: "flex",
        alignItems:'center',
        justifyContent: "center",
        marginTop: 30,
    },
    title: {
        color: "#22201E",
        fontSize: 20,
        fontFamily:'Montserrat-Bold',
    },


});
export default MyList;