import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';

import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';

function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, SetPassWord] = useState('');
  const [passwordConfirm, SetPasswordConfirm] = useState('');

  const handleChangeEmail = (text: string) => {
    setEmail(text);
  };

  const handleChangePassword = (text: string) => {
    SetPassWord(text);
  };

  const handleChangePasswordConfirm = (text: string) => {
    SetPasswordConfirm(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          value={email}
          onChangeText={text => handleChangeEmail(text)}
        />
        <InputField
          placeholder="비밀번호"
          value={password}
          onChangeText={text => handleChangePassword(text)}
          secureTextEntry
        />
        <InputField
          placeholder="비밀번호 확인"
          value={password}
          onChangeText={text => handleChangePasswordConfirm(text)}
          secureTextEntry
        />
        <InputField placeholder="비밀번호 확인" />
      </View>
      <CustomButton label="회원가입" variant="filled" size="large" />
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

export default SignupScreen;
