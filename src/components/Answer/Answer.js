import React from 'react';
import './Answer.css'

const Answer = () => {
    return (
        <div >
           <div className="answer">
           <h1>QU no. 1</h1>
            <h2>How react Work </h2>
            <p>Ans to the qu no -1</p>
           </div>
          <div className="ans">
          <p><span>01:</span>React works on 4 components.</p>
           <p><span>02:</span> React works in declarative code</p>
           <p><span>03:</span>  Data can be sent from top to bottom .. but not from bottom to top</p>
           <p><span>04:</span>React is works on single page Application.</p>
           <p><span>05:</span> React App Allows us to write HTML in React </p>
           <p><span>06:</span>React  has 6 gems. reacts on them work.6 gems is JSX , component , props , events , state , effect</p>
          </div>

        </div>

      
    );
};

export default Answer;