import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import logo from "../../assets/SipTok_Logo.png";
import "./Header.css";
import { RetrieveUserData } from '../../utils/RetrieveUserData';
import { IoMdClose } from 'react-icons/io';
import { MdMenu } from 'react-icons/md';

export const Header = ({ toggleSidebar , isSidebarOpen }) => {
  
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);
  const [userData , setUserData] = useState(null)

  useEffect(()=>{
    const userInfo = RetrieveUserData();
    setUserData(userInfo[0])
  },[])

  const handleLogOut = ()=>{
    sessionStorage.clear();
    navigate("/")
  }
  return (
    <Navbar className="navbar" variant="sticky" isBordered>
      <NavbarContent>
      <Button isIconOnly onClick={toggleSidebar} className="font-semibold" style={{fontSize:"22px"}}>
       {
        isSidebarOpen ? <IoMdClose /> : <MdMenu />

       }
      </Button>
        <NavbarBrand>
          <Link to="/">
            <img src={logo} alt="SipTok" className="logo2" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {login ? (
        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{userData?.name || "user"}</p>
              </DropdownItem>
              <DropdownItem key="settings">Profile</DropdownItem>
              <DropdownItem key="logout" color="danger" onClick={handleLogOut}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      ) : (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link to="/login" className="nav-link">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" to="/signup" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}
    </Navbar>
  );
};
