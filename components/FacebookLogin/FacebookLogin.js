//import liraries
import React, { Component } from 'react';
import { Alert, TouchableOpacity, Text } from 'react-native';
import FBSDK, {LoginButton, LoginManager, logout, AccessToken, GraphRequest, GraphRequestManager} from 'react-native-fbsdk';
import Icon from 'react-native-vector-icons/FontAwesome';

// create a component
class FacebookLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: null
        };
      };

    componentDidMount() {
        this._setupFacebookSignin();
      };
    
    async _setupFacebookSignin() {
        try {
            AccessToken.getCurrentAccessToken().then(
                (user) => {
                    if(user != null){
                        this.setState({user})
                    }
                } //Refresh it every time
            );
        }
        catch(err) {
          console.log("Google Signin error", err.code, err.message);
        }
    }
    
    _signIn = () => {
        LoginManager.logInWithReadPermissions(['public_profile','email']).then((result) => {
            if (result.isCancelled) {
              console.log("Login Cancelled");
            } else {
              console.log("Login Success permission granted:" + result.grantedPermissions);
              AccessToken.getCurrentAccessToken()
              .then((user) => {
                  //Alert.alert("Facebook accessToken:\n" + user.accessToken + "\n\naccessTokenSource: " + user.accessTokenSource + "\n\nuserID: " + user.userID)
                  return user
              })
              .then((user) => {
                  const responseInfoCallback = (error, result) => {
                      if (error) {
                          Alert.alert('Error fetching data: ' + error.toString());
                      } else {
                        this.setState({user});
                        //Alert.alert('id: ' + result.id + '\n\nname: ' + result.name + '\n\nfirst_name: ' + result.first_name + '\n\nlast_name: ' + result.last_name + '\n\nemail: ' + result.email);
                      }
                  }
  
                  const infoRequest = new GraphRequest('/me', {
                      accessToken: user.accessToken,
                      parameters: {
                          fields: {
                              string: 'email,name,first_name,last_name,picture.type(large)'
                          }
                      }
                  }, responseInfoCallback.bind(this));
  
                  // Start the graph request.
                  new GraphRequestManager()
                      .addRequest(infoRequest)
                      .start()
              })
            }
          }, function(error) {
             console.log("some error occurred!!");
          })
      }
    
    _signOut() {
        this.setState({user: null});
        LoginManager.logOut();
    }

    render() {
        if (!this.state.user) {
            return (
                <Icon.Button
                    name="facebook"
                    backgroundColor="#3b5998"
                    {...iconStyles}
                    onPress={this._signIn.bind(this)}>
                    Facebook
                </Icon.Button>
            );
          }
      
        if (this.state.user) {
            return (
                <Icon.Button
                    name="facebook"
                    backgroundColor="#3b5998"
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
  
export default FacebookLogin;
