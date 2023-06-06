import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {faCartShopping, faDoorOpen, faHistory, faHome, faInfo, faStar, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {useState} from "react";
import "./Sidebar.css"

 const Sidebar = () => {
     const [path, setPath] = useState("");
     return (

         <SideNav
             className={"sidebar"}
             onSelect={(selected) => {
                 setPath(selected);
             }}
         >
             <SideNav.Toggle />
             <SideNav.Nav defaultSelected="home">
                 <NavItem eventKey="">
                     <NavIcon>
                         <Link to={"/"}><FontAwesomeIcon icon={faHome}/></Link>
                     </NavIcon>
                     <NavText>
                         Home
                     </NavText>
                 </NavItem>
                 <NavItem eventKey="favorites" >
                     <NavIcon>
                         <Link to={path}><FontAwesomeIcon icon={faStar}/></Link>
                     </NavIcon>
                     <NavText>Favorites
                     </NavText>
                 </NavItem>
                 <NavItem eventKey="history">
                     <NavIcon>
                         <Link to={path}><FontAwesomeIcon icon={faHistory}/></Link>
                     </NavIcon>
                     <NavText>
                         History
                     </NavText>
                 </NavItem>
                 <NavItem eventKey="cart">
                     <NavIcon>
                         <Link to={path}><FontAwesomeIcon icon={faCartShopping}/></Link>
                     </NavIcon>
                     <NavText>
                         Cart
                     </NavText>
                 </NavItem>
                 <NavItem eventKey="user">
                     <NavIcon>
                         <FontAwesomeIcon icon={faUser}/>
                     </NavIcon>
                     <NavText>
                         User
                     </NavText>
                     <NavItem eventKey="user/info">
                         <NavText>
                             <Link to={path}>Account Info</Link>
                         </NavText>
                     </NavItem>
                     <NavItem eventKey="user/logout">
                         <NavText>
                             LogOut <FontAwesomeIcon icon={faDoorOpen}/>
                         </NavText>
                     </NavItem>
                 </NavItem>
             </SideNav.Nav>
         </SideNav>
     );
};

export default Sidebar;