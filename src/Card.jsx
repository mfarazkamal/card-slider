import './Card.css'
import jayaImage from './assets/jaya_big_card.webp';
import arvindImage from './assets/arvind_big_card.webp';
import prekshaImage from './assets/preksha_big_card.webp';
import shubamImage from './assets/shubam_big_card.webp';
import jaya from './assets/jaya_pro.avif';
import arvind from './assets/arvind_pro.avif';
import preksha from './assets/preksha_pro.avif';
import shumbam from './assets/shubam_pro.avif';
import { useState } from 'react';
function Card() {

     // State to manage the currently displayed big image
  const [bigImage, setBigImage] = useState(jayaImage);
  const [selectedProfile, setSelectedProfile] = useState(jaya);
//   const [isSliding, setIsSliding] = useState(false);

  // Function to update the big image when a profile is clicked
//    const handleImageClick = (image) => {
//     if (image !== selectedProfile) {
//       setIsSliding(true);  // Trigger sliding animation
//       setTimeout(() => {
//         setBigImage(image);  // Update big image after animation starts
//         setSelectedProfile(image);  // Update selected profile
//         setIsSliding(false);  // Reset sliding animation after it's done
//       }, 300); // Time matches the CSS animation duration
//     }
//   };

  const handleImageClick = (image) => {
    setBigImage(image);
    setSelectedProfile(image);
  };

  return (
    <>
            <div className="cardContainer">

                <div className="leftSection">
                    <img src={bigImage} alt="" />
                </div>

                <div className="rightSection">
                    <div className="upperText">
                        <p className='mainTitle'>Real Stories, Real Success</p>
                        <p className='tagline'>Discover what our learners say about us</p>
                    </div>

                    <div className="images">
                        <img className={`profileCard ${selectedProfile === jayaImage ? 'active' : ''}`} src={jaya} alt="" onClick={() => handleImageClick(jayaImage)}/>

                        <img className={`profileCard ${selectedProfile === arvindImage ? 'active' : ''}`} src={arvind} alt="" onClick={() => handleImageClick(arvindImage)}/>
                        <img className={`profileCard ${selectedProfile === prekshaImage ? 'active' : ''}`} src={preksha} alt="" onClick={() => handleImageClick(prekshaImage)}/>
                        <img className={`profileCard ${selectedProfile === shubamImage ? 'active' : ''}`} src={shumbam} alt="" onClick={() => handleImageClick(shubamImage)}/>
                    </div>

                    <div className="lowerText">
                        <p><span>9K+</span> Successful Career Transitions | <span>175%</span> Average Salary Hike</p>
                    </div>
                </div>

            </div>
        </>
  )
}

export default Card
