import React, {Component} from "react";
import Hero from "../components/Hero";

class GalleryPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Hero 
                    title="Gallery"
                    blurb="Take a look at a selection of photos from a number of jobs that we have carried out" 
                />
            </div>
        )
    }
}

export default GalleryPage;