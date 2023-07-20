import React, { useState ,useEffect} from 'react';

const Inputf = (props) => {
    const [Name,setName]=useState();
    const [list,setlist]=useState('')
    useEffect(()=>{
        setlist(value)
        
    },[Name])



    return (
        <div>
            <input type="text" onChange={(e)=>setName(e.target.value)}  value={valueS}/>
            <h2>{list}</h2>
        </div>
    );
}

export default Inputf;
