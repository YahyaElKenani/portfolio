import { Provider, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { persistor, store } from './Store/Store';
import { PersistGate } from 'redux-persist/integration/react';
import Header from './Components/Header/Header';
import VirtualBody from './Components/VirtualBody/VirtualBody';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import { HashRouter } from 'react-router-dom';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>    
          <VirtualBody>
              <Header /> 
              <Home />
              <About /> 
              <HashRouter> 
                <Projects />
              </HashRouter>
              <Contact />
          </VirtualBody>  
      </PersistGate>
    </Provider>
  );
}

export default App;
