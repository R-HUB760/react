import React, {useState ,Component } from 'react'


function Cond1() {

 const [state, setstate] = useState(0);
  const chhickeV = () =>{
    setstate(state + 1)
  }
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={chhickeV}>Click</button>
    </div>
  )
}

function Cond2() {
  return (
    <div>Log In here</div>
  )
}

export default class State extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gttResuklts: ""
    }
  }

  // On Events Handles

  // handleIncrement = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }
  // handleDecrement = () => {
  //   this.setState({
  //     count: this.state.count - 1
  //   })
  // }


  // InputChangeV = (e) => {
  //   this.setState({
  //     gttResuklts: e.target.value
  //   }, () => {
  //     console.log(this.state.gttResuklts)
  //   })

  // }

  render() {

    return (
      <div>
        <Cond1 />
        <h1>eventHandler: <input type="text" onChange={this.InputChangeV} /></h1>
        <h1>Print Value: {this.state.gttResuklts} </h1>
        {/* <h1>State setState Funcrions Count:  {this.state.count}</h1>
        <h2>Conditional Statement : {count && <Cond1 /> || count==0 && <Cond2 />}</h2>
        <button onClick={this.handleIncrement} className='m-5' disabled={count === 15 ? true : false}>handle Increment</button>

        <button onClick={this.handleDecrement} className='m-5' disabled={count === 0 ? true : false }>handle Decrement</button> */}
      </div>
    )
  }
}
