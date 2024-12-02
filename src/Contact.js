import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Contact.css'

 class Contact extends React.Component {
    
  render() {
  

    
    return (
      <div>
        <main class="content1">
            <article class="art1">
                <h3>Full Stack Developer Training & Placements</h3>
                <hr/>
                <p>To be an effective full-stack developer, you should acquire and continue upgrading yourknowledge of applicable programming language skills. Consider taking courses in relevantlanguages—like Python, HTML, CSS, and Javascript.</p>
                <p>To be an effective full-stack developer, you should acquire and continue upgrading yourknowledge of applicable programming language skills. Consider taking courses in relevantlanguages—like Python, HTML, CSS, and Javascript.</p>
                <hr/>
                <button class="button1">Learn more</button>

            </article>
            
               
                <form>
                    <label id='labelName'> Fill & Get upto 25% OFF in Courese Fees</label>
                    <br/>
                    <input placeholder="Name *"/>
                    <br/>
                    <input placeholder="10 Digit phone number *"/>
                    <br/>
                    <input placeholder="Email*"/>
                    <br/>
                    <input placeholder="Message"/>
                    <br/>
                    <button class="button2">I am intrested, Tell me more..</button>
                </form>

              </main>
               
              {/* <button onClick={()=>{
        this.props.navigate('/home')
    }}>Back Home</button>     */}
            
           
    

       
      </div>

    )
  }
}


export  function Navigation(){
    const navigate=useNavigate();
    return (
        <div>
            <Contact navigate={navigate}/>
        </div>
    )
}
