import { useState } from "react";
import { useParams } from "react-router";
import { ToastContainer,toast } from "react-toastify"
import './css/search.css'
import './css/searchPage.css'
export default function SearchPage() {
    let { text } = useParams();
    const[content,setContent]=useState('')
    return (
        <> <input type="search" className="search-frame" placeholder={text} onChange={(e)=>{setContent(e.target.value)}}
        onKeyDown={(e) => {
            if (e.key === 'Enter') {
                if (e.target.value === '') {
                   toast.info('🦄 请不要输入为空!', {
                       position: "top-center",
                       autoClose: 3000,
                       hideProgressBar: false,
                       closeOnClick: true,
                       pauseOnHover: true,
                       draggable: true,
                       progress: undefined,
                   });
                } else {
                    window.history.pushState({}, undefined, `/search/${content}`);
                    window.location.reload();
            }
        }}}
    /><ToastContainer />
            <div className="error">
            <p className="errorText1">小家园戳了戳你,并对你说:</p>
            <p className="errorText2"> 404 Not Found</p>
        </div>
        </>
    )
}