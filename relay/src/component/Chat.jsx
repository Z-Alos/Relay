import ChatArea from "./ChatArea"
import SidePane from "./SidePane"

import '../style/chat.css'

function Chat(){
    return(
        <>
        <div id="chat-grid">
            <SidePane />
            <ChatArea />
        </div>
        
        </>
    )
}

export default Chat;
