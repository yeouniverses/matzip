import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';

import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';

function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField placeholder="이메일" error="이메일을 입력해주세요." />
        <InputField secureTextEntry placeholder="비밀번호" />
      </View>
      <CustomButton label="로그인" variant="filled" size="large" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
});

export default LoginScreen;
