import React from 'react'
import './App.css'
import {Route} from 'react-router-dom';
import ShoeGrid from './Components/ShoeGrid';

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
        brand: 'Nike',
        style: 'basketball',
        name: 'Jordan 5 Retro Wings',
        size: '10.5',
        upcid: '832112 PM',
        image: 'https://stockx.imgix.net/Air-Jordan-5-Retro-Wings.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'

      },
      {
        brand: 'Nike',
        style: 'basketball',
        name: 'Nike SB Dunk High Concepts Ugly Christmas Sweater 2017',
        size: '13.0',
        upcid: '623122 QT',
        image: 'https://stockx.imgix.net/Nike-SB-Dunk-High-Concepts-Ugly-Christmas-Sweater-2017-TD.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'

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
        brand: 'Nike',
        style: 'basketball',
        name: 'Nike Hyperdunk Marty McFly 2015',
        size: '14.5',
        upcid: '854103 QT',
        image: 'https://stockx.imgix.net/Nike-Hyperdunk-Supreme-Marty-McFly-2015.jpg?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'
      },

      {
        brand: 'Nike',
        style: 'running',
        name: 'Jordan 1 Retro High Pine Green',
        size: '12.5',
        upcid: '990103 QT',
        image: 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Pine-Green.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'
      },
      {
        brand: 'Nike',
        style: 'running',
        name: 'Jordan 5 Retro Wings',
        size: '10.5',
        upcid: '832112 PM',
        image: 'https://stockx.imgix.net/Air-Jordan-5-Retro-Wings.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'

      },
      {
        brand: 'Nike',
        style: 'running',
        name: 'Nike SB Dunk High Concepts Ugly Christmas Sweater 2017',
        size: '13.0',
        upcid: '623122 QT',
        image: 'https://stockx.imgix.net/Nike-SB-Dunk-High-Concepts-Ugly-Christmas-Sweater-2017-TD.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'

      },
      {
        brand: 'Nike',
        style: 'running',
        name: 'Jordan 1 Retro High Pine Green',
        size: 'small',
        upcid: '929283 QT',
        image: 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Pine-Green.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'

      },
      {
        brand: 'Nike',
        style: 'running',
        name: 'Nike Hyperdunk Marty McFly 2015',
        size: '14.5',
        upcid: '854103 QT',
        image: 'https://stockx.imgix.net/Nike-Hyperdunk-Supreme-Marty-McFly-2015.jpg?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'
      },

      {
        brand: 'Nike',
        style: 'walking',
        name: 'Jordan 1 Retro High Pine Green',
        size: '12.5',
        upcid: '990103 QT',
        image: 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Pine-Green.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'
      },
      {
        brand: 'Nike',
        style: 'walking',
        name: 'Jordan 5 Retro Wings',
        size: '10.5',
        upcid: '832112 PM',
        image: 'https://stockx.imgix.net/Air-Jordan-5-Retro-Wings.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'

      },
      {
        brand: 'Nike',
        style: 'walking',
        name: 'Nike SB Dunk High Concepts Ugly Christmas Sweater 2017',
        size: '13.0',
        upcid: '623122 QT',
        image: 'https://stockx.imgix.net/Nike-SB-Dunk-High-Concepts-Ugly-Christmas-Sweater-2017-TD.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'

      },
      {
        brand: 'Nike',
        style: 'walking',
        name: 'Jordan 1 Retro High Pine Green',
        size: 'small',
        upcid: '929283 QT',
        image: 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Pine-Green.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'

      },
      {
        brand: 'Nike',
        style: 'walking',
        name: 'Nike Hyperdunk Marty McFly 2015',
        size: '14.5',
        upcid: '854103 QT',
        image: 'https://stockx.imgix.net/Nike-Hyperdunk-Supreme-Marty-McFly-2015.jpg?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'
      },

      {
        brand: 'Nike',
        style: 'tennis',
        name: 'Jordan 1 Retro High Pine Green',
        size: '12.5',
        upcid: '990103 QT',
        image: 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Pine-Green.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'
      },
      {
        brand: 'Nike',
        style: 'tennis',
        name: 'Jordan 5 Retro Wings',
        size: '10.5',
        upcid: '832112 PM',
        image: 'https://stockx.imgix.net/Air-Jordan-5-Retro-Wings.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'

      },
      {
        brand: 'Nike',
        style: 'tennis',
        name: 'Nike SB Dunk High Concepts Ugly Christmas Sweater 2017',
        size: '13.0',
        upcid: '623122 QT',
        image: 'https://stockx.imgix.net/Nike-SB-Dunk-High-Concepts-Ugly-Christmas-Sweater-2017-TD.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'

      },
      {
        brand: 'Nike',
        style: 'tennis',
        name: 'Jordan 1 Retro High Pine Green',
        size: 'small',
        upcid: '929283 QT',
        image: 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Pine-Green.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'

      },
      {
        brand: 'Nike',
        style: 'tennis',
        name: 'Nike Hyperdunk Marty McFly 2015',
        size: '14.5',
        upcid: '854103 QT',
        image: 'https://stockx.imgix.net/Nike-Hyperdunk-Supreme-Marty-McFly-2015.jpg?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'
      },

      {
        brand: 'Nike',
        style: 'crosstrainers',
        name: 'Jordan 1 Retro High Pine Green',
        size: '12.5',
        upcid: '990103 QT',
        image: 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Pine-Green.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'
      },
      {
        brand: 'Nike',
        style: 'crosstrainers',
        name: 'Jordan 5 Retro Wings',
        size: '10.5',
        upcid: '832112 PM',
        image: 'https://stockx.imgix.net/Air-Jordan-5-Retro-Wings.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'

      },
      {
        brand: 'Nike',
        style: 'crosstrainers',
        name: 'Nike SB Dunk High Concepts Ugly Christmas Sweater 2017',
        size: '13.0',
        upcid: '623122 QT',
        image: 'https://stockx.imgix.net/Nike-SB-Dunk-High-Concepts-Ugly-Christmas-Sweater-2017-TD.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'

      },
      {
        brand: 'Nike',
        style: 'crosstrainers',
        name: 'Jordan 1 Retro High Pine Green',
        size: 'small',
        upcid: '929283 QT',
        image: 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Pine-Green.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'

      },
      {
        brand: 'Nike',
        style: 'crosstrainers',
        name: 'Nike Hyperdunk Marty McFly 2015',
        size: '14.5',
        upcid: '854103 QT',
        image: 'https://stockx.imgix.net/Nike-Hyperdunk-Supreme-Marty-McFly-2015.jpg?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'
      },
      
    ]
  }

  removeShoe = (shoe) => {
    this.setState((currentState) => ({
      shoes: currentState.shoes.filter((s) => {
        return s.name !== shoe.name
      })
    }))
  }

  createShoe = (shoe) => {
    this.setState((currentState) => ({
      shoes: currentState.shoes.concat([shoe])
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
                onRemoveShoe={this.removeShoe} 
                onCreateShoe={(shoe) => {
                  this.createShoe(shoe)
                }}  
                />
          )}/>
        </div>
      )} />
    )
  }
}

export default App;
