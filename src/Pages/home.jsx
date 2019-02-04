import React from 'react';
import LeftPanel from './leftPanel.jsx'
import main from "../Themes/main.css"
class Home extends React.Component {
    constructor () {
        super();
        this.state = {
            word:"山西大学新生入学手册"
        }
    }
    render () {
        return (
            <div className={main.wrap}>
                {this.state.word}
                <LeftPanel></LeftPanel>
            </div>
        )
    }
}
export default Home;