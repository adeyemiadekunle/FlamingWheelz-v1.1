
import { NavLink } from 'react-router-dom'



export const CustomNavLink = ({ to, ...props }) => {

    let style = {
        width: '100px',
        height: '50px',
        marginTop:'20px'
    };

    let activeStyle = {
      color: 'red',
    };
  
    return (
      <NavLink
        style={({ isActive,  style }) =>
          isActive ? activeStyle : { 
            textDecoration: 'none' ,
            
        }
        }
        to={to}
        end
        {...props}
      />
    );
  };