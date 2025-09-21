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

  // 포커스를 잃었을 때 에러가 표시되도록 함
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
  });

  const handleChangeValue = (name: string, text: string) => {
    setValues(prev => ({...prev, [name]: text}));
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({...prev, [name]: true}));
  };

  console.log('touched', touched);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          value={values.email}
          touched={touched.email}
          onChangeText={text => handleChangeValue('email', text)}
          onBlur={() => handleBlur('email')}
        />
        <InputField
          secureTextEntry
          textContentType="oneTimeCode"
          placeholder="비밀번호"
          value={values.password}
          touched={touched.password}
          onChangeText={text => handleChangeValue('password', text)}
          onBlur={() => handleBlur('password')}
        />
        <InputField
          secureTextEntry
          placeholder="비밀번호 확인"
          value={values.passwordConfirm}
          touched={touched.passwordConfirm}
          onChangeText={text => handleChangeValue('passwordConfirm', text)}
          onBlur={() => handleBlur('passwordConfirm')}
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
