import React, { useCallback, useState } from "react";
import './index.css'

const intitialScoreState = {
    home: 0,
    away: 0
}

const Scoreboard = () => {

    const [score, setScore] = useState(intitialScoreState);

    const updateScore = useCallback((e) => {
        const { action, team } = e.target.dataset;
        console.log(action);
        console.log(team);
        let value = 0;

        switch(action) {
            case '+': 
                value = 1;
                break;
            case '-':
                value = -1;
                break;
            default:
                break;
        }

        setScore(state => ({
            ...state,
            [team]: state[team] + value
        }));
    }, []);

    const resetScore = useCallback(() => {
        setScore(intitialScoreState);
    }, []);

    return (
        <div id='main-container'>
            <div id='reset-btn' className='rotate' onClick={resetScore}>&#x21BA;</div>
            {/* <div>HOME</div> */}
            <div id='home-team-container'>
                <div className='decrement-btn' data-action='-' data-team='home' onClick={updateScore}>
                    &#x25C0;
                </div>
                <div className='score-container rotate'>
                    <div className='score'>{score.home}</div>
                </div>
                <div className='increment-btn' data-action='+' data-team='home' onClick={updateScore}>
                    &#x25B6;
                </div>
            </div>

            <div id='away-team-container'>
                <div className='decrement-btn' data-action='-' data-team='away' onClick={updateScore}>
                    &#x25C0;
                </div>
                <div className='score-container rotate'>
                    <text className='score'>{score.away}</text>
                </div>
                <div className='increment-btn' data-action='+' data-team='away' onClick={updateScore}>
                    &#x25B6;
                </div>
            </div>
            {/* <div>AWAY</div> */}
        </div>
    );
};

export default Scoreboard;