import * as React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

class App extends React.Component <{ history?: any }>{

  public render() {
    return (
      <div>
        <Header />
        <div className="content"><Main /></div>
        <Footer />
      </div>
    );
  }

}

export default App;
