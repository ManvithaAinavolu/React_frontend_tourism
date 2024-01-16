import React from "react";
import '../Plan/Plan.css';
import Nav from '../Nav/Nav.js';

function Plan(){
    return(
        <>
                 <Nav></Nav>

         <section id="plan-your-trip">
        <h2>Plan Your Dream Vacation</h2>
        <p className="text">Get started on creating the perfect itinerary for your upcoming adventure. Follow these steps to plan an unforgettable trip with us.</p>

         <div class="trip-step">
            <h3>Step 1: Choose Your Destination</h3>
            <p>Explore our amazing destinations and select the one that suits your interests and preferences. Whether it's a bustling city, serene nature spot, or historical landmarks, we've got you covered.</p>
            <div class="trip-images">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjluH0BuR83ndOp1A5Lf2beXv4L2LvPOfK2w&usqp=CAU" alt="Destination 1"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU5E2KV8GzIMZzhIJObBSeQ5NLjS7X9nMG0w&usqp=CAU" alt="Destination 2"/>
            </div>
        </div>

         <div class="trip-step">
            <h3>Step 2: Create Your Travel Itinerary</h3>
            <p>Plan your daily activities and sightseeing. Our interactive itinerary builder allows you to customize your schedule, ensuring you make the most of your time at each destination.</p>
            <div class="trip-images">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiHOgvpV5SRgu3fiVI0Z6lRtrz-wAzikbIpg&usqp=CAU" alt="Itinerary 1"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYe-3OCXNTiAHvT8W7HVwisWlg_YEj3JWong&usqp=CAU" alt="Itinerary 2"/>
            </div>
        </div>

         <div class="trip-step">
            <h3>Step 3: Choose Your Accommodations</h3>
            <p>Explore our curated list of hotels, resorts, and lodges. Select the accommodation that fits your budget and preferences, ensuring a comfortable stay throughout your trip.</p>
            <div class="trip-images">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgytd4vNGl02xbr4kiQSBGfyfF6QnS74Hwsw&usqp=CAU" alt="Accommodation 1"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbwLNEbbOpIDfiZoZXQddd3SRwNdbLJ62bXg&usqp=CAU" alt="Accommodation 2"/>
            </div>
        </div>

         <div class="trip-step">
            <h3>Step 4: Prepare Your Travel Essentials</h3>
            <p>Check our travel checklist to make sure you have everything you need. From travel documents to packing tips, we've got you covered for a smooth and stress-free journey.</p>
            <div class="trip-images">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQei0MFPtqvHnENFNq55txDVFVJCT7XR2GjOQ&usqp=CAU" alt="Essentials 1"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5gvJHCdGA_aG_p3j89QZ3BAJMU6LFiIWfA&usqp=CAU" alt="Essentials 2"/>
            </div>
        </div>

         <h2>Additional Tips and Resources</h2>
        <p>Explore our travel blog for insider tips, local recommendations, and guides to make your trip truly memorable. We're here to help you every step of the way!</p>
    </section>
        </>
    )
}
export default Plan;