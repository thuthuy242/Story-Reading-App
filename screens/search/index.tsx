import * as React from 'react';
import { StyleSheet, ImageBackground, Dimensions, TextInput } from 'react-native';
import { Text, View } from '../../components/base_group/Themed';
import IconFrame from '../../components/icon-group/IconFrame';
import IconHeart from '../../components/icon-group/IconHeartSearch';
import IconX from '../../components/icon-group/IconX';
import IconTime from '../../components/icon-group/IconTime';

const background = require("../../assets/images/background.png");
let { width } = Dimensions.get("window");
export default function Search() {

    return (

        <View style={styles.container}>
            <ImageBackground blurRadius={0} source={background} resizeMode="cover" style={styles.backgroundImage}>
                <View style={styles.viewContainer}>
                    <Text style={styles.title}>Searching</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="What do you want to read?"
                        placeholderTextColor="#B5B5B5" />
                    
                    <View style={styles.recommendContainer}>
                        <View style={styles.rec1}>
                            <IconFrame/>
                            <Text style={styles.recText}>Truyện HOT</Text>
                        </View>
                        <View style={styles.rec2}>
                            <IconHeart/>
                            <Text style={styles.recText}>Có thể bạn sẽ thích</Text>
                        </View>
                    </View>

                    <View style={styles.subContainer}>
                        <Text style={styles.subTitle}>Hot searches</Text>
                        <View style={styles.hotSearchComponents}>
                            <View  style={styles.hotSearchText}>
                                <Text style={styles.text} >Abcd efgh jksdfhkjsd</Text>
                            </View>
                            <View  style={styles.hotSearchText}>
                                <Text style={styles.text}>Abcd efgh</Text>
                            </View>
                            <View  style={styles.hotSearchText}>
                                <Text style={styles.text}>Abcd efgh</Text>
                            </View>
                            <View  style={styles.hotSearchText}>
                                <Text style={styles.text}>Abcd efgh </Text>
                            </View>
                            
                        </View>
                    </View>

                    <View style={styles.subContainer}>
                        <View style={styles.historyHeader}>
                            <Text style={styles.subTitle}>History</Text>
                            <Text style={styles.clear}>Clear</Text>
                        </View>
                        <View style={styles.historyComponents}>
                            <View style ={styles.history}>
                                <View style={styles.iconText}>
                                    <IconTime/>
                                    <Text style={styles.historyText}>Abc</Text>
                                </View>
                                <IconX/>
                            </View>

                            <View style ={styles.history}>
                                <View style={styles.iconText}>
                                    <IconTime/>
                                    <Text style={styles.historyText}>Abc def sdffffffffffff</Text>
                                </View>
                                <IconX/>
                            </View>

                            <View style ={styles.history}>
                                <View style={styles.iconText}>
                                    <IconTime/>
                                    <Text style={styles.historyText}>Abc def</Text>
                                </View>
                                <IconX/>
                            </View>

                            <View style ={styles.history}>
                                <View style={styles.iconText}>
                                    <IconTime/>
                                    <Text style={styles.historyText}>Abc def</Text>
                                </View>
                                <IconX/>
                            </View>

                            <View style ={styles.history}>
                                <View style={styles.iconText}>
                                    <IconTime/>
                                    <Text style={styles.historyText}>Abc def</Text>
                                </View>
                                <IconX/>
                            </View>
                            
                            
                        </View>
                    </View>
                </View>
                    

            </ImageBackground>
            
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        //zIndex: -1,
        width: width,
        //resizeMode: 'cover'
    },
    container: {
        // position: "relative",
        // zIndex: 0,
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        width:width,
        
        
    },
    viewContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.0)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop:45,
        width:width,

    },
    title: {
        color:'#22201E',
        fontSize: 18,
        fontFamily:'Montserrat-Bold',
        marginBottom:10,
        textTransform:'uppercase'
        
    },
    input: {
        backgroundColor:"rgba(255, 255, 255, 0.5)",
        width: width/1.12,
        height: 45,
        paddingHorizontal:20,
        borderRadius:30,
        borderWidth: 1.5,
        borderColor: "white",
        color:'#22201E',
        

      },

      recommendContainer:{
        marginTop:15,
        backgroundColor:"rgba(255, 255, 255, 0.0)",
        width: width/1.12,
        height:40,
        flexDirection:'row',
        display:'flex',
        justifyContent:'space-between',

      },
      rec1:{
        display:'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        width: width/(1.15*2),
        backgroundColor:"rgba(255, 132, 94, 0.5)",
        borderRadius: 15,
        borderWidth:1,
        borderColor: "rgba(255, 255, 255, 0.8)"

      },
      rec2:{
        display:'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        width: width/(1.15*2),
        backgroundColor:"rgba(43, 165, 255, 0.5)",
        borderRadius: 15,
        borderWidth:1,
        borderColor: "rgba(255, 255, 255, 0.8)"

      },
      recText:{
          marginLeft:3,
          color: '#22201E',
          fontFamily:'Montserrat-Bold',
          fontSize:12
      },

      subContainer: {
        width: width/1.12,
        marginTop:20,
        backgroundColor:"rgba(255, 255, 255, 0.0)",
      },
      hotSearchComponents:{
        display:'flex',
        flexDirection:'row',
        marginTop:15,
        flexWrap:'wrap',
        justifyContent:'flex-start',
        backgroundColor:"rgba(255, 255, 255, 0.0)",
        
      },
      subTitle:{
        color:'#22201E',
        fontSize: 14,
        fontFamily:'Montserrat-Bold',
      },

      hotSearchText:{
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "white",
          backgroundColor:"rgba(255, 255, 255, 0.4)",
          padding:7,
          marginRight:5,
          marginBottom:5

      },
      text:{
        color: '#6E747C',
        fontSize: 12,
        fontFamily:'Montserrat-Regular',

      },
      historyHeader:{
        backgroundColor:"rgba(255, 255, 255, 0.0)",
        flexDirection:'row',
        justifyContent:'space-between'

      },
      clear:{
          color:'#6E747C',
          fontSize: 12,
          fontFamily:'Montserrat-Medium',
      },
      historyComponents:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:"rgba(255, 255, 255, 0.0)",

      },
      history:{
          display:'flex',
          marginTop:15,
          flexDirection: 'row',
          backgroundColor:"rgba(255, 255, 255, 0.0)",
          justifyContent:'space-between',


      },
      iconText:{
        backgroundColor:"rgba(255, 255, 255, 0.0)",
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'

      },
      historyText:{
          color:'#22201E',
          fontSize:12,
          marginLeft:5,
          fontFamily:'Montserrat-Medium',
          
      }





});
