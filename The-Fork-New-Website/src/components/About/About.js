import React from 'react'
import "./About.css"
import sr from '../Scrollreveal/ScrollReveal'
import { Link } from "gatsby"

export class About extends React.Component {

    componentDidMount = () => {
        // Header and text
        const configHeader = {
            origin: 'bottom',
            duration: 1000,
            delay: 150,
            distance: '200px',
            scale: 1,
            easing: 'ease',
        }
        sr.reveal(this.refs.box1, configHeader)

        const configText = {
            origin: 'bottom',
            duration: 1000,
            delay: 400,
            distance: '200px',
            scale: 1,
            easing: 'ease',
        }
        sr.reveal(this.refs.box2, configText)

        // Quotes
        const configWord = {
            origin: 'bottom',
            duration: 1000,
            delay: 500,
            distance: '100px',
            scale: 1,
            easing: 'ease',
        }
        sr.reveal(this.refs.box3, configWord)

        const configWord2 = {
            origin: 'bottom',
            duration: 1000,
            delay: 800,
            distance: '100px',
            scale: 1,
            easing: 'ease',
        }
        sr.reveal(this.refs.box4, configWord2)

        const configWord3 = {
            origin: 'bottom',
            duration: 1000,
            delay: 500,
            distance: '100px',
            scale: 1,
            easing: 'ease',
        }
        sr.reveal(this.refs.box5, configWord3)
    }

    render() {
        return (
            <section class="text-center my-5 container">

                <h2 ref="box1" class="h1-responsive font-weight-bold my-5">Who are we?</h2>
                <p ref="box2" class="lead grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

                <div class="row">

                    <div class="col-md-4">
                        <h5 ref="box3" class="font-weight-bold my-4">Singular</h5>
                    </div>

                    <div class="col-md-4">
                        <Link to="/Team"><button id="team-btn" ref="box4" type="button" class="font-weight-bold shadow-lg text-light btn my-3">The team</button></Link>
                    </div>

                    <div class="col-md-4">
                        <h5 ref="box5" class="font-weight-bold my-4">Blockchain</h5>
                    </div>

                </div>

            </section>
        )
    }
}


export default About