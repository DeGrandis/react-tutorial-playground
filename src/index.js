import React from 'react'
import ReactDom from 'react-dom'

import './index.css'
const test = "name of something2"
function Theapp(){
  return (
    <div>
        <h1>hello2 world</h1>
        <Comp name="rob"/>
        <h2>{test}</h2>
    </div>
    
  )
}

const Comp = (props) => {
console.log(props)

return (<p>{props.name}</p>)

}
ReactDom.render(<Theapp></Theapp>, document.getElementById('root'))