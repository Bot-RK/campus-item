import "../css/info.css"
export default function Info(data) {
    let time = new Date();
    function formatDate(now) {
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var date = now.getDate();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    }
    let Time = formatDate(time)
console.log(1)
    return (
     <>
            <div className="profile" style={{backgroundImage : `url("${data.data.avatar_addr}")`}}>
            </div>
            <div className="box2">
                <h3 className="activitiesName">{data.data.club_name}</h3>
                <p className="date">{Time} 👁️</p>
            </div>
        </>
    )
}