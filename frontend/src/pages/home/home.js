import React from "react";
import "./home.scss";
import Widget from "../../components/widget/Widget";

import Task from "../tasks/tasks";
export default function Home() {
 
  return (
    <React.Fragment>
      {/* <h2 className={'content-block'}>Home</h2> */}
      {/* <div className={'content-block'}> */}
      <div className={"dx-card responsive-paddings"}>
        <div className="homeContainer">
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>
          <div className="charts">
            {/* <Featured/> */}
            <Task />
          </div>
{/* <div style={{display:"flex"}}>
<div> <Button
            width={120}
            text=""
            type="danger"
            stylingMode="contained"
            onClick={() =>console.log('deleted')}
          ><AiOutlineDelete/></Button>
</div>
         <div style={{marginLeft:"20px"}}>

         <Button
            width={120}
            text="Edit"
            type="default"
            stylingMode="contained"
            onClick={() =>console.log('deleted')}
        
          ><AiOutlineEdit/></Button>
         </div>

</div> */}
   
         
        </div>
      </div>
    </React.Fragment>
  );
}
