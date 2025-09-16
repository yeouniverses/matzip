import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';

function AuthHomeScreen() {
  /* 네비게이션은 스택처럼 쌓인다 */
  const navigation = useNavigation();

  useEffect(() => {
    console.log('AuthHome!!');
  }, []);

  return (
    <SafeAreaView>
      <Text onPress={() => navigation.navigate('Login')}>로그인으로 이동</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default AuthHomeScreen;
