//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// create a component
class Login extends Component {
    static navigationOptions = {
        title: 'Welcome',
        header: null
      };

    
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <Image source={require('../../img/logo.png')} style={styles.logo}></Image>
                    <Text style={styles.logoTitle}>Login</Text>
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
        
                        <TextInput 
                            placeholder="Password"
                            placeholderTextColor='rgba(255,255,255,0.7)'
                            secureTextEntry
                            style={styles.input}
                            returnKeyType="go"
                            autoCapitalize="none"
                            autoCorrect={false}
                            ref={(input)=>this.inputPassword = input}
                        />
        
                        <View style={styles.forgotPasswordContainer} >
                            <Text style={styles.forgotPassword} onPress={() => navigate('ForgotPassword')}>
                                Forgot Password?
                            </Text>
                        </View>
        
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
        
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate('Signup')}>
                            <Text style={styles.buttonText}>SIGNUP</Text>
                        </TouchableOpacity>
                        
                        <View style={styles.buttons}>
                            <Icon.Button
                                name="facebook"
                                backgroundColor="#3b5998"
                                {...iconStyles}
                            >
                                Facebook
                            </Icon.Button>
                            <Icon.Button
                                name="google"
                                backgroundColor="#DD4B39"
                                {...iconStyles}
                            >
                                Google
                            </Icon.Button>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const iconStyles = {
    borderRadius: 10,
    iconStyle: { paddingVertical: 5 },
  };

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
    forgotPasswordContainer:{
        alignItems:'flex-end'
    },
    forgotPassword:{
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
export default Login;
