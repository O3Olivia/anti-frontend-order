import { RecoilRoot } from 'recoil';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Layout from 'components/Layout';
import theme from 'components/UI/theme/theme';

import { MainPage, OrdersPage, NotFoundPage } from 'pages';

import Path from 'models/Path';

import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Layout>
            <Routes>
              <Route path={Path.MAIN} element={<MainPage />} />
              <Route path={Path.ORDERS} element={<OrdersPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
