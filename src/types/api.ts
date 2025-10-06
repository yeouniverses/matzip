import {
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';
import {AxiosError} from 'axios';

type ResponseError = AxiosError<{
  statusCode: number;
  message: string;
  error: string;
}>;

// TData : 뮤테이션 함수의 실행 결과로 반환되는 값의 타입
// error : ResponseError
// TVariables : 뮤테이션 함수에 전달하는 인자의 타입
// TContext : onMutation 함수에서 반환하여 이후에 쓸 수 있는 context 값의 타입. 사용하지 않을 것이라서 unknown으로 변경
// <TData = unknown, TVariables = unknown> : 기본값은 unknown이지만, 받아서도 사용할 수 있도록 함
type UseMutationCustomOptions<TData = unknown, TVariables = unknown> = Omit<
  UseMutationOptions<TData, ResponseError, TVariables, unknown>,
  'mutationFn'
>;

type UseQueryCustomOptions<TQueryFnData = unknown, TData = TQueryFnData> = Omit<
  UseQueryOptions<TQueryFnData, ResponseError, TData, QueryKey>,
  'queryKey'
>;

export type {ResponseError, UseMutationCustomOptions, UseQueryCustomOptions};
