import {useEffect, useState} from 'react';

interface UseFormProps<T> {
  initialValue: T;
  validate: (values: T) => Record<keyof T, string>; // 어떤 values를 똑같이 받고 결과로는 name을 key로 하고 에러 메세지가 담기는 스트링 값이 있는 형태인 타입으로 달아줌
}

function useForm<T>({initialValue, validate}: UseFormProps<T>) {
  const [values, setValues] = useState(initialValue);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  useEffect(() => {
    const newErrors = validate(values);
    setErrors(newErrors);
  }, [validate, values]);

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
