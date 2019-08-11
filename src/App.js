import React from 'react';
import { GlobalStyled } from './style'
import Header from './common/header/index'
import store from './store/store'
import { Provider } from "react-redux";



function App(props) {
  return (
    <Provider store={store} >
      <div className="App">
        {/* 全局变量 */}
        <GlobalStyled />
        <Header />
      </div>
    </Provider>
  );
}

export default App;

