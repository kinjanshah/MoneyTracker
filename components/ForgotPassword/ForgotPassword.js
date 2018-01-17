//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// create a component
class ForgotPassword extends Component {
    static navigationOptions = {
        title: 'Forgot Password',
        header: null
      };
    render() {
        const { goBack } = this.props.navigation;

        return (
            <View style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <Image source={require('../../img/logo.png')} style={styles.logo}></Image>
                    <Text style={styles.logoTitle}>Forgot Password</Text>
                </View>
                <View>
                    <View style={styles.container}>
                        <TextInput 
                            placeholder="Email Address"
                            placeholderTextColor='rgba(255,255,255,0.7)'
                            style={styles.input}
                            returnKeyType="next"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onSubmitEditing={()=>this.inputPassword.focus()}
                            keyboardType="email-address"
                        />
        
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>RESET PASSWORD</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonContainer} onPress={() =>goBack()}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor:'#3498db',
        flex:1
    },
    logoContainer:{
        alignItems:'center',
        justifyContent:'center',
        flexGrow:1
    },
    logo:{
        height:100,
        width: 100
    },
    logoTitle:{
        textAlign:'center',
        color:'#FFF',
        marginTop:10,
        fontSize:30
    },
    container: {
        padding:20
    },
    input:{
        height: 40,
        backgroundColor:'rgba(255,255,255,0.2)',
        color:'#FFF',
        marginBottom:20,
        paddingLeft:15,
        borderRadius:10
    },
    buttonContainer:{
        backgroundColor:'#2980b9',
        paddingVertical:15,
        marginBottom:15,
        borderRadius:10
    },
    buttonText:{
        color:'#FFF',
        textAlign:'center',
        fontWeight:'bold'
    },
    LoginContainer:{
        alignItems:'flex-end'
    },
    Login:{
        color:'blue',
        marginBottom:10
    },
    buttons: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 30
      },
});

//make this component available to the app
export default ForgotPassword;
