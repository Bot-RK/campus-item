import '../css/top.css'
export default function Top(){
 return(
 <div className="top"> 
   <div className="goback">
       <button  onClick={()=>window.history.back(-1)}></button>
    </div>
    <div className="title">
        <h2>校园号</h2>
    </div>
 </div>
 )
}