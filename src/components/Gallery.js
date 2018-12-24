/**
 * Created by Viwenya on 12/22/2018.
 */
import React, { Component } from "react";
import { Container, Row, Col } from "mdbreact";
import Lightbox from 'react-image-lightbox';
import image1 from '../img/IMG-1.jpg';
import image2 from '../img/IMG-2.jpg';
import image3 from '../img/IMG-3.jpg';
import image4 from '../img/IMG-4.jpg';
import image5 from '../img/IMG-5.jpg';


class LightBox extends Component {
state = {
  photoIndex: 0,
  isOpen: false,
  images: [
    image1,
    image2,
    image3,
    image4,
    image5
  ]
}

componentDidMount() {
        window.scrollTo(0, 0);
    }

renderImages = () => {
  let photoIndex = -1;
  const { images } = this.state;

return images.map(imageSrc => {
  photoIndex++;
  const privateKey = photoIndex;
  return (
    <Col md="4" key={photoIndex}>
      <figure>
        <img src={imageSrc} alt="Gallery" className="img-fluid" onClick={()=>
        this.setState({ photoIndex: privateKey, isOpen: true })
        }
        />
      </figure>
    </Col>
    );
  })
}

render() {
const { photoIndex, isOpen, images } = this.state;
  return (
      <Container className="mt-5">
          <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">School Gallery</h2>
        <div className="mdb-lightbox no-margin">
          <Row>
            {this.renderImages()}
          </Row>
        </div>
        {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          imageTitle={photoIndex + 1 + "/" + images.length}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length
            })
            }
          />
        )}
      </section>
      </Container>
    );
  }
}

export default LightBox;