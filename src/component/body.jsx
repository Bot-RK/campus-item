import { NavLink } from "react-router-dom"
import { useAppReady } from "mincu-react"
import { dataModule } from 'mincu-vanilla';
import '../css/body.css'
<<<<<<< HEAD

=======
import { networkModule } from 'mincu-react' // or mincu-network
>>>>>>> 5ca6e9e84bd8e4cae10606bf3e56418ec2dd1cce

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
   
<<<<<<< HEAD

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
<<<<<<< HEAD
              <div>
                <NavLink className="icon" to={`/club/${item.id}`}></NavLink>
              </div>  
                <h1 className="accountName">{item.name}</h1>
              <div>
=======
              <div key={item.id}>
              <NavLink className="icon" to={`/club/${item.id}`}>头像</NavLink>
=======
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
>>>>>>> 5ca6e9e84bd8e4cae10606bf3e56418ec2dd1cce
              <div className="accountName">
                <h2>{item.name}</h2>
              </div>
              <div >  
<<<<<<< HEAD
>>>>>>> 957c50de7b1e7f35cf357cad7317905b6a31980c
                <NavLink className="content" to={`/activities/${item.content}`}>{item.content}</NavLink>
              </div>
=======
                <NavLink className="content" to={`/activities/${item.id}`}>{item.content}</NavLink>
>>>>>>> 5ca6e9e84bd8e4cae10606bf3e56418ec2dd1cce
              </div>
              
            )
        })}
<<<<<<< HEAD
        
=======
        {/* <div>a, {b.name}</div> */}
>>>>>>> 5ca6e9e84bd8e4cae10606bf3e56418ec2dd1cce
        </>
    )
}