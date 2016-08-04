import React from 'react';
import style from './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className={style.app}>
        <div className={style.appHeader}>
          <img src="logo.svg" className={style.appLogo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={style.appIntro}>
          To get started, edit <code>app/src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
