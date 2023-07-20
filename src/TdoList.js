import React, { useRef, useState } from 'react';

const TdoList = () => {
    const [activity,setActiviy]=useState("")
    const [listdata,setlistadata]=useState([])
    function addActivity(){
        // setlistadata([...listdata,activity])
        // setActiviy('') 
        // return listdata
        setlistadata((listdata)=>{
            const updateList=[...listdata,activity]
            setActiviy('')
            return updateList
        })
    }
    const demo=useRef('')
    
    function removeActivity(i){
        const updatelistdata=listdata.filter((ele,id)=>{
            return i!=id
        })
        setlistadata(updatelistdata);
        demo.current.focus();
        demo.current.style.backgrounColor="red";
    }

    return (
        <div>
            <div className="header">
                <input type="text" ref={demo} name="" id="" onChange={(e)=>{
                    setActiviy(e.target.value)
                }} value={activity}  />
                <button onClick={addActivity}>Add</button>
                <p className='list-heading'>here is the list :{")"}</p>
                {listdata!=[]&& listdata.map((data,i)=>{
                    return(
                        <>
                        <p key={i}>
                            <div className='listdat'>{data}</div>
                            <div><button className='btn-position'onClick={()=>removeActivity(i)}>remove </button></div>
                        </p>
                        </>
                    )
                })}

            </div>
        </div>
    );
}

export default TdoList;
