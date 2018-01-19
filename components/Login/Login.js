//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './Styles';
import FacebookLogin from '../FacebookLogin/FacebookLogin';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import LoginButton from './LoginButton';

// create a component
class Login extends Component {
    static navigationOptions = {
        title: 'Welcome',
        header: null
      };

    state = {
        email:'',
        password:''
    }

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
                            onChangeText={email=>this.setState({email})}
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
                            onChangeText={password=>{this.setState({password})}}
                        />
        
                        <View style={styles.forgotPasswordContainer} >
                            <Text style={styles.forgotPassword} onPress={() => navigate('ForgotPassword')}>
                                Forgot Password?
                            </Text>
                        </View>
        
                        <LoginButton email={this.state.email} password={this.state.password} />
        
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate('Signup')}>
                            <Text style={styles.buttonText}>SIGNUP</Text>
                        </TouchableOpacity>
                        
                        <View style={styles.buttons}>
                            <View style={styles.buttonFB}>
                                <FacebookLogin ></FacebookLogin>
                            </View>
                            <View style={styles.buttonGoogle}>
                                <GoogleLogin />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

//make this component available to the app
export default Login;
