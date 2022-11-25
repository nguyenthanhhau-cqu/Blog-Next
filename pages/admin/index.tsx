import React from 'react';
import AdminNav from "../../components/common/AdminNav";
import {MdDashboard} from "react-icons/md";
import {
    AiOutlineContainer,
    AiOutlineTeam,
    AiOutlineMail
} from "react-icons/ai";

function Admin() {

    const navItems = [{href: "/admin", icon: MdDashboard, label: "Dashboard"},
        {
            href: "/admin/posts",
            icon: AiOutlineContainer,
            label: "Posts"
        },
        {href: "/admin/users", icon: AiOutlineTeam, label: "Users"},
        {href: "/admin/comments", icon: AiOutlineMail, label: "Comments"}

    ]
    return (
        <div>
            <AdminNav navItems={navItems}/>
        </div>
    );
}

export default Admin;