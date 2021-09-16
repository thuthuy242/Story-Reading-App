import * as React from 'react';
import { StyleSheet, ImageBackground, Dimensions, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { Text, View } from '../../components/base_group/Themed';
import { LoadingResumeReading } from '../../components/loading-group/my-list/LoadingResumeReading';
import IconChoose from '../../components/icon-group/IconChoose';
import IconBack from '../../components/icon-group/IconBack';

const background = require("../../assets/images/background.png");
let { width, height } = Dimensions.get("window")

function ResumeReadingScreen(props) {
    return (
        <View style={styles.container}>
            <ImageBackground blurRadius={0} source={background} resizeMode="cover" style={styles.backgroundImage}>
                <View style={styles.wrapper}>
                    
                    
                    <View style={styles.header}>

                        <Text style={styles.title}>RESUME READING</Text>
                        <IconChoose/>
                    </View>
                    
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <LoadingResumeReading/>
                        
             
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
        flexDirection:'row',
        marginBottom:8
    },
    title: {
        color: "#22201E",
        fontSize: 16,
        fontFamily:'Montserrat-Bold',
        marginRight:5
    },

});
export default ResumeReadingScreen;