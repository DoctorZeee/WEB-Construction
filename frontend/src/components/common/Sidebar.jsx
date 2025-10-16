import React, { useContext } from "react";
import {AuthContext} from "../backend/context/Auth"

const Sidebar = () => {
  const {logout} = useContext(AuthContext)
    return (
        <>
            <div className="card shadow border-0">
                <div className="card-body p-4 sidebar">
                    <h4>Sidebar</h4>
                    <ul>
                      <ul>
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Articles</a></li>
                      </ul>
                      <button onClick={logout} className="btn btn-primary mt-4">Log Out</button>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
