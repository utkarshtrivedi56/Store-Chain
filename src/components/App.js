import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import Images from '../abis/Image.json';
import ParticlesContainer from './ParticleContainer';

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) 
// leaving out the arguments will default to these values 
// bigchain can be added here

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
    this.setState({ imgHash: "QmSUfYNFBoiE8xw62kCMVCwBCbqMnRLJq7WHYudEuTt5Co" })
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = Images.networks[networkId]
    if(networkData) {
      const contract = web3.eth.Contract(Images.abi, networkData.address)
      this.setState({ contract: contract })
      const imgHash = await contract.methods.get().call()
      this.setState({ imgHash: imgHash })
    } else {
      window.alert('Smart contract not deployed to detected network.')
    }
  }

    state = {
      imgHash: "QmSUfYNFBoiE8xw62kCMVCwBCbqMnRLJq7WHYudEuTt5Co",
      contract: null,
      web3: null,
      buffer: null,
      account: null
    };
  

  captureFile = (event) => {
    event.preventDefault()
    const file = event.target.files[0];
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () =>{
      this.setState({buffer:Buffer(reader.result)})
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log("Submitting file to ipfs...")
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('Ipfs result', result)
      const imgHash = result[0].hash
      this.setState({imgHash: imgHash})
      if(error) {
        console.error(error)
        return
      }
       this.state.contract.methods.set(imgHash).send({ from: this.state.account }).then((r) => {
         this.setState({ imgHash: imgHash });
       })
    }) 
  }
  
  // dafualt hash  = "QmSUfYNFBoiE8xw62kCMVCwBCbqMnRLJq7WHYudEuTt5Co"
  // url of default image = https://ipfs.infura.io/ipfs/QmSUfYNFBoiE8xw62kCMVCwBCbqMnRLJq7WHYudEuTt5Co

  render() {
    let url = "https://ipfs.infura.io/ipfs/" + this.state.imgHash
    return (
      <div>
         
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0 text white" href="https://github.com/utkarshtrivedi56" target="_blank" rel="noopener noreferrer">
            <small className="text-white">
              Store-Chain
            </small>
          </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-white">
                {this.state.account}
              </small>
            </li>
          </ul>
        </nav>
        <div className="particle">
        {/* <ParticlesContainer/> */}
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                  <img src={url} className='Applogo' alt="logo" />
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <h2 color='white '>Add File</h2>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <form onSubmit={this.onSubmit} >
                  <input type='file' onChange={this.captureFile} />
                  <input type='submit'/>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                </form>
              </div>
            </main>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
