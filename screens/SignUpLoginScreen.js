import React,{compoment} from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,TextInput,Alert,Mordal,KeyboardAvoidingView} from 'react-native'

export default class SignUpLoginScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            emailId:'',
            password:''
        }
    }

    userLogin = (emailId,password) =>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then(()=>{
            return Alert.alert("UserLogin is successful")
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
        })
    }

    userSignUp = (emailId,password) =>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then((response)=>{
            return Alert.alert("User Successfully SignedUp")
        })
        .catch(function(error){
            var errorCode = error.code
            var errorMessage = error.code
            var errorMessage = error.message
            return Alert.alert(errorMessage)
        }
        )
    }

    
    
    
    render(){
        return(
            <View>
                <View>
                    <TextInput
                    style ={styles.loginBox}
                    placeholder = 'emailId'
                    placeholderTextColor= 'black'
                    KeyboardType = 'email-address'
                    onChangeText={
                        (text)=>{
                            this.setState({
                                emailId:text
                            })
                        }
                    }
                        />

                <TextInput
                    style ={styles.loginBox}
                    placeholder = 'password'
                    placeholderTextColor= 'black'
                    onChangeText={
                        (text)=>{
                            this.setState({
                                password:text
                            })
                        }
                    }
                />

                <TouchableOpacity
                style = {styles.button}
                onPress ={()=>{
                    this.userLogin(this.state.emailId,this.state.password)
                }
            }>
                <Text style = {styles.buttonText}>login</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style = {style.button}
            onPress = {()=>{
                this.userSignUp(this.state.emailId,this.state.password)
            }
        }>
            <Text style = {styles.buttonText}>sign up</Text>
        </TouchableOpacity>


            </View>
        </View>
    )
}
}

const styles = StyleSheet.create({
    loginBox:{
        width:300,
        length:40,
        borderBottomWidth:1.5,
        borderColor: 'green',
        fontSize:20,
        margin:10,
        paddingLeft:10
    },

    button:{
        width:300,
        length:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor: 'blue',
        shadowColor:'brown',
        shadowOffset:{
            width:0,
            height:8,
        },
        shadowOpacity:0.30,
        textShadowRadius:10.32,
        elevation:16
    },
    buttonText:{
        color:'green',
        fontWeight:'200',
        fontSize:20
    },

})