import { NavLink } from "react-router-dom"
import { useAppReady } from "mincu-react"
import { dataModule } from 'mincu-vanilla';
import '../css/body.css'


 const a=[
       {icon : 1,
        name : "南大家园",
        id   : 777,
        content:"你们好呀66351" 
    },
       {icon : 2,
        name : "南大家园2",
        id   : 888,
        content:"你们好呀66351"},
       {icon : 3,
        name : "南大家园3",
        id   : 999,
        content:"你们好呀66351"},
    ]
export default function Body(){
   

    const isReady = useAppReady();
  if (isReady) {
    const baseInfo = dataModule.appData.user.profile.entireProfile.base_info
    const icon=dataModule.appData.user.profile.basicProfile.app_avatar_url
    let b = {
      name: baseInfo.jg.mc,
      s: baseInfo.jg.dm,
      z:icon
    }
    alert(b.name);
    alert(b.s);
    alert(b.z)
  }
    return(
        <>
        {a.map((item)=>{
            return (<div className="bigbox">
              <div key={item.id}>
              <NavLink className="icon" to={`/club/${item.id}`}>头像</NavLink>
              <div className="accountName">
                <h2>{item.name}</h2>
              </div>
              <div >  
                <NavLink className="content" to={`/activities/${item.content}`}>{item.content}</NavLink>
              </div>
              </div>
              </div>
            )
        })}
        
        </>
    )
}