import React from 'react'
import './App.css'
import {Route} from 'react-router-dom';
import ShoeGrid from './Components/ShoeGrid';
//import {Link} from 'react-router-dom';

class App extends React.Component {
  state = {
    shoes: [
      {
        brand: 'Nike',
        style: 'basketball',
        size: 'large',
        upcid: '990103 QT',
        image: 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Pine-Green.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'
      },
      {
        brand: 'Addidas',
        style: 'running',
        size: 'medium',
        upcid: '854103 QT'
      },
      {
        brand: 'New Balance',
        style: 'running',
        size: 'small',
        upcid: '623122 QT'
      },
      {
        brand: 'Nike',
        style: 'basketball',
        size: 'small',
        upcid: '929283 QT'
      },
      {
        brand: 'Addidas',
        style: 'running',
        size: 'medium',
        upcid: '854103 QT'
      },
      {
        brand: 'New Balance',
        style: 'running',
        size: 'small',
        upcid: '623122 QT'
      }
    ]
  }


  render() {
  	return (
      <Route exact path='/' render={() => (
        <div>
          <Route exact path="/" 
            render={() => 
              (<ShoeGrid shoes={this.state.shoes} />
          )}/>
        </div>
      )} />
    )
  }
}

export default App;
