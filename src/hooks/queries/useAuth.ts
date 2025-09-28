import {useEffect} from 'react';
import {useMutation, useQuery} from '@tanstack/react-query';
import {getAccessToken, getProfile, postLogin, postSignup} from '@/api/auth';
import {numbers} from '@/constants/numbers';
import {UseMutationCustomOptions, UseQueryCustomOptions} from '@/types/api';
import {Profile} from '@/types/domain';
import {removeEncryptStorage, setEncryptStorage} from '@/utils/encryptStorage';
import {removeHeader, setHeader} from '@/utils/header';

function useSignup(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: postSignup,
    ...mutationOptions, // 옵션들을 주입받아서 사용할 수 있도록 함
  });
}

function useLogin(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: async ({accessToken, refreshToken}) => {
      // accessToken은 header에 넣기
      setHeader('Authorization', `Bearer ${accessToken}`);
      // refreshToken은 encryptStorage에 암호화해서 저장하기
      await setEncryptStorage('refreshToken', refreshToken);
    },
    ...mutationOptions,
  });
}

function useGetRefreshToken() {
  const {data, isSuccess, isError} = useQuery({
    queryKey: ['auth', 'getAccessToken'],
    queryFn: getAccessToken,
    staleTime: numbers.ACCESS_TOKEN_REFRESH_TIME,
    refetchInterval: numbers.ACCESS_TOKEN_REFRESH_TIME,
  });

  // 요청이 성공했을 때 헤더의 액세스 토큰과 Encrypt Storage에 있는 리프레쉬 토큰을 칼아줄 것임
  useEffect(() => {
    (async () => {
      if (isSuccess) {
        setHeader('Authorization', `Bearer ${data.accessToken}`);
        await setEncryptStorage('refreshToken', data.refreshToken);
      }
    })();
  }, [isSuccess]);

  useEffect(() => {
    (async () => {
      if (isError) {
        removeHeader('Authorization');
        await removeEncryptStorage('refreshToken');
      }
    })();
  }, [isError]);

  return {isSuccess, isError};
}

function useGetProfile(queryOptions?: UseQueryCustomOptions<Profile>) {
  return useQuery({
    queryFn: getProfile,
    queryKey: ['auth', 'getProfile'],
    ...queryOptions,
  });
}
