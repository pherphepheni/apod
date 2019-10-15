import React,{Component} from 'react';
import axios from 'axios';
import {url} from './components/Constants';
import Results from './components/Results';

class App extends Component {
  
  state = {
      results : {},
      charge: false
  }
  componentDidMount(){
    this.requestAPI();
  }
  requestAPI = () =>{
    axios.get(url)
    .then(
      this.setState({
        charge:true
      })
    )
    .then(query=>{
      setTimeout(()=>{
        this.setState({
          charge:false,
          results : query.data
        })
      },2000);
      })
  
  }
  
  render(){

    const charge = this.state.charge;
    let view;
    if(charge){
      view = 
         <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
         </div>
    }else{
      view =
      <Results
      results = {this.state.results}/>

    }
    return (
      <div className="App">
        <header className="App-header">  
        </header>
        <div className="container">
          <h2 className="text-center">NASA APOD</h2>
            {view}
        </div>  
      </div>
    );
  }
  
}

export default App;
