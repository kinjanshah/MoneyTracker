//import liraries
import React, { Component } from 'react';
import { Alert } from 'react-native';
import {GoogleSignin,  GoogleSigninButton} from 'react-native-google-signin';
import Icon from 'react-native-vector-icons/FontAwesome';

// create a component
class GoogleLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: null
        };
      };

    componentDidMount() {
        this._setupGoogleSignin();
      };
    
    async _setupGoogleSignin() {
        try {
          await GoogleSignin.hasPlayServices({ autoResolve: true });
          await GoogleSignin.configure({
            iosClientId: '346168614456-omk8t5kpkrbvhhi8db7i0c2ahulp8560.apps.googleusercontent.com',
            offlineAccess: false
          });
    
          const user = await GoogleSignin.currentUserAsync();
          //console.log(user);
          this.setState({user});
        }
        catch(err) {
          console.log("Google Signin error", err.code, err.message);
        }
    }
    
    _signIn() {
        GoogleSignin.signIn()
        .then((user) => {
          //console.log(user);
          this.setState({user: user});
        })
        .catch((err) => {
          console.log('WRONG SIGNIN', err);
        })
        .done();
      }
    
    _signOut() {
        GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
            this.setState({user: null});
        })
        .done();
    }
    
    render() {
        if (!this.state.user) {
            return (
                <Icon.Button
                    name="google"
                    backgroundColor="#DD4B39"
                    {...iconStyles}
                    onPress={this._signIn.bind(this)}>
                    Google
                </Icon.Button>
            );
          }
      
        if (this.state.user) {
            return (
                <Icon.Button
                    name="google"
                    backgroundColor="#DD4B39"
                    {...iconStyles}
                    onPress={() => {this._signOut(); }}>
                    Logout
                </Icon.Button>
            );
          }
    }
}

const iconStyles = {
    borderRadius: 10,
    iconStyle: { paddingVertical: 5},
  };

export default GoogleLogin;
