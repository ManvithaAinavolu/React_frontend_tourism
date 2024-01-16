import React, { useState } from "react";
import '../Home/Home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav.js';
function Home(){
    // const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

const handleSearch = async (e) => {
  e.preventDefault();

   const term = e.target.elements.searchInput.value.trim();

  if (!term) {
    console.error('Search term is empty');
     return;
  }

  try {
    const response = await axios.get(`http://localhost:4000/places?search=${term}`);
    setSearchResults(response.data);
    console.log(response);
  } catch (error) {
    console.error('Error searching places:', error);

    if (error.response && error.response.status === 400) {
      console.log('Bad request - Check your search term');
     } else {
      console.log('An unexpected error occurred');
     }
  }
};



    return(
        <>
         <Nav></Nav>
        
        <section class="banner">
            <div class="banner-text-item">
                <div class="banner-heading">
                    <h1>Find your Next tour!</h1>
                </div>
                <form class="form" onSubmit={handleSearch}>
                <input type="text" name="searchInput" list="mylist" placeholder="Where would you like to go?" />
                    <datalist id="mylist">
                        <option>Meenakshi Amman Temple</option>
                        <option>Mysore Palace</option>
                        <option>Kovalam Beach</option>
                        <option>Charminar</option>
                        <option>Vivekananda Rock Memorial</option>
                        <option>Hampi</option>
                        <option>Thekkady</option>
                        <option>Golconda Fort</option>
                        <option>Ooty</option>
                        <option>Lepakshi</option>


                    </datalist>
                    <input type="submit" class="button" value="Submit"/>
                </form>
            </div>
        </section>
        <section class="search-results">
  <ul>
  {searchResults.map((result) => (
    
  <li key={result[0]} className="search-result-item">
    <div className="image-container">
      <img src={result[5]} alt={result[1]} />
    </div>
    <div className="text-container">
      <h3>{result[1]}</h3>
      <p>{result[3]}</p>
      <p>{result[4]}</p>
    </div>
    <Link to="/Tours">
        <button className="know-more-button">Know More</button>
      </Link>
  </li>
))}


  </ul>
</section>
 
        <section class="services">
             
            <div class="service-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdiL71bb70-O34AYj8umGeXbpnbjrHpd4F00tW7bk4s2KIY-cyOu2aMQvQVqdB3xJs9UQ&usqp=CAU"/>
                <h2>Our Local Guides Are Best</h2>
            </div>
            <div class="service-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPAMShjITACEQPEPR00i7zqdaBFamMwZDu89wmfTxhrxuUCTCG3hUTCWDFwYpxOcmYrK4&usqp=CAU"/>
                <h2>100% Trusted Tour Agency</h2>
            </div>
            <div class="service-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPGl7DC0M50tS1AEIs7bflrfPEOWYNJ5FXXw&usqp=CAU"/>
                <h2> Travel Experience</h2>
            </div>
            <div class="service-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOpGcJfjh3-O-0pUF6QimXSlu_N0v-5xW0fF90AN8HK_BkAD-CMN051vCWsenRooIsrQ&usqp=CAU"/>
                <h2> Our Travelers are Happy</h2>
            </div>
        </section>
         <section class="places">
            <div class="places-text">
                 <h2>Mostly Viewed</h2>
            </div>

            <div class="cards">
                <div class="card">
                    <div class="zoom-img">
                        <div class="img-card">
                            <img
                                src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/07/Tirupati-Temple-at-night.jpg"/>
                        </div>
                    </div>

                    <div class="text">
                        <h2>Tirupati</h2>
                        <p class="cost">₹1500 / Per Person</p>
                        <div class="card-box">
                            <p class="time">🕓 3 Days</p>
                            <p class="location">📍 Tirupati, Ap</p>
                        </div>
                    </div>

                </div>
                <div class="card">
                    <div class="zoom-img">
                        <div class="img-card">
                            <img src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/04/16190915/srisailam2.jpg"/>
                        </div>
                    </div>

                    <div class="text">
                        <h2>SriSailam</h2>
                        <p class="cost">₹1500 / Per Person</p>
                        <div class="card-box">
                            <p class="time">🕓 2 Days</p>
                            <p class="location">📍 SriSailam, AP</p>
                        </div>
                    </div>

                </div>
                <div class="card">
                    <div class="zoom-img">
                        <div class="img-card">
                            <img src="https://static.javatpoint.com/temples/images/shirdi-sai-baba-temple.png"/>
                        </div>
                    </div>

                    <div class="text">
                        <h2>Shiridi</h2>
                        <p class="cost">₹7000 / Per Person</p>
                        <div class="card-box">
                            <p class="time">🕓 5 Days</p>
                            <p class="location">📍 Shiridi,Maharastra</p>
                        </div>
                    </div>

                </div>
                <div class="card">
                    <div class="zoom-img">
                        <div class="img-card">
                            <img
                                src="https://rishikeshdaytour.com/blog/wp-content/uploads/2023/03/Badrinath-Temple-History.jpg"/>
                        </div>
                    </div>

                    <div class="text">
                        <h2>Rishikesh</h2>
                        <p class="cost">₹4000 / Per Person</p>
                        <div class="card-box">
                            <p class="time">🕓 6 Days</p>
                            <p class="location">📍Badrinath,UK</p>
                        </div>
                    </div>

                </div>
                <div class="card">
                    <div class="zoom-img">
                        <div class="img-card">
                            <img src="https://images.thequint.com/thequint%2F2023-06%2F15654156-c8c8-4337-ba19-2e413700c445%2FFyRA7fhaYAIbnGc.jfif?auto=format%2Ccompress&fmt=webp&width=720&w=1200"/>
                        </div>
                    </div>

                    <div class="text">
                        <h2>Golden Temple</h2>
                        <p class="cost">₹4700 / Per Person</p>
                        <div class="card-box">
                            <p class="time">🕓 4 Days</p>
                            <p class="location">📍 Amritsar, Punjab</p>
                        </div>
                    </div>

                </div>
                <div class="card">
                    <div class="zoom-img">
                        <div class="img-card">
                            <img
                                src="https://static.toiimg.com/img/85488669/Master.jpg"/>
                        </div>
                    </div>

                    <div class="text">
                        <h2>Taj Mahal</h2>
                        <p class="cost">₹3500 / Per Person</p>
                        <div class="card-box">
                            <p class="time">🕓 3 Days</p>
                            <p class="location">📍Agra,UttarPradesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         <section class="about">
            <div class="about-img">
                <img src="https://files.cdn.printful.com/o/upload/blog-post-img-upload/b7/b78375d2fa568acba7b3a961dc76fa3b_t"/>
            </div>
            <div class="about-text">
                <small></small>
                <h2>Lets Go !! a place where you tour all over India</h2>
                <p>We started this based on the problem statement registerd in Smart India Hackathon(SIH)
                    We are enlightened to give solution for that problem as a web application<br/>
                    <small>For more info click on About Us</small>
                </p>

                <label><input type="checkbox" checked/>The places you prefered are guided</label>
                <label><input type="checkbox" checked/>For any Queries you can contact us</label>
                <label><input type="checkbox" checked/>Your Details are Well secured</label>
                <label><input type="checkbox" checked/>We appreciate your feedback</label>
             </div>
        </section>

       
        <div class="footer">
    <div class="links">
        <h3 className="foot">Quick Links</h3>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/reg">Register</a></li>
            <li><a href="/Tours">Tours</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
    <div class="links">
        <h3 className="foot">Follow Us</h3>
        <ul>
            <li><a href="mailto:manvithaainavolu@gmail.com">Email</a></li>
            <li><a href="https://www.instagram.com/example/">Instagram</a></li>
            <li><a href="https://www.facebook.com/example/">Facebook</a></li>
        </ul>
    </div>
    <div class="links">
        <h3 className="foot">Quote of the Day</h3>
        <p className="text">"Start blooming yourself like a flower,because you never knnow where it ends,As long you bloom as much you learn."</p>
    </div>
    <div class="links">
        <h3>&copy; 2024 Copy Rights Reserved By Manvitha Ainavolu</h3>
    </div>
</div>

        </>
    )
}
export default Home;
