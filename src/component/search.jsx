import { useState } from "react"
import { ToastContainer,toast } from "react-toastify"
import "../css/search.css"
export default function Search() {
    const [text,setText]=useState('')
 return(
     <div className="search">
         <div className="search-image"></div>
         <input className="search-frame" type="search"
             placeholder="搜点什么吧"
             onChange={(e)=>{setText(e.target.value)}}
             onKeyDown={(e) => {
                 if (e.key === 'Enter') {
                     if (e.target.value === '') {
                        toast.info('🦄 请不要输入为空!', {
                            position: "top-center",
                            autoClose: 1800,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            closeButton:false
                        });
                     } else {
                         window.history.pushState({}, undefined, `/search/${text}`);
                         window.location.reload();
                 }
             }}}
         /><ToastContainer />
     </div>
 )   
}