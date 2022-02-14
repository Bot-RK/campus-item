import Search from "./component/search";
import Head from "./component/head";
import Body from "./component/body";
import ConcernList from "./component/concernList";
export default function Focus(){
    return(<>
        <Head />
        <ConcernList />
        <Body />
        </>
    )
}