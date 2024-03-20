import { Provider } from 'react-redux';
import Home  from './pages/Home/index.tsx';
import store from './store/index.tsx';

function App() {
  return (
    <Provider store={store}>
      <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet"/>
    
      <Home/>
    </Provider>
  );
}

export default App;
