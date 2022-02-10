import React, { Component } from 'react'
import { DisplayCountries } from './DisplayCountries'


export class GetCountries extends Component {
    constructor() {
        super();
        this.state = {
            countriesList:[]
        }
    }   
    async componentDidMount() {
        let url = "https://restcountries.com/v3.1/region/asia?=fields=name,capital,flags,region,population,languages,borders"
        let data = await fetch(url);
        let parseDdata = await data.json();
        let finalData=Object.values(parseDdata);
        //the parsedData is in Object from, to convert it inot array and use Map function on it
        // we convert the values of Object into a array through Object.values and the rest manipulatoin is according to the data given.
        console.log(parseDdata[5].flags.png)
       
        
        


        this.setState({
            countriesList: finalData
        
        }
        )
        console.log(this.state.countriesList);
                


    }
    
    render() {
        return (
            <div className="container">
                <h1  className="text-center">COUNTRIES OF ASIA</h1>
                <div className="row">
                    {this.state.countriesList.map((elem) => {
                        console.log(typeof(elem.name))
                        return <div key={elem.name.official} className="col-md-3 my-3">
                            <DisplayCountries Cname={elem.name.official} Ccapital={elem.capital} Cregion={elem.region} Cpopulation={elem.population} Cflagurl={elem.flags.png} Clanguages={Object.values(elem.languages)} Cborders={elem.borders.map((e) => {

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
