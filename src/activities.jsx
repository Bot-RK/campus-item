import Info from "./component/info"
import { useParams } from "react-router"
import { useState } from "react"
import './css/activities.css'
import { ToastContainer,toast } from "react-toastify"




export default function Activities() {
    const [user, setUser] = useState({
        id :'2',
        islike: false,
        iscollect:false
    });
    const[times,setTimes]= useState({
        like: 0,
        remark: 0,
        collect:0
    })

    const[view,setView]=useState('')
    const { content } = useParams()
   return( <>
       <Info />
       <div className="activitiesContent">
        <p>{content}</p>
       </div>
       <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
       <div className="function">
           <input className="remark" type="text" placeholder="发一条友善的评论..."
               onChange={(e) => { setView(e.target.value) }}
               onKeyDown={(e) => {
                   if (e.key === "Enter") {
                       if (e.target.value === '') {
                         
                           toast.info('🦄 请不要输入为空!', {
                               position: "top-center",
                               autoClose: 3000,
                               hideProgressBar: false,
                               closeOnClick: true,
                               pauseOnHover: true,
                               draggable: true,
                               progress: undefined,
                           });
                
                       }
                   }
               }}
           />


           <button className="collect" disabled={user.iscollect} onClick={(e) => {
               e.target.className = 'active-collect';
               let time1=times.like
               let time2 = times.collect;
               let time3 = times.remark;
               let islike=user.islike
               setTimes({
                   like: time1,
                   remark: time3,
                   collect:++time2
               })
               setUser({
                   id: "2",
                   iscollect: true,
                   islike:islike
               })
           }}>{ times.collect}</button>
           <button className="good"  disabled={user.islike} onClick={(e) => {
               e.target.className = 'active-good';
               let time1 = times.like;
               let time2 = times.collect;
               let time3 = times.remark;
               let iscollect=user.iscollect
               setTimes({
                   like : ++time1,
                   remark: time3,
                   collect: time2
               })
               setUser({
                id :'2',
                islike: true,
                iscollect:iscollect
           })
           }}>{times.like}</button>
       </div>
       
   </>
   )
}
