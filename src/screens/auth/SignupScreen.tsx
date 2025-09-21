import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';

import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';

function SignupScreen() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChangeValue = (name: string, text: string) => {
    setValues(prev => ({...prev, [name]: text}));
  };

  console.log('values', values);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          value={values.email}
          onChangeText={text => handleChangeValue('email', text)}
        />
        <InputField
          secureTextEntry
          textContentType="oneTimeCode"
          placeholder="비밀번호"
          value={values.password}
          onChangeText={text => handleChangeValue('password', text)}
        />
        <InputField
          secureTextEntry
          placeholder="비밀번호 확인"
          value={values.passwordConfirm}
          onChangeText={text => handleChangeValue('passwordConfirm', text)}
        />
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
