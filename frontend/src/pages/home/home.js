import React from 'react';
import './home.scss';
import Featured from '../../components/Featured/Featured';
import Widget from '../../components/widget/Widget';
import Task from '../tasks/tasks';
export default function Home() {
  return (
    <React.Fragment>
      {/* <h2 className={'content-block'}>Home</h2> */}
      {/* <div className={'content-block'}> */}
        <div className={'dx-card responsive-paddings'}>
        <div className="homeContainer">
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          {/* <Featured/> */}
          <Task/>
        </div>
      
        </div>
      </div>
    </React.Fragment>
)}
