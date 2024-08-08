import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    return(
        <>
        <h1>OOPSS!!!</h1>
        <span>something went wrong.... :c</span>
        <h2>{err.status + ":" + err.statusText}</h2>
        </>
    )
}
export default Error;