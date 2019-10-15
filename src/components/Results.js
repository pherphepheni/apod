import React,{Component} from 'react';
import './style.css';
 class Results extends Component{
    render(){

     const {date, explanation,hdurl,title,url} = this.props.results
         return(
             <div>
                <h3 className="text-center">{title} ({date})</h3>   
                <img className="image"src={url}/>
                <p className="mt-5">{explanation}</p>
                <button className="button btn btn-outline-info mb-5" type="button"><a href={hdurl} target="_blank">Ver imagen</a></button>
             </div>
         )
     }
 }

 export default Results;