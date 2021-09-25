import React, { Component } from 'react';
import { GetCountries } from './GetCountries';

export class DisplayCountries extends Component {
    render() {
        let {Cname,Ccapital,Cregion,Cpopulation,Cflagurl,Clanguages,Cborders}=this.props;
        // console.log(Cborders)
        if (Cborders.length===0){
            Cborders.push("ISLAND")
        }
        return (
            <div>
                <div className="card " style={{width: "18rem", border: "0.5px solid black", backgroundColor: "#F3D5C0"}}>
                    <img className="card-img-top" src={Cflagurl} alt="Card image cap" style={{border: "0.25px solid black    "}} />
                    <div className ="card-body">
                    <h5 className ="card-title">{Cname}</h5>
                    </div>
                    <ul className ="list-group list-group-flush" >
                    <li className ="list-group-item" style={{backgroundColor: "#D4ECDD"}}>Capital: {Ccapital} </li>
                    <li className ="list-group-item"style={{backgroundColor: "#D4ECDD"}}>Population: {Cpopulation}</li>
                    <li className ="list-group-item"style={{backgroundColor: "#D4ECDD"}}>Region: {Cregion}</li>
                    <li className="list-group-item" style={{backgroundColor: "#D4ECDD"}}>Languages: {Clanguages.map((e)=>{
                        return (e +(" "))
                    })}</li>
                    <li className="list-group-item" style={{backgroundColor: "#D4ECDD"}}>Borders: {Cborders.map((e)=> {

                       
                            return (e + (" "))
                    
                    })}</li>
                        
                    </ul>
                </div>
            </div>
        )
    }
}
