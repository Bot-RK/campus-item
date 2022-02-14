import { NavLink } from "react-router-dom"
import "../css/info.css"
export default function Info() {
    let time = new Date();
    console.log(time)
    function formatDate(now) {
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var date = now.getDate();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    }
let Time=formatDate(time)

    return (
        <>
            <div className="profile">
                <img src="https://incu-header.ncuos.com/app_default_avatar.png " alt="头像" />
            </div>
            <div className="box2">
                <h3 className="activitiesName">dd</h3>
                <p className="date">{Time} 👁️</p>
            </div>
        </>
    )
}