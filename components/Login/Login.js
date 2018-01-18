//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import FBSDK, {LoginManager} from 'react-native-fbsdk';

// create a component
class Login extends Component {
    static navigationOptions = {
        title: 'Welcome',
        header: null
      };

    fbAuth(){
        LoginManager.logInWithReadPermissions(['public_profile']).then(
            function(result) {
              if (result.isCancelled) {
                alert('Login cancelled' );
              } else {
                alert('Login success with permissions: '
                  +result.grantedPermissions.toString());
              }
            },
            function(error) {
              alert('Login fail with error: ' + error);
            }
          );
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
                                onPress={this.fbAuth}
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

//make this component available to the app
export default Login;
