import axios from 'axios';
import {Platform} from 'react-native';
import {ANDROID, IOS} from '@env';

export const baseUrls = {
  // android 는 http://localhost:3030 이 동작하지 않음
  // 실제 기기로 테스트 시 컴퓨터와 같은 ip 주소로 해 줘야함
  // 내부 와이파이 주소 사용하기
  android: ANDROID,
  ios: IOS,
};

const axiosInstance = axios.create({
  baseURL: Platform.OS === 'android' ? baseUrls.android : baseUrls.ios,
});

export default axiosInstance;
