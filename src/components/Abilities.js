import React from 'react';

const Abilities = (props) => {

  const abilities = props.abilities;

  return (
    <div className="abilities-container">
      {
        abilities.map((i) => {
          switch (i) {
            case 1:
              return (<img className="ability" alt="ability_diseno" src="images/diseno.png" key={i}/>);
              break;
            case 2:
              return (<img className="ability" alt="ability_materiales" src="images/materiales.png" key={i}/>);
              break;
            case 3:
              return (<img className="ability" alt="ability_progra" src="images/progra.png" key={i}/>);
              break;
            case 4:
              return (<img className="ability" alt="ability_electronica" src="images/electronica.png" key={i}/>);
              break;
            default:
              return null;
          }
        })
      }
    </div>
  )
}

export default Abilities;
