import React from 'react';
import './App.css';
import Data from './data/data.json';
import image from './img/mypic.jpg';

class Profile extends React.Component{
    render(){
        var indexValue=this.props.location.data.id;
        var specificProfile=Data.profiles[indexValue];
        return(
            <section className="parent">
                <div className="card">
                    <div className="card-top">
                  <img src={image} width="150" alt="mypic" />
        <h3> {specificProfile.basicInformation.name} </h3>
    <em> {specificProfile.basicInformation.email} </em>

 <p>{specificProfile.basicInformation.d}</p>
                     </div>

                     <div className="card-bottom">
<a href={"mailto:"+specificProfile.basicInformation.email}> {specificProfile.basicInformation.email}  </a> <br />

<a href={"tel:"+specificProfile.basicInformation.mobile}> {specificProfile.basicInformation.mobile}</a>
                     </div>

                </div>
                <div className="card2">
                    <div className="card-bottom">
                        <h2> Educational Details</h2>
                    </div>

                    <div className="card-top">
                        {specificProfile.education.map((i,j)=>(
                        <ul>
                            <li> {i.degree} </li>
                        <p> {i.institution} </p>
                        </ul>
                        ))}
                    </div>


                    <div className="card-bottom">
                        <h2> Technical Skills</h2>
                    </div>

                    <div className="card-top">
                        {specificProfile.skills.map((i,j)=>(
                        <ul>
                            <li> {i} </li>
                        </ul>
                        ))}
                    </div>



                    <div className="card-bottom">
                        <h2> Certifications</h2>
                    </div>

                    <div className="card-top">
                        {specificProfile.cert.map((i,j)=>(
                        <ul>
                            <li> {i} </li>
                        </ul>
                        ))}
                    </div>
                    </div>


            </section>
        )
    }
}

export default Profile;
