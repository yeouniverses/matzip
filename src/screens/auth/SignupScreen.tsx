import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';

import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import useForm from '@/hooks/useForm';
import {validateSignup} from '@/utils/validation';

function SignupScreen() {
  const signup = useForm({
    initialValue: {email: '', password: '', passwordConfirm: ''},
    validate: validateSignup,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          touched={signup.touched.email}
          {...signup.getTextInputProps('email')}
        />
        <InputField
          secureTextEntry
          textContentType="oneTimeCode"
          placeholder="비밀번호"
          touched={signup.touched.password}
          {...signup.getTextInputProps('password')}
        />
        <InputField
          secureTextEntry
          placeholder="비밀번호 확인"
          touched={signup.touched.passwordConfirm}
          {...signup.getTextInputProps('passwordConfirm')}
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
