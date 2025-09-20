import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {AuthStackParamList} from '../../types/navigation';

type Navigation = StackNavigationProp<AuthStackParamList>;

function AuthHomeScreen() {
  /* 네비게이션은 스택처럼 쌓인다 */
  const navigation = useNavigation<Navigation>();

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

// <타입 넣기>
// Tabs 홈 화면이나 드로어 버튼 같이 내비게이션에서 타입 추론이 잘 안되는 문제
// 리엑트 네비게이션은 기본적으로 유연한 구조를 가지고 있어서 어떤 화면이 있고 또 어떤 파라미터를 넘길지
// 개발자가 자유롭게 설정할 수 있다.
// 이 때 Typescript 없이 작성되면 어떤 화면이 있는지 모르고 잘못된 파라미터를 넣어도 에러가 나지 않은
// 경우가 생긴다.
