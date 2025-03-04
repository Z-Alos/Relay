import AvailUser from './AvailUser'
import SidePaneProfile from './SidePaneProfile'

import '../style/sidePane.css'

function SidePane(){
    return(
        <>
        <div id="side-pane">
            <SidePaneProfile />
            <AvailUser />
        </div>
        
        </>
    )
}

export default SidePane
