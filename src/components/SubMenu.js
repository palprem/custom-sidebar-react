import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import styled from 'styled-components';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

let SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    chacked: false,
    index: 0,

    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    chacked: false,
    index: 1,

    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },


  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    chacked: false,
    index: 2,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />
  // }
];


const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 50px;
  font-size: 18px;

  &:hover {
    background: #747d8c;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  font-size:18px;
`;

const DroupdownSidebarLabel = styled.span`
  margin-left: 16px;
  font-size:14px;
  font-style: lighter;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 40px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #747d8c;
    cursor: pointer;
  }
`;

const SubMenu = () => {
  const [subnav, setSubnav] = useState(false);

  const itemChecked = (itemIndex) => {
    setSubnav(!subnav)
    SidebarData.map((val, index) => {
      if (index == itemIndex) {
        if (SidebarData[index].chacked) {
          SidebarData[index].chacked = false
        } else {
          SidebarData[index].chacked = true
        }
      }
      else {
        SidebarData[index].chacked = false
      }
    }
    )
  }

  return (
    <>

      {
        SidebarData.map((item, index) => {
          return (
            <>
              <SidebarLink to={item.path} onClick={(() => itemChecked(item.index))}>
                <div className='flex'>
                  {item.icon}
                  <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                  {item.subNav && item.chacked ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>
              </SidebarLink>
              {item.chacked && item.subNav?.map((item, index) => {
                return (
                  <DropdownLink to={item.path} key={index}>
                    {item.icon}
                    <DroupdownSidebarLabel>{item.title}</DroupdownSidebarLabel>
                  </DropdownLink>

                );
              })}
            </>
          )
        })
      }
    </>
  );
};

export default SubMenu;
