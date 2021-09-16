import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions, Image, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

let { width } = Dimensions.get("window")

interface Props {
    routes: any;
    navigation?: any

}

const Progress = ({step, steps}) => {
    return (
        <View style = {styles.progressBar}>
            <View style = {styles.progressContainer}>
                <View style = {styles.progress}>
                </View>
            
            </View>

            <Text style = {styles.percent}>60%</Text>
        </View>
        
    )
}

export const LoadingRecentMyList: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <Text style={styles.header}>Most Recent</Text>
            <View style={styles.subContainer}>
                <Image style={styles.img} source={require("../../icon-group/imgTest.jpg")}></Image>
                <View style={styles.infoContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title } numberOfLines={2} ellipsizeMode='tail'>Name of story</Text>
                    </View>
                    <Text style={styles.chapter}>Chapter: 1254</Text>
                    <Progress step={1} steps={10}/>
                </View>
            </View>

            <View style={styles.subContainer}>
                <Image style={styles.img} source={require("../../icon-group/imgTest.jpg")}></Image>
                <View style={styles.infoContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title } numberOfLines={2} ellipsizeMode='tail'>Name of story</Text>
                    </View>
                    <Text style={styles.chapter}>Chapter: 1254</Text>
                    <Progress step={1} steps={10}/>
                </View>
            </View>
            <View style={styles.subContainer}>
                <Image style={styles.img} source={require("../../icon-group/imgTest.jpg")}></Image>
                <View style={styles.infoContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title } numberOfLines={2} ellipsizeMode='tail'>Name of story hhgfhgfgfdgfhgfhjfdfffffffffffffffffffffff</Text>
                    </View>
                    <Text style={styles.chapter}>Chapter: 1254</Text>
                    <Progress step={1} steps={10}/>
                </View>
            </View>

            <SkeletonPlaceholder>
                        <View style={styles.placeholderContainer}>
                            <View style={{ width: 100, height: 80, borderRadius:10, }} />
                            <View style={{ flexDirection:"column", marginLeft:10 }}>
                                <View style={{ width: 200, height: 30, borderRadius: 3 }} />
                                <View
                                    style={{ marginTop: 8, width: 80, height: 10, borderRadius: 3 }}
                                />
                                <View
                                    style={{ marginTop: 8, width: 150, height: 10, borderRadius: 3 }}
                                />
                            </View>
                        </View>
            </SkeletonPlaceholder>

            <SkeletonPlaceholder>
                        <View style={styles.placeholderContainer}>
                            <View style={{ width: 100, height: 80, borderRadius:10 }} />
                            <View style={{ flexDirection:"column", marginLeft:10 }}>
                                <View style={{ width: 200, height: 30, borderRadius: 3 }} />
                                <View
                                    style={{ marginTop: 8, width: 80, height: 10, borderRadius: 3 }}
                                />
                                <View
                                    style={{ marginTop: 8, width: 150, height: 10, borderRadius: 3 }}
                                />
                            </View>
                        </View>
            </SkeletonPlaceholder>
            
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>See More</Text>
        </TouchableOpacity>
                        
            
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255, 255, 255, 0.0)",
        alignItems: "flex-start",
        justifyContent:'flex-start',
        flexDirection:'column',
        flexWrap:'wrap',
        display: 'flex',
        marginTop:25,

    },
    header:{
        fontSize:16,
        color: '#22201E',
        marginBottom:10,
        fontFamily:'Montserrat-Bold'
    },
    subContainer:{
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        width:width-30,
        borderRadius:10,
        display:'flex',
        flexDirection:'row',
        height: 80,
        justifyContent:'flex-start',
        marginVertical:5
        
    },
    img:{
        width: 100,
        height:80,
        borderRadius:10,
    },
    infoContainer: {
        display:'flex',
        width:width/1.8,
        flexDirection: 'column',
        marginHorizontal: 10,
        justifyContent:'space-evenly',
        
        
    },
    titleContainer:{
        height:34,
        justifyContent:'center',
    },

    title:{
        fontSize:13,
        color: '#22201E',
        fontFamily:'Montserrat-SemiBold'
    },
    chapter:{
        color:'#6E747C',
        fontSize: 11,
        fontFamily:'Montserrat-Medium'

    },
    progressContainer:{
        height: 9,
        width:width /2,
        backgroundColor:'rgba(0,0,0,0.1)',
        borderRadius: 4,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor:'white',
        

        
    },
    progress:{
        height: 7,
        borderRadius: 4,
        width: ((width/2)*0.6),
        backgroundColor: "black",
        position: 'absolute',


    },
    progressBar: {
        width:width/1.9,
        display:'flex',
        flexDirection:'row',
        alignSelf:'flex-start',
        alignItems:'center',
        justifyContent:'space-between',

    },
    percent:{
        fontSize: 11,
        color: '#FF845D',
        fontWeight:'bold',
        marginLeft: 5,
        fontFamily:'Montserrat-Bold'
    },
    buttonContainer:{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderWidth:1,
        borderRadius:8,
        width:width-30,
        borderColor:"white",
        height:30,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:5


    },
    buttonText:{
        color:'#22201E',
        fontFamily:'Montserrat-Bold'
    },

    placeholderContainer: {
        flexDirection: "row", 
        alignItems: "center",
        width:width-30,
        marginVertical:5

        
    },

})