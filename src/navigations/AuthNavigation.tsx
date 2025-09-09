import {createStackNavigator} from '@react-navigation/stack';
import AuthHomeScreen from '../screens/auth/AuthHomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import {createStaticNavigation} from '@react-navigation/native';

const AuthStack = createStackNavigator({
  screens: {
    AuthHome: AuthHomeScreen,
    Login: LoginScreen,
    signup: SignupScreen,
  },
});

const AuthNavigation = createStaticNavigation(AuthStack);

export default AuthNavigation;
