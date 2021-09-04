import React from 'react';

function Ttwentey(props) {
    const Teams=[{name:"virat",team:"rcb",score:"500"},{name:"sam",team:"rajesthan",score:"500"}]
    return (
        <div>
           {Teams.map(team=><ul><li>{team.name} {team.score} {team.team}</li></ul>)} 
        </div>
    );
}

export default Ttwentey;