import React from 'react';
import Common from "./Common";
import bg from '../src/imge/bg.png';


const About = (props) =>{
    return(
    <>
   <Common 
   name="About us"
   imgsrc={bg}
   visit="Contact"
   pass="We provide multiple services which are listed here. Our team has a good knowledge of all this legal registration work. 
We are directly connected with government bodies to sort all types of problem.
We provide this services to our customers in minimum time and  affordable price also there are no hidden costs.
We also provide further support to your business."
       btname="contact now"

       
   />
    </>
    );
};
export default About;