import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native"
import { useNavigation } from '@react-navigation/native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import IconUpdate from '../../icon-group/IconUpdate';

let { width } = Dimensions.get("window")

interface Props {
    routes: any;
    navigation?: any

}

export const LoadingRecommendMyList: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <Text style={styles.header}>Recommend For You</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.story}>
                
                <Image style={styles.img} source={require("../../icon-group/imgTest.jpg")}></Image>
                <View style={styles.infoContainer}>
                    <View style= {styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>Name of story sdhfghsdf shdfgjhsgf shjdgfjsdhfsdhgfjshdfgj</Text>
                    </View>
                    <View style={styles.subtitle}>
                        <Text style={styles.chapter}>Chapter: 1234</Text>
                        <View style ={styles.subInfo}>
                            <IconUpdate/>
                            <Text style={styles.time}>2h ago</Text>
                        </View>
                        
                    </View>

                </View>
                
               
            </View>

            <View style={styles.story}>
                
                <Image style={styles.img} source={require("../../icon-group/imgTest.jpg")}></Image>
                <View style={styles.infoContainer}>
                    <View style= {styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>Name of story</Text>
                    </View>
                    <View style={styles.subtitle}>
                        <Text style={styles.chapter}>Chapter: 1234</Text>
                        <View style ={styles.subInfo}>
                            <IconUpdate/>
                            <Text style={styles.time}>2h ago</Text>
                        </View>
                        
                    </View>

                </View>
               
            </View>

                <SkeletonPlaceholder>
                    <View style={styles.placeholderContainer}>
                        <View style={{ width: width/3.25, height: 120, borderTopRightRadius:8, borderTopLeftRadius:8}} />
                        <View style={{ marginLeft:4 }}>
                        <View style={{ width: width/3.8, height: 25,  marginTop: 6,borderRadius:3 }} />
                        <View
                            style={{ marginTop: 5, width:width/6, height: 8,borderRadius:3 }}
                        />
                        </View>
                    </View>
                </SkeletonPlaceholder>

                <SkeletonPlaceholder>
                    <View style={styles.placeholderContainer}>
                        <View style={{ width: width/3.25, height: 120, borderTopRightRadius:8, borderTopLeftRadius:8}} />
                        <View style={{ marginLeft:4 }}>
                        <View style={{ width: width/3.8, height: 25,  marginTop: 6,borderRadius:3 }} />
                        <View
                            style={{ marginTop: 5, width:width/6, height: 8,borderRadius:3 }}
                        />
                        </View>
                    </View>
                </SkeletonPlaceholder>

                <SkeletonPlaceholder>
                    <View style={styles.placeholderContainer}>
                        <View style={{ width: width/3.25, height: 120, borderTopRightRadius:8, borderTopLeftRadius:8}} />
                        <View style={{ marginLeft:4 }}>
                        <View style={{ width: width/3.8, height: 25,  marginTop: 6,borderRadius:3 }} />
                        <View
                            style={{ marginTop: 5, width:width/6, height: 8,borderRadius:3 }}
                        />
                        </View>
                    </View>
                </SkeletonPlaceholder>

                <SkeletonPlaceholder>
                    <View style={styles.placeholderContainer}>
                        <View style={{ width: width/3.25, height: 120, borderTopRightRadius:8, borderTopLeftRadius:8}} />
                        <View style={{ marginLeft:4 }}>
                        <View style={{ width: width/3.8, height: 25,  marginTop: 6,borderRadius:3 }} />
                        <View
                            style={{ marginTop: 5, width:width/6, height: 8,borderRadius:3 }}
                        />
                        </View>
                    </View>
                </SkeletonPlaceholder>

                <SkeletonPlaceholder>
                    <View style={styles.placeholderContainer}>
                        <View style={{ width: width/3.25, height: 120, borderTopRightRadius:8, borderTopLeftRadius:8}} />
                        <View style={{ marginLeft:4 }}>
                        <View style={{ width: width/3.8, height: 25,  marginTop: 6,borderRadius:3 }} />
                        <View
                            style={{ marginTop: 5, width:width/6, height: 8,borderRadius:3 }}
                        />
                        </View>
                    </View>
                </SkeletonPlaceholder>
            </ScrollView>
                        
            
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
        marginTop:25

    },
    header:{
        fontSize:16,
        fontFamily:'Montserrat-Bold',
        color: '#22201E',
        marginBottom:10
    },
    story: {
        height: 175,
        width: width /3.2,
        display: 'flex',
        borderWidth: 1.5,
        borderRadius: 10,
        marginRight:5,
        borderColor: "white",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        flexDirection:'column',
    },
    img:{
        width:width/3.3,
        height:120,
        borderTopLeftRadius:8,
        borderTopRightRadius: 8
    },

    infoContainer:{
        width: width /3.2,
        height:50,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        paddingHorizontal:5,
    },

    titleContainer:{
        height:28,
        justifyContent:'center',
    },

    title: {
        fontSize: 11,
        fontFamily:'Montserrat-SemiBold',
        color:'#22201E',
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
    chapter: {

        fontSize: 8.5,
        fontFamily:'Montserrat-Medium',
        color: '#6E747C'

    },
    time: {
        fontSize: 8,
        fontFamily:'Montserrat-MediumItalic',
        color: '#A1A1A1'

    },

    placeholderContainer: {
        borderWidth: 1.5,
        borderRadius: 10,
        marginRight: 5,
        height: 175,
        width: width /3.2,
        display:'flex',
        flexDirection: "column", 
        
    },


})