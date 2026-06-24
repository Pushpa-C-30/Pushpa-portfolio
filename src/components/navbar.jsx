import React, {useState, useEffect} from "react";
import "./navbar.css";

function Navbar(){

const [active, setActive] = useState("home");


useEffect(()=>{

const sections = document.querySelectorAll("section");

window.onscroll = () => {

let current = "";

sections.forEach(section=>{

const top = window.scrollY;
const offset = section.offsetTop - 100;
const height = section.offsetHeight;

if(top >= offset && top < offset + height){
current = section.id;
}

});

setActive(current);

};

},[]);


return(
<nav>



<div className="links">

<a className={active==="home"?"active":""} href="#home">Home</a>

<a className={active==="about"?"active":""} href="#about">About Me</a>

<a className={active==="education"?"active":""} href="#education">Education</a>

<a className={active==="skills"?"active":""} href="#skills">Skills</a>

<a className={active==="projects"?"active":""} href="#projects">Projects</a>

<a className={active==="experience"?"active":""} href="#experience">Experience</a>

<a className={active==="contact"?"active":""} href="#contact">Contact</a>

</div>

</nav>
)

}

export default Navbar;