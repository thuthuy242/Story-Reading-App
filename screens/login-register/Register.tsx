import * as React from 'react';
import { StyleSheet, ImageBackground, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import { Text, View } from '../../components/base_group/Themed';
import IconViewPassword from "../../components/icon-group/IconViewPassword";
import IconCheck from "../../components/icon-group/IconCheckRemember";
import AddImg from "../../components/icon-group/AddImg";
import IconGG from "../../components/icon-group/IconGG";
import IconFB from "../../components/icon-group/IconFB";

const background = require("../../assets/images/background.png");
let { width, height } = Dimensions.get("window")

function Register(props) {
    

    const sheetRef: { current: any } = React.useRef(null);
    return (
        <View style={styles.container}>
            
            <ImageBackground blurRadius={0} source={background} resizeMode="cover" style={styles.backgroundImage}>
                <View style={styles.wrapper}>
                  

                  <View style={styles.bodyContainer}>
                    <TouchableOpacity style={styles.addImg} activeOpacity={0.5}>
                      <AddImg/>
                    </TouchableOpacity>

                    <TextInput
                        style={styles.input}
                        placeholder="Firstname"
                        placeholderTextColor="#B5B5B5" />
                    <TextInput
                        style={styles.input}
                        placeholder="Lastname"
                        placeholderTextColor="#B5B5B5" />

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#B5B5B5" />
                    <View style={styles.pwInputContainer}>
                      <TextInput
                        style={styles.pwInput}
                        placeholder="Password"
                        placeholderTextColor="#B5B5B5"
                        secureTextEntry={true} />
                      <IconViewPassword/>
                    </View>
                    <View style={styles.pwInputContainer}>
                      <TextInput
                        style={styles.pwInput}
                        placeholder="Repeat Password"
                        placeholderTextColor="#B5B5B5"
                        secureTextEntry={true} />
                      <IconViewPassword/>
                    </View>

                    <View style={styles.terms}>
                        <IconCheck/>
                        <Text style={styles.extraText}>I agree with</Text>
                        <Text style={styles.termText}>Term & Conditions</Text>

                      </View>

                    <TouchableOpacity style={styles.btnRes} activeOpacity={0.5}>
                      <Text style={styles.textRes}>Sign up</Text>
                    </TouchableOpacity>

                    <View style={styles.part}>
                      <View style={styles.line}></View>
                      <Text style={styles.partText}>Or sign up with</Text>
                      <View style={styles.line}></View>
                    </View>

                    <TouchableOpacity style={styles.siginGG} activeOpacity={0.5}>
                      <IconGG/>
                      <Text style={styles.textGG}>Sign up with Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.siginFB} activeOpacity={0.5}>
                      <IconFB/>
                      <Text style={styles.textFB}>Sign up with Facebook</Text>
                    </TouchableOpacity>

                    <View style={styles.signIn}>
                      <Text style={styles.qs}>Already have an account?</Text>
                      <Text style={styles.textSignIn}>Sign in</Text>
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
    },
    wrapper: {
        backgroundColor: "rgba(255, 255, 255, 0)",
    },
    container: {
        width: width,
        height: height,
        backgroundColor: "rgba(255, 255, 255, 0)",
    },

    header:{
      width: width,
      height:200,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
    bodyContainer:{
      backgroundColor: "rgba(255, 255, 255, 0)",
      paddingHorizontal:38,
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      
    },
    addImg:{
      marginTop:35,
      display:'flex',
      alignItems:'center',
      marginBottom:5

    },

    input: {
      backgroundColor:"rgba(255, 255, 255, 0.5)",
      height: 45,
      marginTop:20,
      paddingHorizontal:10,
      borderRadius:10,
      borderWidth: 1.5,
      borderColor: "white",
      color:'#22201E',
      
    },
    pwInputContainer:{
      backgroundColor:"rgba(255, 255, 255, 0.5)",
      height: 45,
      marginTop:20,
      paddingHorizontal:10,
      borderRadius:10,
      borderWidth: 1.5,
      borderColor: "white",
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    pwInput:{
      color:'#22201E',
      width:width-120,
    },
    btnRes:{
      marginTop:25,
      height:45,
      width:width/2.5,
      backgroundColor:"rgba(43, 165, 255, 0.8)",
      borderRadius:10,
      borderWidth: 1.5,
      borderColor: "white",
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center'

    },
    textRes:{
      fontFamily:"Montserrat-Bold",
      color:'white',
      fontSize:16

    },
    extraInfo:{
      marginTop:20,
      backgroundColor:"rgba(255, 255, 255, 0)",
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    terms:{
      marginTop:20,
      backgroundColor:"rgba(255, 255, 255, 0)",
      display:'flex',
      flexDirection:'row',
      alignItems:'center'
    },
    extraText:{
      fontFamily:"Montserrat-Medium",
      fontSize:13,
      color:"#6E747C",
      marginStart:3
    },
    termText:{
      fontFamily:"Montserrat-Medium",
      fontSize:13,
      color:"#6E747C",
      textDecorationLine:'underline',
      marginStart:3
    },
    part:{
      marginTop:25,
      backgroundColor:"rgba(255, 255, 255, 0)",
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    line:{
      height:1,
      backgroundColor:"#9093A2",
      width:width/4.8,
    },
    partText:{
      fontFamily:"Montserrat-Regular",
      color:'#6E747C',
      fontSize:14
    },
    siginGG:{
      backgroundColor:"rgba(255, 255, 255, 0.8)",
      height: 45,
      marginTop:25,
      paddingHorizontal:10,
      borderRadius:10,
      borderWidth: 1.5,
      borderColor: "white",
      display:'flex',
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'flex-start'

    },
    textGG:{
      fontFamily:"Montserrat-SemiBold",
      color:'#22201E',
      fontSize:14,
      marginStart:50
    },
    siginFB:{
      backgroundColor:"rgba(60, 90, 154, 0.8)",
      height: 45,
      marginTop:20,
      paddingHorizontal:10,
      borderRadius:10,
      borderWidth: 1.5,
      borderColor: "white",
      display:'flex',
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'flex-start'

    },
    textFB:{
      fontFamily:"Montserrat-SemiBold",
      color:'white',
      fontSize:14,
      marginStart:40
    },
    signIn:{
      marginTop:25,
      backgroundColor:"rgba(255, 255, 255, 0)",
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'

    },
    textSignIn:{
      fontFamily:'Montserrat-SemiBold',
      fontSize:14,
      color:'#6E747C',
      textDecorationLine:'underline'


    },
    qs:{
      fontFamily:'Montserrat-SemiBold',
      fontSize:14,
      color:'#6E747C',
      marginRight:5

    },


});
export default Register;