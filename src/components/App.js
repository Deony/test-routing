import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header } from "./Header";
import { Main } from "./Main";


function App() {
  return (
  	<BrowserRouter>
		<div className="App">
		  <Header />
		  <Main />
		</div>
	</BrowserRouter>
  );
}

export default App;
