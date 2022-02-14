import { useParams } from "react-router";
import './css/club.css'
export default function Club(){
const {id}=useParams()
return(<>
    <div className="clubIcon" >
    </div>
<div className="box">
<h2 className="clubName">南大家园工作室</h2>
<p className="clubConcern">关注数:</p>
<p className="clubTimes">TA发布的活动已被添加514次</p>
<button className="concern">+     关注</button>
</div>
<div >
   <h3 className="clubContext">社团简介:</h3> 
</div>
    
</>
)
}