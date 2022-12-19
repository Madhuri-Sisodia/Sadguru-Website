import React from "react";
import nftrotating from "../components/videos/nftrotating.mp4";
import file from "../components/videos/file.mp4";

const Container=()=>{

    
    return(
        <div>
         <video style={{width:"100%",height:"100%"}} src={nftrotating}  autoPlay/>
            <video style={{width:"100%",height:"100%"}} src={file}  autoPlay/>
                <img style={{width:"1500px",height:"500px"}} src="./images/Earth3.jpg" alt="..." />
                <img style={{width:"1500px",height:"500px"}} src="./images/excitedgirl.jpg" alt="..." />
                <img style={{width:"1500px",height:"500px"}} src="./images/greenenergy.jpg" alt="..." />
                <img style={{width:"1500px",height:"500px"}} src="./images/circle.jpg" alt="..." />
                <img style={{width:"1500px",height:"500px"}} src="./images/littlegirl.jpg" alt="..." />
            </div>
    )
}
export default Container;