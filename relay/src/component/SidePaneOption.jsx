import AvailUser from './AvailUser'
import SidePaneNavigation from './SidePaneNavigation';

import '../style/sidePaneOption.css'

function SidePaneOption(){
    return(
        <>
        <div id="side-pane-option-container">
            <div id="side-pane-option">
                <SidePaneNavigation />
                <AvailUser />
            </div>
        </div>
        </>
    )
}

export default SidePaneOption;
