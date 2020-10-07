import React, {Component} from "react";
import Hero from "../components/Hero";
import Service from "../components/services/Service";

class ServicesPage extends Component {

    render() {

        return (
            <div>
                <Hero 
                    title="Our Services"
                    blurb="Take a look at the services that we offer" 
                />
                <Service
                    title="Oven Cleaning"
                    paragraph="This will be a description of our oven cleaning services"
                />
                <Service
                    title="General Cleaning"
                    paragraph="This will be a description of our general cleaning services"
                />
                <Service
                    title="Commercial Cleaning"
                    paragraph="This will be a description of our commercial cleaning services"
                />
            </div>
        )
    }
}

export default ServicesPage;