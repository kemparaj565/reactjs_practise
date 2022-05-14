import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Web3 from 'web3/dist/web3.min.js';

class App extends Component{

  

//ComponentDidMount is latest lifecycle method of react ; Replacement to ComponentWillMount
  componentDidMount(){
    this.loadBlockChainData();
  }

  constructor(props){
    super(props);
    this.state = { account: ''};
  }

  async loadBlockChainData(){
    const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
    const network = await web3.eth.net.getNetworkType();
    console.log("network:",network);
    const accounts = await web3.eth.getAccounts();
    this.setState({account : accounts[0]});
    console.log("account:",accounts[0]);
  }

  render(){
    return (
     <div className="container">
          <h1>Hello World !!!!!</h1>
          <p>Your Account: {this.state.account}</p>
      </div>
    );
  }

}

export default App;
