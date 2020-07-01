import React, { Component } from "react";
import MainLayout from "./master-layout";
import NavbarMain from "./commons/navbar-main";
import ImageGallery from "react-image-gallery";
class ProductPage extends Component {
  state = {
    images: [
      {
        original:
          "https://i5.walmartimages.com/asr/bd2ae2cd-5fe0-4a3b-96b4-f879afc0a8ff_1.409f445e55e65151298e3a7ffa694207.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        thumbnail:
          "https://i5.walmartimages.com/asr/bd2ae2cd-5fe0-4a3b-96b4-f879afc0a8ff_1.409f445e55e65151298e3a7ffa694207.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"
      },
      {
        original:
          "https://i5.walmartimages.com/asr/4c0e9b00-9424-4919-83bf-e9f73606a1c3_1.d98ab70fd29aa4de09e2405e69688a42.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        thumbnail:
          "https://i5.walmartimages.com/asr/4c0e9b00-9424-4919-83bf-e9f73606a1c3_1.d98ab70fd29aa4de09e2405e69688a42.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"
      },
      {
        original:
          "https://i5.walmartimages.com/asr/40e1671f-f1cb-46e8-802e-76d85ef545de_1.ea791888150ae94449d66e79fa304768.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        thumbnail:
          "https://i5.walmartimages.com/asr/40e1671f-f1cb-46e8-802e-76d85ef545de_1.ea791888150ae94449d66e79fa304768.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"
      }
    ]
  };

  render() {
    return (
      <MainLayout navbar={<NavbarMain cart={this.props.cart} />}>
        <div className="container">
          <div className="row mt-3">
            <div className="col-md-7">
              <ImageGallery
                showPlayButton={false}
                useTranslate3D={true}
                showFullscreenButton={false}
                thumbnailPosition={"left"}
                showNav={true}
                items={this.state.images}
              />
            </div>
            <div className="col-md-5">
              <h2>Title of the product here</h2>
              <p className="ratings"></p>
              <p className="single price">$5.99</p>
              <p className="single color">Color:Red/rouge</p>
              <div className="colors"></div>
              <p className="single size">Choose a Option</p>
              <div className="sizes"></div>
              {/* view walmart https://www.walmart.com/ip/Skechers-After-Burn-M-Fit-Slip-On-Walking-Shoe-Men-s/527142692 */}
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default ProductPage;
