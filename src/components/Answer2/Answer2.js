import React from 'react';
import './Answer2.css'

const Answer2 = () => {
    return (
        <div>
             <div className="answer2">
           <h1>QU no. 3</h1>
            <h2>How  Work useState. </h2>
            <p>Ans to the qu no -3</p>
           </div>
          <div className="ans">
          <p><span>01:</span>state chances can be asynchronous.</p>
           <p><span>02:</span>state  can be modified using this setState</p>
           <p><span>03:</span>useState() is a Hook  that allows our to have state variables in functional components</p>
           <p><span>04:</span>setState() is the only legal way to update state after the early state setup</p>
           <p><span>05:</span>setState() enqueues changes to the component state..</p>
           <p><span>06:</span>setState() will always guide to a re-render ..
           </p>
          </div>
           


        </div>
    );
};

export default Answer2;