//import liraries
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator, Alert, ActionSheetIOS} from 'react-native';
import firebase from 'firebase';
import styles from './Styles';

// create a component
class LoginButton extends Component {
    constructor(props){
        super(props);
        this.state = ({
            error:'',
            isLoading:false
        })
    };
    
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDmFqk8nrTgvwu4l-CwE7ynuXfEsGrJ0zM',
            authDomain: 'moneytracker-192416.firebaseapp.com',
            databaseURL: 'https://moneytracker-192416.firebaseio.com',
            projectId: 'moneytracker-192416',
            storageBucket: 'moneytracker-192416.appspot.com',
            messagingSenderId: '346168614456'
        });
    };

    handleLogin = () => {
        this.setState({error:'',isLoading:true});
        
        firebase.auth().signInWithEmailAndPassword(this.props.email, this.props.password)
            .then((user) => {
                this.setState({error:'', isLoading:false});
                if(user.uid != null){
                    Alert.alert('Login Successful');
                }
            })
<<<<<<< HEAD
            .catch((error) => {
                this.setState({error:'', isLoading:false});
                firebase.auth().sendPasswordResetEmail(this.props.email);
            });
=======
            .catch((user) => firebase.auth().createUserWithEmailAndPassword(this.props.email, this.props.password)
                .catch((error) => {
                    this.setState({error:'Authentication Failed', isLoading: false});
                    Alert.alert(error.message);
                })
            );
            // .catch((error) => {
            //     this.setState({error:'', isLoading:false});
            //     firebase.auth().sendPasswordResetEmail(this.props.email);
            // });
>>>>>>> 56149bca05a1cc373b6aa7a678137a632d22b82e
            // .catch((error) => {
            //     this.setState({error:'Authentication Failed', isLoading: false});
            //     Alert.alert(error.message);
            // });
            // .catch((user) => firebase.auth().createUserWithEmailAndPassword(email, password)
            //     .catch((error) => {
            //         this.setState({error:'Authentication Failed', isLoading: false});
            //         console.log(error);
            //     })
            // );
    };

    render() {
        const Loader = <View><ActivityIndicator ></ActivityIndicator></View>;
        const Button = <Text style={styles.buttonText}>LOGIN</Text>;
            return (
                <TouchableOpacity style={styles.buttonContainer} onPress={this.handleLogin.bind(this)}>
                    {this.state.isLoading ? Loader : Button}
                </TouchableOpacity>
            );
        };
}


//make this component available to the app
export default LoginButton;
