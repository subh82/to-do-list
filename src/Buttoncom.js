import React,{useState} from 'react';
import Inputf from './inputf';


const Buttoncom = () => {
    const [data,setdata]=useState([])
    const clicked=false;
    function handleclick(){
        clicked=true;
        if(clicked===true)
            props.value
    }
  

    return (
        <div>
            <button type='submit' onClick={handleclick} ></button>
            <Inputf value={value}/>
            
        </div>
    );
}

export default Buttoncom;
