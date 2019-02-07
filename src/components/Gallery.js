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
import image22 from '../img/IMG-22.jpg';
import image23 from '../img/IMG-23.jpg';
import image24 from '../img/IMG-24.jpg';
import image25 from '../img/IMG-25.jpg';
import image26 from '../img/IMG-26.jpg';
import image27 from '../img/IMG-27.jpg';
import image28 from '../img/IMG-28.jpg';
import image29 from '../img/IMG-29.jpg';
import image30 from '../img/IMG-30.jpg';
import image31 from '../img/IMG-31.jpg';
import image32 from '../img/IMG-32.jpg';






class LightBox extends Component {
state = {
  photoIndex: 0,
  isOpen: false,
  images: [
    image1,
    image2,
    image3,
    image4,
    image5,
      image22,
      image23,
      image24,
      image25,
      image26,
      image27,
      image28,
      image29,
      image30,
      image31,
      image32
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