import React from 'react'

function App(){
  return<Greeting name="Peter"/>
}
function Greeting(props){
  return(
<div>Hello,{props.name}!Nice to meet you</div>
  )
}

export default App