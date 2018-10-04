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
        name: 'Jordan 1 Retro High Pine Green',
        size: '12.5',
        upcid: '990103 QT',
        image: 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Pine-Green.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'
      },
      {
        brand: 'Addidas',
        style: 'running',
        name: 'Jordan 1 Retro High Pine Green',
        size: '12.5',
        upcid: '854103 QT',
        image: 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Pine-Green.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'

      },
      {
        brand: 'New Balance',
        style: 'running',
        name: 'Jordan 1 Retro High Pine Green',
        size: 'small',
        upcid: '623122 QT',
        image: 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Pine-Green.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'

      },
      {
        brand: 'Nike',
        style: 'basketball',
        name: 'Jordan 1 Retro High Pine Green',
        size: 'small',
        upcid: '929283 QT',
        image: 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Pine-Green.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'

      },
      {
        brand: 'Addidas',
        style: 'running',
        name: 'Jordan 1 Retro High Pine Green',
        size: 'medium',
        upcid: '854103 QT'
      },
      {
        brand: 'New Balance',
        style: 'running',
        name: 'Jordan 1 Retro High Pine Green',
        size: 'small',
        upcid: '623122 QT'
      }
    ]
  }

  removeShoe = (shoe) => {
    this.setState((currentState) => ({
      shoes: currentState.shoes.filter((s) => {
        return s.name !== shoe.name
      })
    }))
  }


  render() {
  	return (
      <Route exact path='/' render={() => (
        <div>
          <Route exact path="/" 
            render={() => 
              (<ShoeGrid 
                shoes={this.state.shoes}
                onRemoveShoe={this.removeShoe} />
          )}/>
        </div>
      )} />
    )
  }
}

export default App;
