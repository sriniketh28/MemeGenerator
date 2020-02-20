import React,{Component} from 'react'

class MemeGenerator extends Component{
  constructor(){
    super()
    this.state={
       topText:"",
       bottomText:"",
       randomImage: "http://i.imgflip.com/1bij.jpg",
       allMemeImages:[]
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
    .then(response=>response.json())
    .then(response=>{
      const {memes} = response.data
      this.setState({allMemeImages : memes})
    })
  }


  handleChange(event){
    const {name,value}=event.target
    this.setState(
      {
        [name]:value
      }
    )
  }

  handleSubmit(event){
      event.preventDefault()
      const ranNum=Math.floor(Math.random()*this.state.allMemeImages.length)
      const randomMemeImage=this.state.allMemeImages[ranNum].url
      this.setState({
        randomImage: randomMemeImage
      })


  }

  render(){
    return(
      <div>
      <form className="mform"  onSubmit={this.handleSubmit}>
      <input className="textf" placeholder="Top Text" type="text" name="topText" value={this.state.topText} onChange={this.handleChange} />
      <input className="textf" placeholder="Bottom Text" type="text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange} />
      <button type="submit" className="btn">Generate</button>
      </form>
      <div className="meme">
      <img src={this.state.randomImage} width="600px" height="610px" />
      <h1 className="top">{this.state.topText}</h1>
      <h1 className="bottom">{this.state.bottomText}</h1>
      </div>
      </div>
    )
  }
}

export default MemeGenerator
