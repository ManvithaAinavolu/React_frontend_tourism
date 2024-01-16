import React from "react";
import '../Tours/Tours.css';
import Nav from '../Nav/Nav.js';
 
function Tours(){
    return(
<>
<Nav></Nav>
<div class="container">
        <div class="tour-card">
            <img class="tour-image" src="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/andhra-famous.jpg" alt="Tour 1"/>
            <div class="tour-details">
                <h2>Andhra Pradesh</h2>
                <p>Andhra Pradesh is truly a beautiful place! From the stunning beaches of Visakhapatnam to the enchanting hills of Araku Valley, the state is filled with natural wonders. The rich cultural heritage, delicious cuisine, and warm hospitality make it even more special. 😊🌴🌺</p>
                <button>BEST_PLACES</button>
            </div>
        </div>
        <div class="tour-card">
            <img class="tour-image" src="https://www.ibef.org/assets/images/states/Karnataka-2.jpg" alt="Tour 2"/>
            <div class="tour-details">
                <h2>Karnataka</h2>
                <p>Karnataka is a breathtaking state! From the majestic Western Ghats and its lush forests to the ancient ruins of Hampi and the stunning beaches of Gokarna, there is so much natural beauty to behold. The rich cultural heritage, vibrant festivals, and mouthwatering cuisine make Karnataka a truly enchanting place to visit. 😊🌳🏰</p>
                <button>BEST_PLACES</button>
            </div>
        </div>
	<div class="tour-card">
            <img class="tour-image" src="https://www.keralatourpackages.com/munnar-hotels/img/blanket-munnar.jpg" alt="Tour 2"/>
            <div class="tour-details">
                <h2>Kerala</h2>
                <p>Kerala, "God's Own Country," is simply breathtaking! From the tranquil backwaters of Alleppey to the picturesque hills of Munnar, the state is a paradise of natural beauty. The lush green landscapes, serene beaches, and vibrant culture make Kerala a truly enchanting destination. Don't forget to try the delicious local cuisine and experience the warm hospitality of the people. 😊🌴🏞</p>
                <button>BEST_PLACES</button>
            </div>
        </div>
	<div class="tour-card">
            <img class="tour-image" src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/06/mahabalipuram-cover.jpg" alt="Tour 2"/>
            <div class="tour-details">
                <h2>Tamil Nadu</h2>
                <p>Tamil Nadu is a land of incredible beauty! From the magnificent temples of Madurai and Thanjavur to the serene beaches of Marina and Mahabalipuram, the state offers a rich tapestry of history, culture, and natural wonders. The vibrant festivals, delicious cuisine, and warm hospitality make Tamil Nadu a truly captivating destination. 😊🌴🏰</p>
                <button>BEST_PLACES</button>
            </div>
        </div>
	<div class="tour-card">
            <img class="tour-image" src="https://www.go2india.in/ap/images/hyderabad-charminar.jpg" alt="Tour 2"/>
            <div class="tour-details">
                <h2>Telangana</h2>
                <p>Telangana is a beautiful place with its own unique charm. From the historic city of Hyderabad with its iconic Charminar and delicious biryani, to the serene lakes and lush greenery of Warangal, there is so much to explore and appreciate. The state's rich cultural heritage and warm people make it a truly special destination. 😊🏰🌳</p>
                <button>BEST_PLACES</button>
            </div>
        </div>
    </div>

</>
    )
}
export default Tours;