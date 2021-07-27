
import React, {useState} from 'react';

function TodoRender(props) {
  
  
    const lista= props.lista
    var deletefunction = props.deletefunction
    const push_render = lista.map((action, index) =>  <li key={index}>{action} <button onClick={()=> deletefunction(lista, index)}> Delete  </button></li>);
        
    return (
        <ul>{push_render}</ul>
    ); 
}
    
export default TodoRender;