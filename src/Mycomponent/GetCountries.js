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
        let atemp=0;
        finalData.sort(function (a,b) {
            
         //the function inside the sorting, if positive is returned then for a>b it sorts b before a(5-3 then 3,5), if negative then a before b(4-5);4,5
         // and if zero then no change here we are comparing the letters of name of countries A>B
                 if (a.name.common> b.name.common) {
                     atemp=1;
                 }
                 else {
                     atemp=-1;
                 }
           
                 return (atemp)
            
        })
        
       
        
        


        this.setState({
            countriesList: finalData
        
        }
        )
        
        
                

        
    }
    
    render() {
        return (
            <div className="container">
                <h1  className="text-center">COUNTRIES OF ASIA</h1>
                <div className="row">
                    {this.state.countriesList.map((elem) => {
            
                        return <div key={elem.name.official} className="col-md-3 my-3">
                            <DisplayCountries Cname={elem.name.common} Ccapital={elem.capital} Cregion={elem.region} Cpopulation={elem.population} Cflagurl={elem.flags.png} Clanguages={Object.values(elem.languages)} Cborders={elem.borders.map((e) => {

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
