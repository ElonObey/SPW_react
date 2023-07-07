import React, { createElement } from 'react';
// import ReactDOM from 'react-dom/client';
import App from './App';
import ReactDOM from 'react-dom';

ReactDOM.render(
  // createElement('button',{onClick: () => console.log("Click")}, "text"),
  <App/>,
  document.getElementById('root')
)

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React>
//     <App />
//   </React>
// );
