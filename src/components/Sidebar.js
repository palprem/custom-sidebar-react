import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';


const Nav = styled.div`
  background: #ffffff;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #15171c;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
`;

const SidebarNav = styled.nav`
  background: #000000;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: margin 0.2s ease;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const FlexRigh = styled.div`
margin-left: 110px;
font-size: x-large;
margin-top: -11px;
`;

const Credent = styled.div`
text-decoration: none;
color:white;
font-size:20px;
`;



const Sidebar = ({ sideNavExpanded, setSideNavExpanded }) => {
  const [sidebar, setSidebar] = useState(false);
  const sideBarSlider = props => {
    setSideNavExpanded(!sideNavExpanded);
    // setSidebar(!sidebar)
  }
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav >
          <NavIcon to='#'>
            <FaIcons.FaBars style={{ color: '#2c3e50' }} onClick={() => sideBarSlider()} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sideNavExpanded}>
          <SidebarWrap>
            <NavIcon to='#'>
              <Credent style={{ textDecorationColor: '#34495e' }}>Credent</Credent>
              <FlexRigh>
                {window.innerWidth <= 460 && <AiIcons.AiOutlineClose onClick={() => sideBarSlider()} />}
              </FlexRigh>
            </NavIcon>
            {/* ---------------------------------------------------- */}
            <SubMenu />
            {/* ---------------------------------------------------- */}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
