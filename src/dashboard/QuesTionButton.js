import React,{useState} from 'react'




function QuesTionButton(props) {
    
    let keys;
    let isthere;

     if(props.allSavedData.length!==0){
        
        keys = Object.keys(props.allSavedData);
         

         isthere =  keys.some((qno)=>{
             return qno===props.qno
         })
        

     }
    
   




    return (
      
        <div style={{ background: isthere? 'green':null }} onClick={() => { props.quesTionTab(props.qno) }} class="small-box">{props.idx}</div>
    )
}

export default QuesTionButton
