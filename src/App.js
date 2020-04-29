import React from 'react';
import './App.css';
import Profile from './Profile';
import Data from './data/data.json';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import image from './img/mypic.jpg';

function App(){
  var info=Data.profiles;
  return(
    <section>

       <BrowserRouter>
       <header className="header">
         <Link to={{pathname:"/venkatesh-profile"}}> Home </Link>
      {info.map((k,l)=>(

        <Link to={{pathname:"/profile",data:{id:l}}} key={l}>{"Profile"+(l+1)}</Link>
      ))}

    </header> <br/> <br/>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/venkatesh-profile" component={Home} />


      </BrowserRouter>


      </section>
  )
}

let Home=()=>{
  var info=Data.profiles;
return(
<section className="parent">
{info.map((i,index)=>(
        <div className="card" key={index}>
          <div className="card-top">
          <img src={image} width="200" alt="mypic" />
          <h2> {i.basicInformation.name} </h2>
      <h5> <em> {i.basicInformation.role}</em></h5>
      </div>

      <div className="card-bottom">
        <a href={"mailto:"+i.basicInformation.email}> {i.basicInformation.email}  </a> <br />

        <a href={"tel:"+i.basicInformation.mobile}> {i.basicInformation.mobile}</a> <br />
        <Link to={{pathname:"/profile",data:{id:index}}}><p className="bu"> View Profile</p></Link>
      </div>
        </div>
      ))}
</section>
)
}

export default App;
