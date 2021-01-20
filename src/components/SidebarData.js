import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <AiIcons.AiOutlineUser />,
        cName: 'nav-text'
    },
    {
        title: 'Education',
        path: '/education',
        icon: <AiIcons.AiOutlineBook />,
        cName: 'nav-text'
    },
    {
        title: 'Skills',
        path: '/skills',
        icon: <IoIcons.IoCodeWorkingOutline />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <AiIcons.AiOutlineMail />,
        cName: 'nav-text'
    }
]