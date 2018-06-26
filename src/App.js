import React, { Component } from 'react';
import './App.css';
import NavBar from './Layout/NavigationBar';
import About from './Layout/Pages/About';
import Resume from './Layout/Pages/Resume';
import Projects from './Layout/Pages/Project';
import Contact from './Layout/Pages/Contact';

class App extends Component {
  constructor() {
    super();
  this.state = {
    display: [
      { id: 'aboutwefwe', name: 'About Me'},
      { id: 'res', name: 'Resume'},
      { id: 'proj', name: 'Projects'},
      { id: 'con', name: 'Contact'}
            ],
    select: '1',

    color: 'white',

    Highlighted: [
      'red',
       'white',
       'white',
       'white'
    ],
      width:  window.innerWidth,
      height: window.innerHeight
  }
  this.updateDimensions = this.updateDimensions.bind(this);
}
  updateDimensions() {
    
     this.setState({
       height: window.innerHeight, 
       width: window.innerWidth
     });
  }
  
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    console.log('Welcome to my Portfolio! All code available at : "https://github.com/LucasClaude)"');
  }
    
  SwitchDisplay = (event) =>
  {
    const Display =  event.currentTarget.dataset.id;
    const color = event.currentTarget.dataset.id;
    
    //Highlighted color change on state
    if (color === '1'){
      const changeC = ['red','white','white','white'];
      this.setState({Highlighted:changeC});
    }
    if (color === '2'){
      const changeC = ['white','red','white','white'];
      this.setState({Highlighted:changeC});
    }
    if (color === '3'){
      const changeC = ['white','white','red','white'];
      this.setState({Highlighted:changeC});
    }
    if (color === '4'){
      const changeC = ['white','white','white','red'];
      this.setState({Highlighted:changeC});
    }
    //set state to the dataset recieve from the onClick from NavigationBar
    this.setState({select:Display})
  }

  render() {
      
      if (this.state.select === '1'){
        return (
         <div className="App">
           <div className ="NavBar">
          <NavBar
              SwitchTo = {this.SwitchDisplay}
              Name1 = {this.state.display[0].name}
              Name2 = {this.state.display[1].name}
              Name3 = {this.state.display[2].name}
              Name4 = {this.state.display[3].name}
              Display = {this.state.select}
              Hi = {this.state.Highlighted[0]}
              size = {this.state.width}
          /> 
         </div>
         <About
            Hello = {this.Hello}
            SwitchTo = {this.SwitchDisplay}
         />
      </div>
    );
  }
   //if state is resume
else if(this.state.select === '2'){
  return (
    <div className="App">
       <div className ="NavBar">
        <NavBar
          SwitchTo = {this.SwitchDisplay}
          Name1 = {this.state.display[0].name}
          Name2 = {this.state.display[1].name}
          Name3 = {this.state.display[2].name}
          Name4 = {this.state.display[3].name}
          Hi2 = {this.state.Highlighted[1]}
          size = {this.state.width}
        /> 
       </div>
        <Resume/>
    </div>

  );
}
//if state is projects
else if(this.state.select === '3'){
  return (
    <div className="App">
       <div className ="NavBar">
        <NavBar
        SwitchTo = {this.SwitchDisplay}
        Name1 = {this.state.display[0].name}
        Name2 = {this.state.display[1].name}
        Name3 = {this.state.display[2].name}
        Name4 = {this.state.display[3].name}
        size = {this.state.width}
        Hi3 = {this.state.Highlighted[2]}
        /> 
       </div>
          <Projects/>
    </div>
  );
}
//if state is contacts
else if(this.state.select === '4'){
  return (
    <div className="App">
       <div className ="NavBar">
        <NavBar
          SwitchTo = {this.SwitchDisplay}
          Name1 = {this.state.display[0].name}
          Name2 = {this.state.display[1].name}
          Name3 = {this.state.display[2].name}
          Name4 = {this.state.display[3].name}
          size = {this.state.width}
          Hi4 = {this.state.Highlighted[3]}
        /> 
       </div>
          <Contact/>
    </div>
  );
}
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
}
export default App;
