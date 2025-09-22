import {use, useState} from 'react';

interface useFormProps<T> {
  initialValue: T;
}

function useForm<T>({initialValue}: useFormProps<T>) {
  const [values, setValues] = useState(initialValue);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleChangeValue = (name: keyof T, text: string) => {
    setValues(prev => ({...prev, [name]: text}));
  };

  const handleBlur = (name: keyof T) => {
    setTouched(prev => ({...prev, [name]: true}));
  };

  const getTextInputProps = (name: keyof T) => {
    const value = values[name];
    const onChangeText = (value: string) => handleChangeValue(name, value);
    const onBlur = () => handleBlur(name);

    return {value, onChangeText, onBlur};
  };

  return {
    values,
    touched,
    errors,
    getTextInputProps,
  };
}

export default useForm;

// 제네릭 타입 매개변수
// 이 훅이나 함수가 어떤 타입을 사용할지 외부에서 결정할 수 있게 열어두는 방법
