import React,{Component} from 'react'

class Header extends Component{
  render(){
    return(
      <div>
      <header className="headback">
       <img
         src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
         alt="Troll Face"
         className="headimg"/>
        <p className="headtext">Meme Generator</p>
      </header>
      </div>
    )
  }
}

export default Header
