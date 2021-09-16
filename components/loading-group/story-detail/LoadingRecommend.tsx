import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native"
import { useNavigation } from '@react-navigation/native';
import IconView from "../../icon-group/IconView";
import IconChapter from '../../icon-group/IconChapter';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';


let { width } = Dimensions.get("window")

interface Props {
    routes: any;
    navigation?: any

}

export const LoadingRecommend: React.FC = () => {
    const navigation = useNavigation();

    return (
            <View style={styles.stories}>
                <SkeletonPlaceholder>
                    <View style={styles.placeholderContainer}>
                        <View style={{ width: width/3.42, height: 105, borderTopLeftRadius:8, borderTopRightRadius:8}} />
                        <View style={{ marginLeft: 2 }}>
                        <View style={{ width: width/3.75, height: 20,  marginTop: 8, borderRadius:3 }} />
                        <View style={{display:'flex', flexDirection:"row", justifyContent:'space-between', marginTop:3}}>
                            <View
                                style={{ marginTop: 6, width: 35, height: 8, borderRadius:3 }}
                            />
                            <View
                                style={{ marginTop: 6, width: 30, height: 8, borderRadius:3 }}
                            />
                        </View>
                        
                        </View>
                    </View>
                </SkeletonPlaceholder>

                <SkeletonPlaceholder>
                    <View style={styles.placeholderContainer}>
                        <View style={{ width: width/3.42, height: 105, borderTopLeftRadius:8, borderTopRightRadius:8}} />
                        <View style={{ marginLeft: 2 }}>
                        <View style={{ width: width/3.75, height: 20,  marginTop: 8, borderRadius:3 }} />
                        <View style={{display:'flex', flexDirection:"row", justifyContent:'space-between', marginTop:3}}>
                            <View
                                style={{ marginTop: 6, width: 35, height: 8, borderRadius:3 }}
                            />
                            <View
                                style={{ marginTop: 6, width: 30, height: 8, borderRadius:3 }}
                            />
                        </View>
                        
                        </View>
                    </View>
                </SkeletonPlaceholder>
                <SkeletonPlaceholder>
                    <View style={styles.placeholderContainer}>
                        <View style={{ width: width/3.42, height: 105, borderTopLeftRadius:8, borderTopRightRadius:8}} />
                        <View style={{ marginLeft: 2 }}>
                        <View style={{ width: width/3.75, height: 20,  marginTop: 8, borderRadius:3 }} />
                        <View style={{display:'flex', flexDirection:"row", justifyContent:'space-between', marginTop:3}}>
                            <View
                                style={{ marginTop: 6, width: 35, height: 8, borderRadius:3 }}
                            />
                            <View
                                style={{ marginTop: 6, width: 30, height: 8, borderRadius:3 }}
                            />
                        </View>
                        
                        </View>
                    </View>
                </SkeletonPlaceholder>
                <SkeletonPlaceholder>
                    <View style={styles.placeholderContainer}>
                        <View style={{ width: width/3.42, height: 105, borderTopLeftRadius:8, borderTopRightRadius:8}} />
                        <View style={{ marginLeft: 2 }}>
                        <View style={{ width: width/3.75, height: 20,  marginTop: 8, borderRadius:3 }} />
                        <View style={{display:'flex', flexDirection:"row", justifyContent:'space-between', marginTop:3}}>
                            <View
                                style={{ marginTop: 6, width: 35, height: 8, borderRadius:3 }}
                            />
                            <View
                                style={{ marginTop: 6, width: 30, height: 8, borderRadius:3 }}
                            />
                        </View>
                        
                        </View>
                    </View>
                </SkeletonPlaceholder>
                <SkeletonPlaceholder>
                    <View style={styles.placeholderContainer}>
                        <View style={{ width: width/3.42, height: 105, borderTopLeftRadius:8, borderTopRightRadius:8}} />
                        <View style={{ marginLeft: 2 }}>
                        <View style={{ width: width/3.75, height: 20,  marginTop: 8, borderRadius:3 }} />
                        <View style={{display:'flex', flexDirection:"row", justifyContent:'space-between', marginTop:3}}>
                            <View
                                style={{ marginTop: 6, width: 35, height: 8, borderRadius:3 }}
                            />
                            <View
                                style={{ marginTop: 6, width: 30, height: 8, borderRadius:3 }}
                            />
                        </View>
                        
                        </View>
                    </View>
                </SkeletonPlaceholder>
                <SkeletonPlaceholder>
                    <View style={styles.placeholderContainer}>
                        <View style={{ width: width/3.42, height: 105, borderTopLeftRadius:8, borderTopRightRadius:8}} />
                        <View style={{ marginLeft: 2 }}>
                        <View style={{ width: width/3.75, height: 20,  marginTop: 8, borderRadius:3 }} />
                        <View style={{display:'flex', flexDirection:"row", justifyContent:'space-between', marginTop:3}}>
                            <View
                                style={{ marginTop: 6, width: 35, height: 8, borderRadius:3 }}
                            />
                            <View
                                style={{ marginTop: 6, width: 30, height: 8, borderRadius:3 }}
                            />
                        </View>
                        
                        </View>
                    </View>
                </SkeletonPlaceholder>
            

            
            </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        flexDirection:'column',
        display: 'flex',
        borderWidth:2,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        borderColor:'white',
        padding:15,

    },
    stories:{
        alignItems: "center",
        flexDirection:'row',
        flexWrap:'wrap',
        display: 'flex',
        width: width-33,
        justifyContent:'space-between',

    },
    placeholderContainer: {
        borderWidth: 1.5,
        borderRadius: 10,
        height: 160,
        width: width/3.35,
        display: 'flex',
        alignItems: "center",
        flexDirection:'column',
        marginBottom:3,

    }, 
    header:{
        fontSize:16,
        color: '#22201E',
        marginBottom:10,
        fontFamily:'Montserrat-Bold'
    },
    story: {
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: "white",
        height: 160,
        width: width/3.35,
        display: 'flex',
        alignItems: "center",
        flexDirection:'column',
        marginBottom:3,
        
    },

    infoContainer:{
        width: width /3.38,
        height:50,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        paddingHorizontal:5
        
    },

    titleContainer:{
        height:28,
        justifyContent:'center',
    },

    title: {
        fontSize: 11,
        color:'#22201E',
        fontFamily:'Montserrat-SemiBold'
    },
    info: {
        fontSize: 8,
        color: '#6E747C',
        fontFamily:'Montserrat-Medium'
        
    },
    subtitle: {
        width:'100%',
        flexDirection: "row",
        display:'flex',
        justifyContent:'space-between',
    },
    subInfo:{
        display:'flex',
        flexDirection:'row', 
        justifyContent:'center',
        alignItems:'center'
    },
    
    img:{
        width:width/3.45,
        height:105,
        borderTopLeftRadius:8,
        borderTopRightRadius: 8

    },



})