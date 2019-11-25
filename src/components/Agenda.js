import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
import './all.sass'

const FeatureGrid = ({ gridItems }) => (
  <div className="container">
    <div className="row">
      {gridItems.map(item => (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div className="tile shadow">
            <div className="wrapper">
              <div class="header">
                <strong>{item.title}</strong>
              </div>
              <div className="banner-img">
                <img src={require("../../static/img/berries.jpg")} alt="" />
              </div>
              <div className="date">
                <strong>{item.date}</strong>
              </div>
              <div className="dates">
                <div className="start">
                  <strong>STARTS</strong> {item.start}
                  <span></span>
                </div>
                <div className="ends">
                  <strong>ENDS</strong> {item.end}
                </div>
              </div>
              <div className="stats">
                <div>
                  <strong>Trainer</strong>{item.trainer}
                </div>
                <div>
                  <strong>Price</strong>€{item.price}
                </div>
              </div>
              <div className="footerAgenda">
                <a href="bla.com" className="Cbtn Cbtn-primary">Book&nbsp;Now&nbsp;!</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      start: PropTypes.string,
      end: PropTypes.string,
      trainer: PropTypes.string,
      price: PropTypes.string,
    })
  ),
}

export default FeatureGrid
