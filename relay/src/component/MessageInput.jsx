import attachImg from '../assets/attach.png'
import sendImg from '../assets/send.png'

import '../style/messageInput.css'


function MessageInput(){
    return(
        <>
        <div id="message-input-bar-container">
        <div id="message-input-bar">
            <input type="text" id="message-input-bar-input" placeholder='Type a Message...'/>
            <div id="message-input-option">
                <img src={attachImg} id="message-input-option-attach" alt="attach" />
                <div id="message-input-option-send">
                    <img src={sendImg} alt="send" />
                </div>
            </div>
        </div>
        </div>
        
        </>
    )
}

export default MessageInput;
