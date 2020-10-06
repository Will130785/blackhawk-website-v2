import React, {Component} from "react";

import Hero from "../components/Hero";
import Reputation from "../components/home/Reputation";
import Family from "../components/home/Family";
import Gallery from "../components/home/Gallery";

class HomePage extends Component {

    render() {
        return (
            <div>
                <Hero 
                    title="Blackhawk Oven Cleaning & Property Services"
                    blurb={<div>
                            <p>Our Success and reputation is based on our professionalism and quality of Oven and Cooker cleaning results. Over 10 years of experience, We place a lot of importance on customer service and Satisfaction and with this we ensure all our processes are simple and hassle free, so you have a peace of mind.</p>
                            <p>We provide the highest standard of domestic oven cleaning services at competitive prices. Our experienced and trained team of professional oven cleaners have the talent required for everything oven related including hobs, grills and extractors. On top of ovens we clean microwaves and barbeques too.</p>
                        </div>}
                />
                <Reputation />
                <Gallery />
                <Family />
            </div>
        )
    }
}

export default HomePage;