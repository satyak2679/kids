import React from 'react'
import Image1 from "./360_F_256195054_b15ul96whBesUbpgra3cezJK1Q4uRuQs.jpg"
import Image2 from "./G1339040611.webp"
import Image3 from "./How-Children-Learn.jpg"
import Image4 from "./images (1).jpg"
import Image5 from "./images.jpg"
import Image6 from "./istockphoto-506102084-612x612.jpg"
import Image7 from "./istockphoto-639407632-612x612.jpg"
import Image8 from "./kids-learning-5684253.webp"
import './Gallery.css'
class Gallery extends React.Component {
  render() {
    return (
      <div>  <section class="gallery">
      <img src={Image1 } />
      <img src={Image2} />
      <img src={Image3}/>
      <img src={Image4} />
      <img src={Image5} />
      <img src={Image6} />
      <img src={Image7} />
      <img src={Image8}/>
</section>
<div class="anchor1">
<a href="">Get to Know us better!</a>
</div>
</div>
    )
  }
}

export default  Gallery