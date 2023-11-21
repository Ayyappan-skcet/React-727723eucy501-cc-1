import React from 'react';
import Timer from './Timer';

const App = () => {
  return (
    <div>
      <center><Timer initialSeconds={0}/>
      </center>
    </div>
  );
};

export default App;