import profilePic from '../assets/lord_aizen.jpg'

import '../style/sidePaneProfile.css'

function SidePaneProfile(){
    return(
        <>
        <div id="side-pane-user-profile">
            <div id="profile-info">
            <div id="user-image">
                <img src={profilePic} alt="user profile" />
            </div>
            <div id="availability">online</div>
            </div>
            <p id="current-username">Lord Aizen</p>
            <p id="current-user-desc">~Soon I'll be sixty years old</p>
        </div>
        
        </>
    )
}

export default SidePaneProfile
