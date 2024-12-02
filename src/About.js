import React from 'react'
import Image1 from "./Screenshot 2024-10-02 114528.png"
import Image2 from "./Screenshot 2024-10-02 114604.png"
import Image3 from "./Screenshot 2024-10-02 114706.png"
import "./About.css"
class About extends React.Component {
  render() {
    return (
      <div>   <div  class="artval">
       <article> 
       <h3>Enriching and Fun Early Years Matter Preschool Curriculum</h3>
       <hr/>
       <p>Our curriculum focuses on the holistic development of the child and is suitablymapped to age-appropriate objectives and outcomes. Based on Dr. HowardGardner’s Theory of Multiple Intelligences and Experiential Learning, theKLAY curriculum empowers the child to be able to establish a routine, followdirections, make friends and work independently.</p>
   </article>
   <img src={Image1} />
     </div>
   <div class="art2">
       <img src={Image2}/>
       <article>
       <h3>Socio-emotional & Physical Development</h3>
       <hr/>
       <p>
           Our curriculum focuses on the holistic development of the child and is suitablymapped to age-appropriate objectives and outcomes. Based on Dr. HowardGardner’s Theory of Multiple Intelligences and Experiential Learning, theKLAY curriculum empowers the child to be able to establish a routine, followdirections, make friends and work independently.</p>

  
   </article>         
</div>
   <div class="art3">
      <article> <h3>Milestones Tracking and Regular Assessments</h3>
       <hr/>
       <p>180 degree evaluation, milestone tracking and regular assessments everyterm, to let you know of your child’s progress. We also help counsel withstrategies, should a child require a more focused stimulation. </p>     
    </article>      <img src={Image3} />
   </div>

 
</div>
    )
  }
}

export default About