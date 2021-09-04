import React from 'react';

function IplTeams(props) {
    const ipLTeams=["Delhi","Mumbai","Punjab","rajesthan","Punjab"]
    return (
        <div>

            {

                ipLTeams.map(team=><ul><li>{team}</li></ul>)
            }
            
        </div>
    );
}


export default IplTeams;