import AdminIcon from '../assets/svgs/Admin.svg'
import KnowledgeBaseIcon from '../assets/svgs/KnowledgeBase.svg'
import TrainSamIcon from '../assets/svgs/TrainSam.svg'
import AgentInboxIcon from '../assets/svgs/AgentInbox.svg'
import HelpCenterIcon from '../assets/svgs/HelpCenter.svg'
import AnalyticsIcon from '../assets/svgs/Analytics.svg'

const navList = [
  {
    id: 1,
    name: 'Admin',
    icon: AdminIcon,
  },
  {
    id: 2,
    name: 'Knowledge Base',
    icon: KnowledgeBaseIcon,
  },
  {
    id: 3,
    name: 'Train SAM',
    icon: TrainSamIcon,
  },
  {
    id: 4,
    name: 'Agent Inbox',
    icon: AgentInboxIcon,
  },
  {
    id: 5,
    name: 'Help Center',
    icon: HelpCenterIcon ,
  },
  {
    id: 6,
    name: 'Analytics',
    icon: AnalyticsIcon,
    otherLinks: [
      {
        name: 'Teams'
      },
      {
        name: 'Knowledge Base'
      },
      {
        name: 'Training SAM'
      },
      {
        name: 'Help Center'
      }
    ]
  }
];

export default navList