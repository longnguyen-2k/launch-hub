import Cookies from "universal-cookie";
function headerAuthInterceptor(){
    const cookies = new Cookies();
    const accessToken = cookies.get("accessToken");
    if(accessToken){
        return  {Authorization: "Bearer " + cookies.get("accessToken")}
    }
    else{
        return {}
    }
}
export {headerAuthInterceptor};
