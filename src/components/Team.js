import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
import './all.sass'
import { FaPlus,FaLinkedin,FaEnvelope } from 'react-icons/fa';
import PreviewCompatibleImage from '../components/PreviewCompatibleImageTeam'

const FeatureGrid = ({ gridItems }) => (
    <section id="team" className="pb-5">
        <div className="container">
            <h1 className="section-title h1">OUR TEAM</h1>
            <div className="row">
                {gridItems.map(item => (
                    <div className="col-xs-12 col-sm-6 col-md-4 team-card">
                        <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                            <div className="mainflip">
                                <div className="frontside">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <div className="img-fluid image-center"><PreviewCompatibleImage imageInfo={item} /></div>
                                            <h4 className="card-title">{item.name}</h4>
                                            <p className="card-subtitle card-text">{item.position}</p>
                                            <button className="btn btn-primary btn-sm"><i className="fa"><FaPlus className="front-icon"/></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="backside">
                                    <div className="card">
                                        <div className="card-body text-center mt-4">
                                            <h4 className="card-title-back">{item.name}</h4>
                                            <p className="card-text">{item.bio}</p>
                                            <ul className="list-inline" id="social-list">
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" href={item.linkedin}>
                                                        <i className="fa"><FaLinkedin className="back-icon"/></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" href={item.mail}>
                                                        <i className="fa"><FaEnvelope className="back-icon2"/></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      position: PropTypes.string,
      bio: PropTypes.string,
      linkedin: PropTypes.string,
      mail: PropTypes.string,
    })
  ),
}

export default FeatureGrid