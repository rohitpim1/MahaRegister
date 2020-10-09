import React from 'react';
import bg from '../src/imge/bg.png';
import { NavLink } from 'react-router-dom';

const Common = (props) =>{
    return(
    <>

    <section id="header" className="d-flex align-item-center">
    <div className="container-fluid nav_bg">
<div className="row">
<div className="col-10 mx-auto">
<div className="row">
<div className="col-md-6 pt-5 pt-lg-0 order-2 order-1g-1">

    <h1>{props.name} <strong className="brand-name">maha register</strong></h1>
    <p>{props.pass}</p>
    <h4 className="my-3">
{props.subname}</h4>
    <div className="mt-03">
        <NavLink to={props.visit} className="btn-get-started">
            {props.btname}
        </NavLink>
    
    </div>
</div>
<br />
<br />


<div className="col-lg-6 order-1 order-md-2 row justify-content-end header-img">
<img 
  src={bg}
  
  alt="home img"
  />
  </div>
</div>
</div>
</div>
</div>
  
    </section>
  
   
    </>
    );
};
export default Common;