<<<<<<< HEAD
/* eslint-disable no-unused-vars */
=======
<<<<<<< HEAD
>>>>>>> 957c50de7b1e7f35cf357cad7317905b6a31980c
import Info from "./component/info"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import './css/activities.css'
import { ToastContainer,toast } from "react-toastify"
import service from "./axios"
import './css/info.css'
import './css/toast.css'
export default function Activities() {
    const { id } = useParams()
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
    const [view, setView] = useState('')
    const [data, setdata] = useState({})

    useEffect(() => {
        service.get('/user/post', {
            params: {
                post_id: id
            }
        }).then((res) => {
            if (res.status === 200) {
                setdata(res)
                console.log(res)
            
            }
        }).catch((error) => {
            toast.info('🦄请求错误', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                closeButton:false,
            });
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    window.addEventListener('resize', function() {
        if(
            document.activeElement.tagName === 'INPUT' ||
            document.activeElement.tagName === 'TEXTAREA'
            ) {
            window.setTimeout(function() {
            if('scrollIntoView' in document.activeElement) {
            document.activeElement.scrollIntoView(true);
            } else {
            document.activeElement.scrollIntoViewIfNeeded();
            }console.log(99)
            }, 0);
        }
        this.alert("22222")
    });
    function inputFocus(){
        var dom=document.getElementById('666')
        setTimeout(function(){
          dom.scrollIntoView(true);
            dom.scrollIntoViewIfNeeded();
            console.log(1)
        }, 500);
      }
    return (<>
       <Info data={data}/>
       <div className="activitiesContent">
           {/* <p>{data.data.content}</p> */}
       </div>
       <ToastContainer limit={1}
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
        <div className="function" id="666" >
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
                onFocus={inputFocus}
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
=======
export default function Activities(){
    
}
>>>>>>> 5ca6e9e84bd8e4cae10606bf3e56418ec2dd1cce
