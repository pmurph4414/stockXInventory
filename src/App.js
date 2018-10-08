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
        name: 'Jordan 91 Retro High Pine Green',
        size: '12.0',
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
        brand: 'Reebok',
        style: 'running',
        name: 'Reebok Classic Nylon Bait x YG',
        size: '10.5',
        upcid: '990103 QT',
        image: 'https://stockx.imgix.net/Reebok-Classic-Nylon-Bait-x-YG.jpeg?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'
      },
      {
        brand: 'Reebok',
        style: 'running',
        name: 'Reebok Club C Kendrick Lamar Acid Wash',
        size: '10.5',
        upcid: '832112 PM',
        image: 'https://stockx.imgix.net/Reebok-Club-C-Kendrick-Lamar.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'

      },
      {
        brand: 'Adidas',
        style: 'running',
        name: 'adidas Yeezy Wave Runner 700 Solid Grey',
        size: '13.0',
        upcid: '623122 QT',
        image: 'https://stockx-360.imgix.net/Adidas-Yeezy-Wave-Runner-700-Solid-Grey/Images/Adidas-Yeezy-Wave-Runner-700-Solid-Grey/Lv2/img36.jpg?auto=format,compress&w=1117&q=90'

      },
      {
        brand: 'Adidas',
        style: 'running',
        name: 'adidas Ultra Boost 4.0 Running White',
        size: 'small',
        upcid: '929283 QT',
        image: 'https://stockx-360.imgix.net/Adidas-Ultra-Boost-4-0-Running-White/Images/Adidas-Ultra-Boost-4-0-Running-White/Lv2/img36.jpg?auto=format,compress&w=1117&q=90'

      },
      {
        brand: 'Nike',
        style: 'running',
        name: 'Air Max 1/97 Sean Wotherspoon',
        size: '14.5',
        upcid: '854103 QT',
        image: 'https://stockx-360.imgix.net/Nike-Air-Max-1-97-Sean-Wotherspoon-NA/Images/Nike-Air-Max-1-97-Sean-Wotherspoon-NA/Lv2/img36.jpg?auto=format,compress&w=1117&q=90'
      },

      {
        brand: 'Adidas',
        style: 'tennis',
        name: 'adidas Yeezy Boost 350 V2 Core Black Red',
        size: '9.5',
        upcid: '112342 QT',
        image: 'https://stockx-360.imgix.net/adidas-yeezy-boost-350-v2-core-black-red_TruView/Images/adidas-yeezy-boost-350-v2-core-black-red_TruView/Lv2/img26.jpg?auto=format,compress&w=1117&q=90'
      },
      {
        brand: 'Adidas',
        style: 'tennis',
        name: 'adidas Yeezy 500 Utility Black',
        size: '14.5',
        upcid: '832112 PM',
        image: 'https://stockx-360.imgix.net/Adidas-Yeezy-500-Utility-Black/Images/Adidas-Yeezy-500-Utility-Black/Lv2/img36.jpg?auto=format,compress&w=1117&q=90'
      },
      {
        brand: 'Nike',
        style: 'tennis',
        name: 'Jordan 3 Retro Tinker Hatfield',
        size: '13.0',
        upcid: '623122 QT',
        image: 'https://stockx-360.imgix.net/Air-Jordan-3-Retro-Tinker-Hatfield/Images/Air-Jordan-3-Retro-Tinker-Hatfield/Lv2/img36.jpg?auto=format,compress&w=1117&q=90'
      },
      {
        brand: 'Nike',
        style: 'tennis',
        name: 'Air Max 1 Anniversary Red',
        size: '8.5',
        upcid: '929283 QT',
        image: 'https://stockx-360.imgix.net/nike-air-max-1-anniversary-red-2017-restock_TruView/Images/nike-air-max-1-anniversary-red-2017-restock_TruView/Lv2/img30.jpg?auto=format,compress&w=1117&q=90'
      },
      {
        brand: 'Asics',
        style: 'tennis',
        name: 'ASICS Gel-Lyte III Hanon "Wildcats"',
        size: '14.5',
        upcid: '854103 QT',
        image: 'https://stockx.imgix.net/Asics-Gel-Lyte-III-Hanon-Wildcats-2011.jpg?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'
      },

      {
        brand: 'Nike',
        style: 'crosstrainers',
        name: 'Air Trainer SC Bo Jackson 2013',
        size: '12.5',
        upcid: '990103 QT',
        image: 'https://stockx.imgix.net/Air-Trainer-SC-Bo-Jackson-2013.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'
      },
      {
        brand: 'Nike',
        style: 'crosstrainers',
        name: 'Air Trainer III Bo Knows Horse Racing',
        size: '10.5',
        upcid: '832112 PM',
        image: 'https://stockx-360.imgix.net/Nike-Air-Trainer-III-Bo-Knows-Horse-Racing_TruView/Images/Nike-Air-Trainer-III-Bo-Knows-Horse-Racing_TruView/Lv2/img26.jpg?auto=format,compress&w=1117&q=90'

      },
      {
        brand: 'Nike',
        style: 'crosstrainers',
        name: 'Air Trainer 1 Puerto Rico',
        size: '13.0',
        upcid: '623122 QT',
        image: 'https://stockx.imgix.net/Nike-Air-Trainer-1-Puerto%20Rico.jpg?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'
      },
      {
        brand: 'Nike',
        style: 'crosstrainers',
        name: 'Air Trainer 1 112 Pack',
        size: '11.0',
        upcid: '929283 QT',
        image: 'https://stockx.imgix.net/Nike-Air-Trainer-1-112-Pack.jpg?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'

      },
      {
        brand: 'Nike',
        style: 'crosstrainers',
        name: 'Nike Air Trainer Max 94 What the Trainer Safari',
        size: '14.5',
        upcid: '854103 QT',
        image: 'https://stockx.imgix.net/Nike-Air-Max-Trainer-94-What-The-Trainer-Safari.jpg?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'
      },
		
	  {
        brand: 'Puma',
        style: 'walking',
        name: 'Puma Tsugi Netfit Black Scarlet Ibis',
        size: '12.5',
        upcid: '990103 QT',
        image: 'https://stockx.imgix.net/Puma-Tsugi-Netfit-Black-Scarlet-Ibis.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'
      },
      {
        brand: 'Nike',
        style: 'walking',
        name: 'Air Max 1 Atmos Animal Pack 2.0',
        size: '10.5',
        upcid: '832112 PM',
        image: 'https://stockx-360.imgix.net/Nike-Air-Max-1-Atmos-Animal-Pack-2-2018-Black-Box/Images/Nike-Air-Max-1-Atmos-Animal-Pack-2-2018-Black-Box/Lv2/img36.jpg?auto=format,compress&w=1117&q=90'

      },
      {
        brand: 'Asics',
        style: 'walking',
        name: 'ASICS Gel-Lyte III Woei "Cervidae"',
        size: '13.0',
        upcid: '623122 QT',
        image: 'https://stockx.imgix.net/Asics-Gel-Lyte-III-Woei-Cervidae.jpg?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'
      },
      {
        brand: 'Asics',
        style: 'walking',
        name: 'ASICS Gel-Lyte V BAIT "Splash City"',
        size: '11.0',
        upcid: '929283 QT',
        image: 'https://stockx.imgix.net/Asics-Gel-Lyte-V-BAIT-Splash-City.jpg?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90'

      },
      {
        brand: 'Puma',
        style: 'walking',
        name: 'Puma Thunder Electric Black White Orange',
        size: '14.5',
        upcid: '854103 QT',
        image: 'https://stockx-360.imgix.net/Puma-Thunder-Electric-Black-White-Orange/Images/Puma-Thunder-Electric-Black-White-Orange/Lv2/img36.jpg?auto=format,compress&w=1117&q=90'
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

  createShoe = (shoe) => {
	  this.shoes(shoe)
	  	.then((shoe) => {
			this.setState((currentState) => ({
		  	shoes: currentState.shoes.concat([shoe])  
	  }))
    })
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={({history}) => (
          <ShoeGrid 
            shoes={this.state.shoes}
            onRemoveShoe={this.removeShoe}
            onCreateShoe={(shoe) => {
				this.createShoe(shoe)
				history.push('/')
			}}
          />
        )} />
      </div>
    );
  }
}

export default App;
