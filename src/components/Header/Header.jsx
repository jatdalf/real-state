import style from "./Header.module.css"
import { HomeTwoTone, EditTwoTone, CheckCircleTwoTone, IdcardTwoTone } from '@ant-design/icons';
import { Menu } from 'antd';
import { Children, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';


const Header = () => {
  const [current, setCurrent] = useState('h');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="h" icon= {<HomeTwoTone />}>
       <Link to="/Home">Inicio</Link>       
      </Menu.Item>

      <Menu.Item key="n" icon= {<HomeTwoTone />}>
       <Link to="/About">Nosotros</Link>       
      </Menu.Item>
      
      <Menu.SubMenu key="p" title="Propiedades" style={{ marginLeft: 'auto' }}>
        <Menu.Item key="v" icon= {<IdcardTwoTone />} >
        <Link to="/Ventas">Ventas</Link>
        </Menu.Item>
        <Menu.Item key="a" icon= {<IdcardTwoTone />} >
        <Link to="/Alquileres">Alquileres</Link>
        </Menu.Item>        
      </Menu.SubMenu>

      <Menu.Item key="c" icon= {<EditTwoTone />} style={{ marginLeft: 'auto' }}>
        <Link to="/Contacto">Contacto</Link>
      </Menu.Item>
      
      <Menu.Item key="m" icon= {<CheckCircleTwoTone />} >
        <Link to="/Contacto">mail</Link>
      </Menu.Item>
      <Menu.Item key="i" icon= {<CheckCircleTwoTone />} >
        <Link to="/Contacto">Instagram</Link>
      </Menu.Item>
      <Menu.Item key="f" icon= {<CheckCircleTwoTone />} >
        <Link to="/Contacto">Facebook</Link>
      </Menu.Item>
      <Menu.Item key="w" icon= {<CheckCircleTwoTone />} >
        <Link to="/Contacto">WhatsApp</Link>
      </Menu.Item>
     </Menu>
     <Outlet/>
    </>
   
  )
};
export default Header;