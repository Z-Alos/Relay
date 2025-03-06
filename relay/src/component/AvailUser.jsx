import profilePic from '../assets/lord_aizen.jpg'


import '../style/availUser.css'

function AvailUser(){
    return(
        <>
        <div id="avail-user-container">
            <div className="avail-user-card">
                <div className="avail-user">
                   <div className="avail-user-info">
                    <img src={profilePic} alt="pp" className="avail-user-info-pp" />
                    <div className="avail-user-info-detail">
                        <p className="avail-user-username">Lord Aizen</p>
                        <p className="avail-user-last-message">hey there how are you</p>
                    </div>
                    </div> 
                </div>
                <p className="avail-user-timestamp"><span>10:15 </span><span>AM</span></p>
            </div>
            <div className="avail-user-card active-user-card">
                <div className="avail-user">
                   <div className="avail-user-info">
                    <img src={profilePic} alt="pp" className="avail-user-info-pp" />
                    <div className="avail-user-info-detail">
                        <p className="avail-user-username">Lord Aizen</p>
                        <p className="avail-user-last-message">hey there how are you</p>
                    </div>
                    </div> 
                </div>
                <p className="avail-user-timestamp"><span>10:15 </span><span>AM</span></p>
            </div>
            <div className="avail-user-card">
                <div className="avail-user">
                   <div className="avail-user-info">
                    <img src={profilePic} alt="pp" className="avail-user-info-pp" />
                    <div className="avail-user-info-detail">
                        <p className="avail-user-username">Lord Aizen</p>
                        <p className="avail-user-last-message">hey there how are you</p>
                    </div>
                    </div> 
                </div>
                <p className="avail-user-timestamp"><span>10:15 </span><span>AM</span></p>
            </div>
            
        </div>
        </>
    )
}

export default AvailUser;
