import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import profile from "../assets/profile.jpg";
import "./contact.css";


function Contact(){


const form = useRef();



const sendEmail = (e)=>{

e.preventDefault();


emailjs.sendForm(

"service_7tn0bjl",

"template_87axn7e",

form.current,

"47fPf8kVm4eXKK-RR"

)

.then(()=>{

alert("Message sent successfully!");

form.current.reset();

})

.catch(()=>{

alert("Message failed");

});


};



return(

<section id="contact" className="contact">


<h2>🤝 Let's Connect</h2>



<div className="contact-wrapper">



{/* LEFT SIDE */}


<div className="profile-contact">


<img 
src={profile}
alt="Pushpa C"
/>



<h3>Pushpa C</h3>


<h4>
 Full Stack Developer
</h4>


<p>
Location : Bangalore, Karnataka, India
</p>


<p>
Work Preference : Remote-Friendly
</p>


<p>
Availability : Open to Internships & Full-Time Roles
</p>




<div className="social-icons">


<a href="mailto:pushpac53643@gmail.com">

<FaEnvelope/>

</a>




<a
href="https://www.linkedin.com/in/pushpa-c-a73393324/"
target="_blank"
rel="noreferrer"
>

<FaLinkedin/>

</a>





<a
href="https://github.com/Pushpa-C-30"
target="_blank"
rel="noreferrer"
>

<FaGithub/>

</a>



</div>



</div>






{/* RIGHT SIDE */}



<div className="contact-box">






<p>

Have a project, collaboration or opportunity in mind?

<br/>

Feel free to send a message. I Look forward to connecting with you !

</p>





<form ref={form} onSubmit={sendEmail}>


<input

type="text"

name="user_name"

placeholder="Name"

required

/>




<input

type="email"

name="user_email"

placeholder="Email Address"

required

/>





<textarea

name="message"

placeholder="Message"

required

>

</textarea>





<button type="submit">

 Send Inquiry

</button>





<p className="secure">

🔒 This form is protected and messages are sent directly to me via EmailJS.

</p>



</form>



</div>



</div>



</section>

)


}


export default Contact;