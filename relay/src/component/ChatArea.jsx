import '../style/chatArea.css'
import MessageInput from './MessageInput'

function ChatArea(){
    return(
        <>
        <div id="chat-area-container">
            <div id="chat-area" >
            <div className="message-in">
                <p className="message-in-text">hey there how are you</p>
            </div>
            <div className="message-out">
                <p className="message-out-text">hey there how are you</p>
            </div>
            <div className="message-in">
                <p className="message-in-text">hey there how are you</p>
            </div>
            <div className="message-out">
                <p className="message-out-text">hey there how are you</p>
            </div>
            <div className="message-in">
                <p className="message-in-text">hey there how are you</p>
            </div>
            <div className="message-out">
                <p className="message-out-text">hey there how are you</p>
            </div>
            <div className="message-in">
                <p className="message-in-text">hey there how are you</p>
            </div>
            <div className="message-out">
                <p className="message-out-text">hey there how are you</p>
            </div>
            <div className="message-in">
                <p className="message-in-text">hey there how are you</p>
            </div>
            <div className="message-out">
                <p className="message-out-text">hey there how are you</p>
            </div>
            </div>
            <MessageInput />
        </div>

        
        </>
    )
}

export default ChatArea
