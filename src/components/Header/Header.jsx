import style from "./Header.module.css"
import { HomeFilled , EditTwoTone, FormOutlined, IdcardTwoTone, FacebookFilled, InstagramFilled, MailOutlined, PhoneFilled } from '@ant-design/icons';
import { Menu } from 'antd';
import { Children, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import LogoSvg from '../../Assets/Federico-Rizzo-Logo.svg'

const Header = () => {
  const [current, setCurrent] = useState('h');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    < >
      <Menu className={style.navContainer} onClick={onClick} selectedKeys={[current]} mode="horizontal">
      <Link to="/Home"><img className={style.HeaderSvg} src={LogoSvg} /></Link>
      <Menu.Item key="1" >
        <Link to="/Home">Inicio</Link>       
      </Menu.Item>

      <Menu.Item key="2" >
       <Link to="/About">Nosotros</Link>       
      </Menu.Item>
      
      <Menu.SubMenu key="3" title="Propiedades"  icon= {<HomeFilled />}>
        <Menu.Item key="4"  >
        <Link to="/Venta">Propiedades a la venta</Link>
        </Menu.Item>
        <Menu.Item key="5"  >
        <Link to="/Alquiler">Propiedades en Alquiler</Link>
        </Menu.Item>        
      </Menu.SubMenu>

      <Menu.Item key="6" icon= {<FormOutlined />} >
        <Link to="/Contacto">Contacto</Link>
      </Menu.Item>
      
      <Menu.Item key="7" icon= {<MailOutlined />} style={{ marginLeft: 'auto' }} >
        <Link to="/Contacto"></Link>
      </Menu.Item>
      <Menu.Item key="8" icon= {<InstagramFilled />} >
        <Link to="/Contacto"></Link>
      </Menu.Item>
      <Menu.Item key="9" icon= {<FacebookFilled />} >
        <Link to="/Contacto"></Link>
      </Menu.Item>
      <Menu.Item key="10" icon= {<PhoneFilled />} >
        <Link to="/Contacto">351 3 415987</Link>
      </Menu.Item>
     </Menu>
     <Outlet/>
    </>
   
  )
};
export default Header;