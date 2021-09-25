import './App.css';

import React, { Component } from 'react'
import {GetCountries} from './Mycomponent/GetCountries';

export default class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: "#FFADAD"}}>
        <GetCountries/>

      </div>
    )
  }
}

