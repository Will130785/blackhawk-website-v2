import React, {Component} from "react";
import Carousel from "react-bootstrap/Carousel";
import Family from "../../img/home/family.jpeg";

class SlideShow extends Component {

    render() {

        const styles = {
            carousel: {
                item: {
                    height: "60rem"
                },
                picture: {
                    height: "100%",
                }
            }
        }
        return (
            <div>
                    <Carousel>
                        <Carousel.Item style={styles.carousel.item}>
                            <img
                                className="d-block w-100"
                                src={Family}
                                alt="First slide"
                                style={styles.carousel.picture}
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={styles.carousel.item}>
                            <img
                                className="d-block w-100"
                                src={Family}
                                alt="First slide"
                                style={styles.carousel.picture}
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={styles.carousel.item}>
                            <img
                                className="d-block w-100"
                                src={Family}
                                alt="First slide"
                                style={styles.carousel.picture}
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
        )
    }
}

export default SlideShow;