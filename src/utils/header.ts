import axiosInstance from '@/api/axios';

function setHeader(key: string, value: string) {
  // headers.common에 key를 받아서 value를 그대로 저장해 줄 것
  axiosInstance.defaults.headers.common[key] = value;
}

function removeHeader(key: string) {
  if (!axiosInstance.defaults.headers.common[key]) {
    return;
  }

  delete axiosInstance.defaults.headers.common[key];
}

export {setHeader, removeHeader};
