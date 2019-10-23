import React from "react"
import Workers from './team.json';
import { FaPlus } from 'react-icons/fa';
import './team.css';

export class Team extends React.Component {
    render() {
        return (
            <section id="team" className="pb-5">
                <div className="container">
                    <div className="row">
                        {Workers.map((WorkersDetail, index) => {
                            return <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                    <div className="mainflip">
                                        <div className="frontside">
                                            <div className="card" id="test">
                                                <div className="card-body text-center">
                                                    <p><img className=" img-fluid" src={WorkersDetail.image} alt="card image" /></p>
                                                    <h4 className="card-title">{WorkersDetail.name}</h4>
                                                    <p className="card-text">{WorkersDetail.title}</p>
                                                    <a href="#!" className="btn btn-dark btn-sm"><i className="fa"><FaPlus /></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside shadow">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="card-title">{WorkersDetail.name}</h4>
                                                    <p className="card-text">{WorkersDetail.text}</p>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><a id="team-link" className="social-icon text-xs-center" href={WorkersDetail.link} target="_blank" rel="noopener noreferrer">
                                                            <p>Linked<span>in</span></p>
                                                        </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </section>

        )
    }
}

export default Team