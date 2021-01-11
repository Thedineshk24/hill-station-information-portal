import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title : "Add",
        path : "/add",
        icon : <AiIcons.AiFillHome />,
        cName : "nav-text",
    },
    {
        title : "Edit",
        path : "/edit",
        icon : <AiIcons.AiFillEdit />,
        cName : "nav-text",
    },
    {
        title : "Delete",
        path : "/delete",
        icon : <AiIcons.AiFillDelete />,
        cName : "nav-text",
    }
]
