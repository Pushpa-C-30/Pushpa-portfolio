import React from "react";
import "./home.css";
import profile from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";


function Home(){

return(

<section id="home" className="home">


<div className="home-left">

<img 
src={profile}
alt="Pushpa"
className="profile-img"
/>


<h1>
Pushpa C
</h1>


</div>





<div className="home-right">

<h2 className="thought">

<span>Building ideas into</span> 
<br/>
real-world applications.

</h2>



<div className="role">

🎓 Final Year BCA Student

</div>




<p className="tagline">

 Full Stack Developer |  Tech Enthusiast |  Disciplined Coder

</p>

<div className="buttons">


<a href="#projects">

<button>
 Explore Projects
</button>

</a>


<a href={resume} download>

<button>
 Download Resume
</button>

</a>


</div>


<div className="stats">


<div>
 Problem solver
</div>


<div>
 3+ Projects Built
</div>


<div>
Web Developer
</div>


</div>

</div>

</section>
)
}
export default Home;