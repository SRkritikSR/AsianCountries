import React, { Component } from 'react'
import { DisplayCountries } from './DisplayCountries'
import axios from 'axios';

export class GetCountries extends Component {
    constructor() {
        super();
        this.state = {
            countriesList: []
        }
    }
    async componentDidMount() {
        let url = "https://restcountries.com/v3.1/region/asia?=fields=name,capital,flags,region,population,languages,borders"
        let data = await fetch(url);
        let parseDdata = await data.json();
        // console.log(parseDdata[0].name);


        this.setState({
            countriesList: parseDdata
        }
        )


    }
    render() {
        return (
            <div className="container">
                <h1  className="text-center">COUNTRIES OF ASIA</h1>
                <div className="row">
                    {this.state.countriesList.map((elem) => {
                        return <div key={elem.name} className="col-md-3 my-3">
                            <DisplayCountries Cname={elem.name} Ccapital={elem.capital} Cregion={elem.region} Cpopulation={elem.population} Cflagurl={elem.flags[1]} Clanguages={elem.languages.map((e) => {
                                return e.name

                            })} Cborders={elem.borders.map((e) => {

                                return e


                            })} />

                        </div>

                    })

                    }

                </div>
            </div>
        )

    }
}
