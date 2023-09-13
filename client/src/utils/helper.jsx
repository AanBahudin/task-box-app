import { BsClipboard2Fill, BsClipboard2CheckFill, BsClipboard2PulseFill, BsClipboard2XFill } from 'react-icons/bs'

import notification from '../assets/images/bell.png'
import organize from '../assets/images/gear.png'
import prioritize from '../assets/images/prioritize.png'
import access from '../assets/images/knowledge.png'

import userFriendly from '../assets/images/userfriendly.svg'
import passion from '../assets/images/passion.svg'
import cross from '../assets/images/newhero.svg'


export const boxContent = [
    {
        logo: notification,
        text: 'TaskBox will remind you of crucial tasks that need your attention',
        title: 'Personal Reminders'
    },
    {
        logo: organize,
        text: 'You can quickly create task lists and categorize them to suit your needs.',
        title: 'Better Organization'
    },
    {
        logo: prioritize,
        text: 'Easily set priorities for your tasks, so you always know what to tackle next.',
        title: 'Prioritize Your Tasks'
    },
    {
        logo: access,
        text: 'Accessible from various devices, allowing you to access your task list from anywhere, at any time.',
        title: 'Access Anywhere'
    }
]

export const missionContent = [
    {
        logo: userFriendly,
        title: 'User-Friendly Interface',
        text: 'Our user-friendly interface ensures that you can get started quickly, without a steep learning curve.'
    },
    {
        logo: cross,
        title: 'Cross-Platform Access',
        text: "Access your tasks from anywhere, whether you're at your desk, on your mobile device. Your tasks are always within reach."
    },
    {
        logo: passion,
        title: 'Passion for Productivity',
        text: "Our team is dedicated to creating an intuitive and powerful tool that simplifies your life."
    },
]

// will remove when server is ready

export const taskManagementOverviewExample = [
    {
        title: 'TOTAL TASK CREATED',
        total: 23,
        logo: <BsClipboard2Fill />
    },
    {
        title: 'COMPLETED TASKS',
        total: 23,
        logo: <BsClipboard2CheckFill />
    },
    {
        title: 'TASKS IN PROGRESS',
        total: 23,
        logo: <BsClipboard2PulseFill />
    },
    {
        title: 'TASKS ON HOLD',
        total: 23,
        logo: <BsClipboard2XFill />
    },
]

export const recentlyAddedTasksExample = [
    {
        title: 'Meeting With Marketing Team',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetu'
    },
    {
        title: 'Meeting With Marketing Team',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetu'
    },
    {
        title: 'Meeting With Marketing Team',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetu'
    },
    {
        title: 'Meeting With Marketing Team',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetu'
    },
]