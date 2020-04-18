import React from 'react';
import logo from './logo.svg';
import './App.css';
import SerachDataINObject from'./SerachDataINObject'
import SpinalCaseTextConverson from './components/SpinalCaseTextConverson'
import Chracterfiltering from './components/Chracterfiltering'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function App() {
  return (
    <div className="App">
      <h1>Algorithims</h1>
      <div class="centerDiv">
        {/* one */}
                               <ExpansionPanel style={style}>
                                      <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                      >
                                        <Typography> Data Filtering algorithim</Typography>
                                      </ExpansionPanelSummary>
                                      <ExpansionPanelDetails>
                                                       <SerachDataINObject/>
                                      </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                    {/* one */}
                                               {/* two */}
                                               <ExpansionPanel style={style}>
                                                 <ExpansionPanelSummary
                                                   expandIcon={<ExpandMoreIcon />}
                                                   aria-controls="panel1a-content"
                                                   id="panel1a-header"
                                                 >
                                                   <Typography> Spinal Case Text Converson</Typography>
                                                 </ExpansionPanelSummary>
                                                 <ExpansionPanelDetails>
                                                                  <SpinalCaseTextConverson/>
                                                 </ExpansionPanelDetails>
                                               </ExpansionPanel>
                                               {/* two */}
                              {/* thre*/}
                                   
                              <ExpansionPanel style={style}>
                                                 <ExpansionPanelSummary
                                                   expandIcon={<ExpandMoreIcon />}
                                                   aria-controls="panel1a-content"
                                                   id="panel1a-header"
                                                 >
                                                   <Typography> Chracter filtering</Typography>
                                                 </ExpansionPanelSummary>
                                                 <ExpansionPanelDetails>
                                                                  <Chracterfiltering/>
                                                 </ExpansionPanelDetails>
                                               </ExpansionPanel>


                               {/* three*/}
      </div>
                                   
     
    
    </div>
  );
}
const style = {
  display:"flex",
  flexFlow:"column wrap",
  justifyContent:"center",
  width:"60%"
}
export default App;
