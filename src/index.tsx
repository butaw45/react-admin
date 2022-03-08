import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { configureStore } from './redux/configureStore';
import { Provider } from 'react-redux';

axios.defaults.baseURL = 'http://localhost:8000/api/'
axios.defaults.withCredentials = true;
//create enable axios CROS
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

//set Cors
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Authorization, Content-Length, X-Requested-With, XMLHttpRequest';

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.proxy = {
//   host: 'http://localhost',
//   port: 4200
// };
  // app.setGlobalPrefix('api');
  // app.useGlobalPipes(new ValidationPipe());
  // app.use(cookieParser());
  // app.enableCors({
  //   origin: 'http://localhost:4200',
  //   credentials:true
  // })

  const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
