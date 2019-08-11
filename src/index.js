import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/static/iconfont/iconfont.css'

//PWA 渐进性web应用,
//支持https,当用户第一次反问需要网,第二次没网 也可以看到
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
