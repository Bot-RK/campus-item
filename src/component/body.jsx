import { NavLink } from "react-router-dom"
import { useAppReady } from "mincu-react"
import { dataModule } from 'mincu-vanilla';
import '../css/body.css'
import { networkModule } from 'mincu-react' // or mincu-network

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
   
    const b=
    {
      name : ''
    }
    // alert(useAppReady());
    const isReady = useAppReady();
    if(isReady){
      const baseInfo = dataModule.appData.user.profile.entireProfile.base_info
       b = {
        name: baseInfo.xm,
      }
         
    }
    return(
        <>
        {a.map((item)=>{
            return (
              <div key={item.id}>
              <NavLink className="icon" to={`/club/${item.id}`}  className="icon">头像</NavLink>
              <div className="accountName">
                <h2>{item.name}</h2>
              </div>
              <div >  
                <NavLink className="content" to={`/activities/${item.id}`}>{item.content}</NavLink>
              </div>
              </div>
            )
        })}
        {/* <div>a, {b.name}</div> */}
        </>
    )
}