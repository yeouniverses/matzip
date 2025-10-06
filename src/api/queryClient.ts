import {QueryClient} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 60 * 1000,
    },
    mutations: {
      // 요청 실패 시 기본적으로 3번 요청하게 되는데, 사용자에게 즉각적인 피드백을 주기 위해서 재요청은 하지 않고 false로 지정
      retry: false,
    },
  },
});

export default queryClient;
