import { useEffect, useRef, useState } from "react";
import './App.css';

const socket = new WebSocket('wss://relay-vdjw.onrender.com', 'echo-protocol');

function App() {
    const msgInput = useRef(null);
    const roomId = useRef(null);
    const [messages, setMessage] = useState([
        {type: "msg-in", message: "How Are You Bud!!!"},
        {type: "msg-out", message: "Genius as Ever..."},
        {type: "msg-out", message: "let's take bio-modification to the next level..."}
    ]);

    useEffect(() => {
        socket.addEventListener('open', () => {
            socket.send(JSON.stringify({type: "notify", message: "New User Joined..."}));
        })
        joinRoom();
        msgInput.current.focus();
        socket.addEventListener('message', (event) => {
            const data = JSON.parse(event.data)
            console.log("Message: ", data.message); 
            setMessage(prevMessages => [
                ...prevMessages,
                {type: "msg-in", message: data.message}
            ])
        })
    }, [])
    
    function joinRoom(){
        roomId.current = window.prompt("Enter Room: ");
        if(!roomId.current) joinRoom();
        socket.send(JSON.stringify({type: "joinRoom", roomId: roomId.current})) 
    }

    const sendMsg = (e) => {
        e.preventDefault();
        const message = msgInput.current.value;
        if(!message || message == "") return;
        socket.send(JSON.stringify({type: "message", message: message, roomId: roomId.current}));
        setMessage(prevMessages => [
            ...prevMessages,
            {type: "msg-out", message: message}
        ])
        msgInput.current.value = "";
    }
    
  return (
   <>
   <div id="message-container">
        {
        messages.map((msg, id)=> {
            if(msg.type == "msg-in"){
            return <div key={id}><span className="message-in">{msg.message}</span></div>
            }
            else if (msg.type == "msg-out"){
            return <div key={id}><span className="message-out">{msg.message}</span></div>
            }
        })
        }
    <form id="input-bar">
        <input ref={msgInput} type="text" id="msg"/>
        <button type="submit" onClick={sendMsg}>Send</button>
    </form>
    </div>
   </> 
  );
}

export default App;