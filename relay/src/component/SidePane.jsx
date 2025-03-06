import SidePaneProfile from './SidePaneProfile'
import SidePaneOption from './SidePaneOption'

import '../style/sidePane.css'

function SidePane(){
    return(
        <>
        <div id="side-pane">
            <SidePaneProfile />
            <SidePaneOption />
        </div>
        
        </>
    )
}

export default SidePane
