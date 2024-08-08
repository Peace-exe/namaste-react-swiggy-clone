import logo from "../assets/img/foodVilla.jpg";
import { Link } from "react-router-dom";
//exporting by name:
export const Title= () => (
    <img
        alt="Food Villa"
        src={logo}
        style={{
            height : "7rem",
            marginLeft : "1rem" ,
        }}
        
    />
);

//jsx
//SPA - SINGLE PAGE APPLICATION

const HeaderComponent = ()=>(
        
    <div className="flex">  
        {Title()}
        
         <ul className="flex">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/instamart">Instamart</Link></li>
            <li><button style={{padding:"0.2rem"}}>Log in</button></li>
         </ul>

        
        
    </div>
);
//default exporting:
export default HeaderComponent; 