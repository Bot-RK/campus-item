import service from "./axios"
import Head from "./component/head"
import { NavLink } from "react-router-dom"
import { useEffect,  useState } from "react"
import { ToastContainer, toast } from "react-toastify";


export default function Inform() {
    const [pages, setPages] = useState(1)
    const [data, setData] = useState([])
    const [load,setLoad]=useState(0)
    useEffect(()=> {
          service.get('/user/posts', {
            params: {
                is_notice: true,
                page: pages,
                size :5
            }
        }).then(async(res) => {
            if (res.status===200) {
                console.log("获取成功")
                console.log(res)
                setData((data) => {
                    return [...data, res]
                })
                setPages((pages) => {
                    return pages + 1
                })
                setLoad(load)
            }   
        }
        ).catch((error) => {
            toast.info('🦄请求错误', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })   
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [load])
    function populate() {
    
        let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
        if (windowRelativeBottom < document.documentElement.clientHeight + 0.3) {
            setLoad(load+1)
            console.log(load)
            
        };
    }
    window.addEventListener('scroll', populate)
    
                console.log(data)
                console.log(pages)
    console.log(load)
    // eslint-disable-next-line no-unused-vars
    

    return (
    <>
            <Head />
            <ToastContainer/>
            {data.map((item)=>{
                return (<>
            <div className="bigbox">
              <div key={item.data.club_id}>
                            <NavLink className={"icon"}
                                // style={{ backgroundImage: `url("${data.data.avatar_addr}")` }}
                                to={`/club/${item.data.club_id}`}></NavLink>
              </div>  
                        <h1 className="accountName">{item.data.club_name}</h1>
                        <p className="time">{item.data.created_at}</p>
              <div>
                            <NavLink className="content"
                            to={`/activities/${item.data.club_id}`}>
                            {item.data.content}111</NavLink>
              </div>
              </div>
          </>  )
        })}
        
                
    </>
    )
}