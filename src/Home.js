import React from 'react'
import './Home.css'
class Home extends React.Component {
  render() {
    return (
      <div>
          <main class="parent2">
           <div class="child3">
             <h3>Kids Learning Center</h3>
                 <hr/>
                 <h1>New approach to Kids Education</h1>
                 <p>
                 Make education possible for every child. Join hands with an NGO and serve the poor.Donate education and help children attain age-appropriate learning. Make education possible for every child.Join hands with an NGO and serve the poor. Donate for education and help children attain age-appropriate learning.
                </p>
                <hr/>
                 <button class="button2">Learn more</button>
        
             </div>
            <div class="child4">
                <img src="https://www.pandasecurity.com/en/mediacenter/src/uploads/2016/07/schoolchildren-using-mobile-phone-at-classroom.jpg" id='image1' height="280px"  width="280px" />
                </div>
            </main>
      </div>
    )
  }
}

export default Home