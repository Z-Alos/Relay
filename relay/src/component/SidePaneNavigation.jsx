import addBtn from '../assets/add.png'
import serachBtn from '../assets/search.png'


import '../style/sidePaneNavigation.css'

function SidePaneNavigation(){
    return(
        <>
        <div id="side-pane-navigation">
            <div id="side-pane-navigation-option">
                <div id="chat-or-room">
                    <div id="ro-left">
                        <button className='ro-left-btn btn-active' id="ro-left-chat-btn"><p>Chats</p></button>
                        <button className='ro-left-btn' id="ro-left-room-btn">Room</button>
                    </div>
                    <div id="ro-right">
                        <img src={addBtn} alt="add" />
                    </div>
                </div>
                <div id="side-pane-search-bar-container">
                    <div id="side-pane-search-bar">
                        <input type="text" id="search-bar-input" placeholder="Search"/>
                        <button id="search-bar-search-btn">
                            <img src={serachBtn} alt="O" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SidePaneNavigation;
