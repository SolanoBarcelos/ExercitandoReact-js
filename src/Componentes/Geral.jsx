import { Outlet } from "react-router-dom"
import Menu from "./Menu/Menu"


const Geral = () => {
    return (

   <div>

        <Menu/>
        <Outlet/>
    
    </div>

    

    )
    
}

export default Geral;