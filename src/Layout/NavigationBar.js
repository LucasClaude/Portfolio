import React from 'react';
import '../index.css';
import * as FontAwesome from 'react-icons/lib/fa';


const NavBar = (props) => {

    if(props.size > 976){
        
        return(
        
        
            <ul className = "BigHeader">
                <li className = {props.Hi}  onClick = {props.SwitchTo.bind(this)} data-id="1"><a>
                <i><FontAwesome.FaUser 
                    size = {20}
                    /> </i>
                    {props.Name1}</a>
                </li>
                <li className = {props.Hi2} onClick = {props.SwitchTo.bind(this)} data-id="2"><a>
                    <i><FontAwesome.FaFileText 
                    size = {20}
                    /></i>
                    {props.Name2}</a></li>
                <li className = {props.Hi3} onClick = {props.SwitchTo.bind(this)} data-id="3"><a>
                     <i><FontAwesome.FaCodeFork
                    size = {20}
                    /></i>
                    {props.Name3}</a></li>
                <li className = {props.Hi4} onClick = {props.SwitchTo.bind(this)} data-id="4"><a>
                     <i><FontAwesome.FaEnvelope
                    size = {20}
                    /></i>
                    {props.Name4}</a></li>
                
                
            </ul>
        
        
            
        );
        
            }
   else if(props.size > 708 && props.size <= 976){
   
return(


    <ul className = "Header">
        <li className = {props.Hi}  onClick = {props.SwitchTo.bind(this)} data-id="1"><a>
            <i><FontAwesome.FaUser 
            size = {20}
            /></i>
            {props.Name1}</a></li>
        <li className = {props.Hi2} onClick = {props.SwitchTo.bind(this)} data-id="2"><a> 
            <i><FontAwesome.FaFileText 
            size = {20}
            /></i>
        {props.Name2}</a></li>
        <li className = {props.Hi3} onClick = {props.SwitchTo.bind(this)} data-id="3"><a>
        <i><FontAwesome.FaCodeFork
                    size = {20}
                    /></i>
        {props.Name3}</a></li>
        <li className = {props.Hi4} onClick = {props.SwitchTo.bind(this)} data-id="4"><a>
        <i><FontAwesome.FaEnvelope
                    size = {20}
                    /></i>
        {props.Name4}</a></li>
        
        
    </ul>


    
);

    }

    else if (props.size <= 708){
        
        return (
           
<ul className = "SmallHeader">
        
        <li className = {props.Hi}  onClick = {props.SwitchTo.bind(this)} data-id="1"><a><i><FontAwesome.FaUser 
                    size = {20}
                    /></i></a></li>
        <li className = {props.Hi2} onClick = {props.SwitchTo.bind(this)} data-id="2"><a> <i><FontAwesome.FaFileText 
                    size = {20}
                    /></i></a></li>
        <li className = {props.Hi3} onClick = {props.SwitchTo.bind(this)} data-id="3"><a>
        <i><FontAwesome.FaCodeFork
                    size = {20}
                    /></i>
        </a></li>
        <li className = {props.Hi4} onClick = {props.SwitchTo.bind(this)} data-id="4"><a>
        <i><FontAwesome.FaEnvelope
                    size = {20}
                    /></i>
            </a></li>
        
        
    </ul>
 
        )

    };


}


export default NavBar;