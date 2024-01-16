import React from "react";
import '../Nav/Nav.css';

function Nav(){
    return(
        <>
<section class="nav-bar">
<div class="logo">Let's Go</div>
<ul class="menu">
    <li><a href="/home">home</a></li>
    <li><a href="/Tours">tours</a></li>
   
    <li><a href="/plan">Plan Your Trip</a></li>
</ul>
</section>
</>
    )}
export default Nav;