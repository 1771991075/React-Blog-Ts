import RouterViews from './router';
import { FloatButton } from 'antd';
import './App.scss';

function App() {
  return (
    <div className="App">
      <FloatButton.BackTop visibilityHeight={500} />
      <RouterViews></RouterViews>
    </div>
  );
}

export default App;
