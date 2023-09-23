import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/index';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </HashRouter>
);