import { Provider } from 'react-redux';
import Home  from './pages/Home/index.tsx';
import store from './store/index.tsx';

function App() {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}

export default App;
