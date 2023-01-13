import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (tileList) => {

  
  const datas = tileList.tileList;  // Note that the props will be returning in the form such as {"tileList":[{"name":"Luke","email":"email","phone":"123"}]} or {"tileList":[{"title":"App","contact":"","date":"2023-01-13","time":"11:22"}]}.

  // In order for me to work with an arrya of object I first need to extract the that array where I get : [{"name":"Luke","email":"email","phone":"123"}] OR [{"title":"App","contact":"","date":"2023-01-13","time":"11:22"}] => Arrays I can work with

  

  return (    
    <div>


     
     {/* Going through the list of contacts/appointments and rendering each as <Tile /> component */}
     
     {datas.map((data, index) => {

          return  <Tile 
                      tile={data}
                      key={index}                      
                  />    
     })}
    
    </div>
  );
};
