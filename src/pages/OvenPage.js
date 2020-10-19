import React, {Component} from "react";
import Hero from "../components/Hero";
import Service from "../components/services/Service"
import Oven1 from "../img/oven-cleaning/oven1.jpeg"
import Oven2 from "../img/oven-cleaning/oven2.jpeg"

class OvenPage extends Component {

    render() {
        return (
            <div>
                <Hero />
                <Service
                    left={<img src={Oven1} style={{width: "100%"}} alt="oven"/>}
                    right={<div>
                                <h2 style={{fontSize: "5rem"}}>Why use a company to clean your oven?</h2>
                                <p style={{fontSize: "2rem"}}>Do you enjoy cleaning your oven? Do you know anybody who finds it a fun chore? Getting an oven clean is one of the hardest, messiest and most unpleasant kitchen tasks.</p>
                                <p style={{fontSize: "2rem"}}>In addition to the elbow grease needed to get the job done, it’s a really time consuming task. Who wants to spend their free or weekend time tackling a grimy oven?</p>
                                <p style={{fontSize: "2rem"}}>Furthermore, a number of cleaning products that are available commercially are not effective and generate dreadful, noxious fumes. They can also be abrasive and often leave a chemical residue on surfaces.</p>
                                <p style={{fontSize: "2rem"}}>This residue poses a health risk when it comes into contact with food. Some oven cleaning products, combined with the wrong cleaning technique, can leave surfaces scratched and permanently damaged.</p>
                                </div>}
                />
                <Service
                    right={<img src={Oven2} style={{width: "100%"}} alt="oven"/>}
                    left={<div>
                                <p style={{fontSize: "2rem"}}>That’s where a professional cleaning company steps in. We handle this unpleasant but important job so that you don’t have to. </p>
                                <p style={{fontSize: "2rem"}}>We also offer you peace of mind because you know that your oven is clean, hygienic and free of toxic chemicals and fumes.</p>
                                </div>}
                />
            </div>
        )
    }
}

export default OvenPage;