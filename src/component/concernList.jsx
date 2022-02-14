import { NavLink } from "react-router-dom";
import "../css/concernList.css"
export default function ConcernList() {
    return (
        <><div>
            <div >
                <NavLink className="icon1" to={`/list/333`}></NavLink>
            </div>
            <NavLink className={'concernList'} to={`/list/333`}>...</NavLink>
        </div>
        </>
    )
}