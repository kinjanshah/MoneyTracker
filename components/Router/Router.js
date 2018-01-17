import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import Login from '../Login/Login';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import Signup from '../Signup/Signup';
import {StackNavigator} from 'react-navigation';

const Router = StackNavigator({
  Login: { screen: Login },
  ForgotPassword: { screen: ForgotPassword },
  Signup:{screen: Signup}
});

export default Router;