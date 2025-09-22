import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';

import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import useForm from '@/hooks/useForm';

function SignupScreen() {
  const signup = useForm({
    initialValue: {email: '', password: '', passwordConfirm: ''},
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          value={signup.values.email}
          touched={signup.touched.email}
          onChangeText={text => signup.handleChangeValue('email', text)}
          onBlur={() => signup.handleBlur('email')}
        />
        <InputField
          secureTextEntry
          textContentType="oneTimeCode"
          placeholder="비밀번호"
          value={signup.values.password}
          touched={signup.touched.password}
          onChangeText={text => signup.handleChangeValue('password', text)}
          onBlur={() => signup.handleBlur('password')}
        />
        <InputField
          secureTextEntry
          placeholder="비밀번호 확인"
          value={signup.values.passwordConfirm}
          touched={signup.touched.passwordConfirm}
          onChangeText={text =>
            signup.handleChangeValue('passwordConfirm', text)
          }
          onBlur={() => signup.handleBlur('passwordConfirm')}
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

// form handling 시
// useInput이나 useForm 등 커스텀 훅으로 분리하는 방법도 있고
// react hook form 같은 라이브러리 사용 가능
