import { NavLink } from 'react-router-dom';
import "../css/page.css"
export default function Page(){
return(<>
  <div className="page">
   <NavLink className={({isActive}) => 'page-' + (isActive ? 'inform-active' : 'inform')} to={"/"} >通知</NavLink>
   <NavLink className={({isActive}) => 'page-' + (isActive ? 'dynamicState-active' : 'dynamicState')} to={"/dynamicState" } >动态</NavLink>
   <NavLink className={({isActive})=>'page-'+(isActive ? 'focus-active' : "focus")} to={"/focus"} >关注</NavLink>
  </div>


  </>
)
}