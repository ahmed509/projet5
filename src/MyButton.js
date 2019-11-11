import React from "react";
export const Wrapper = props => {
  return <div className="wrapper">{props.children}</div>;
};
export const Photo = props => {
  return <img src={props.src} alt="alt" />;
};
export const Title = props => {
  return props.small ? (
    <small style={props.style}>{props.children}</small>
  ) : (
    <h1 style={props.style}>{props.children}</h1>
  );
};
export const MyButton = props =>{
    return 
        
            <button onClick={()=>props.onSimpleClick} 
            style={{backgroundColor:"blue"}} 
            title="profileLink">
            {props.children}
            </button>
              
    
        
    
}