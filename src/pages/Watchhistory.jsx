import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../../services/allAPI';


function Watchhistory() {

  const[HistoryData,setHistoryData]=useState([]);

  useEffect(()=>{
 
    Watchhistoryfunc()

  },[]);

  const Watchhistoryfunc= async ()=>{

    const result=await getHistoryAPI();
    if(result.status==200){
      setHistoryData(result.data)
    }else{
      console.log("api call failed")
    }
  }

  const removeHistory=async(id)=>{

    await deleteHistoryAPI(id)
    Watchhistory()


  }


  return (
    <>

<div className='container mb-4 mt-5 d-flex justify-content-between '>

  <h5>Watch-History</h5>
  <Link to={'/home'} style={{textDecoration:'none',color:'white',fontSize:'20px'}} >Back to Home <i class="fa-solid fa-rotate-left fa-beat"></i> </Link>

</div>
<table className='table mb-4 '>
  <thead>
    <tr>
      <th>#</th>
      <th>Caption</th>
      <th>URL</th>
      <th>TimeStamp</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      HistoryData?.length>0?HistoryData?.map((video,index)=>(
  <tr>
       <td>{index+1}</td>
    <td>{video?.name}</td>
    <td><a href="http://">{video?.link}</a></td>
    <td>{video?.timeStamp}</td>
    <td> <Button onClick={()=>removeHistory(video?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></Button></td>
    </tr>
   

      )):<p>No data here</p>
    }
  
  </tbody>
</table>

    </>
  )
}

export default Watchhistory