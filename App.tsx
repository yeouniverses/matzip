import React from 'react';
import {StyleSheet, View} from 'react-native';
import AuthNavigation from './src/navigations/AuthNavigation';
import DrawerNavigation from './src/navigations/DrawerNavigateion';

function App() {
  // return <AuthNavigation></AuthNavigation>;
  return <DrawerNavigation />;
}

const styles = StyleSheet.create({});

export default App;
