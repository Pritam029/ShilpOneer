import React from 'react'
import { Link } from 'react-router-dom';  

export default function sidebar() {
    return (

        <>
        
         <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    {/* Sidebar - Brand */}
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
      <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink" />
      </div>
      <div className="sidebar-brand-text mx-3">ADMIN<sup>ShilpOneer</sup></div>
    </a>
    {/* Divider */}
    <hr className="sidebar-divider my-0" />
    {/* Nav Item - Dashboard */}
    <li className="nav-item">
      <a className="nav-link" href="/">
        <i className="fas fa-fw fa-tachometer-alt" />
        <span>Dashboard</span></a>
    </li>
    {/* Divider */}
    <hr className="sidebar-divider" />
    {/* Heading */}
    <div className="sidebar-heading">
  
    </div>
    {/* Nav Item - Pages Collapse Menu */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        <i className="fas fa-fw fa-cog" />
        <span>Manage Product</span>
      </a>
      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
  
          <Link className="collapse-item" to="/Manage">Manage</Link>
        </div>
      </div>
    </li>
    {/* Nav Item - Utilities Collapse Menu */}
   
    {/* Divider */}
    <hr className="sidebar-divider d-none d-md-block" />
    {/* Sidebar Toggler (Sidebar) */}
    <div className="text-center d-none d-md-inline">
      <button className="rounded-circle border-0" id="sidebarToggle" />
    </div>
  </ul>
        
        </>
    )
}