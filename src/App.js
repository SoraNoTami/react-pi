import axios from 'axios';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pi: null,
    }
  }
  componentDidMount = () => {
    axios('https://api.pi.delivery/v1/pi?start=0&numberOfDigits=30').then( (resultat) => {
      console.log(resultat)
      console.log(resultat.data.content)
      this.setState({pi : resultat.data.content})

    })
  }

  

  render() {
    if (this.state.pi === null) {
      return (
        <h2>Aucune valeur disponible</h2>
      )
    } else {
      return (
        <div>
          {this.state.pi.charAt(0) + "," + this.state.pi.substring(1) }
        </div>
      );
    }
  }
}

export default App;
