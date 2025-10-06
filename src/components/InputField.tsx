import {colors} from '@/constants/colors';
import React, {Ref} from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

interface InputFieldProps extends TextInputProps {
  ref?: Ref<TextInput>; // 기존엔 ref를 forwardRef를 사용하라는 에러 메세지가 있었지만, react 19부터는 바로 ref를 props로 넘겨줄 수 있음
  error?: string;
  touched?: boolean;
}

function InputField({ref, error, touched, ...props}: InputFieldProps) {
  return (
    <View>
      <TextInput
        ref={ref}
        autoCapitalize="none"
        spellCheck={false}
        autoCorrect={false}
        style={[styles.input, touched && Boolean(error) && styles.inputError]}
        {...props}
      />
      {touched && Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    justifyContent: 'center',
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
    color: colors.BLACK,
  },
  inputError: {
    borderWidth: 1,
    borderColor: colors.RED_300,
  },
  error: {
    color: colors.RED_500,
    fontSize: 12,
    paddingTop: 5,
  },
});

export default InputField;
