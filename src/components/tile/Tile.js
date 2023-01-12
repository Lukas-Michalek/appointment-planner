import React from "react";

export const Tile = (props) => {

  const { tile, key } = props;

  // tile => { name: "name", phone: 13459, email="abc@asd"}
  //  tile => { }

  const tileValues = Object.values(tile);

  
  return (
    <div className="tile-container">
      
      {
        tileValues.map((tileValue, index) => {
          if(index === 0){
            return <p className='tile-title'>{tileValue}</p>
          }
          else{
            return <p className='tile'>{tileValue}</p>
          }
        })
      }
     
    </div>
  );
};
