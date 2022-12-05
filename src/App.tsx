import React from 'react';
import Controls from './components/controls/Controls';
import styles from './styles/App.module.scss';

const App = () => {
  return (
    <div className={ styles.app }>
      <Controls />
    </div>
  );
};

export default App;
