/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState }  from 'react';
import navList from '../NavList'

const Sidebar = () => {
  const [isToogle, setIsToogle] = useState(null)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(0)

  const toogleShow = (index) => {
    if(index !== isToogle) {
      setIsToogle(index)
    } else 
    setIsToogle(null)
  }

  const subMenuToogle = (index) => {
    setIsSubMenuOpen(index)
  }
 
  return (
    <aside className="w-[262px] border-r border-[#ECEBF5] pl-[22px] pt-[21px] pr-[19px]">
      <div className="pl-[57px] flex flex-col border border-[#ECEBF5] rounded-lg p-3">
        <h4 className="font-normal text-sm">Metacare</h4>
        <p className="text-xs text-secondary">adeyinka@metacare.app</p>
      </div>
      <div className="overflow-y-auto pt-[30px]">
        <ul className="space-y-[29px]">
          {
            navList && navList.map((list, index) => (
              <li key={index} onClick={() => toogleShow(index)}>
                <a href="#" className="flex justify-between items-center p-2">
                  <div className="flex items-center">
                    <img src={list.icon} alt="list-icon"/>
                    <span className={index === isToogle ? "text-primary text-normal pl-[19px]" : 'text-secondary text-normal pl-[19px]' }>{list.name}</span>
                  </div>
                  {
                    index === isToogle ? 
                    <svg
                      className="transition duration-500 ease-in"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858Z" fill="#E5E4EF"/>
                    </svg>
                    :
                    <svg
                      className="transition duration-500 ease-out"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5858 12L9.29289 7.70711C8.90237 7.31658 8.90237 6.68342 9.29289 6.29289C9.68342 5.90237 10.3166 5.90237 10.7071 6.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071C8.90237 17.3166 8.90237 16.6834 9.29289 16.2929L13.5858 12Z" fill="#E5E4EF"/>
                  </svg>
                  }
                </a>
                <div>
                  {
                    index === isToogle ? 
                    <ul className="transition duration-500 ease-in-out ml-5">
                      { list.otherLinks && list.otherLinks.map((link, i) => (
                        <li key={i} className={i === isSubMenuOpen ? "border-l border-gray-200 pb-[10px] mt-3" : "pb-[10px] mt-3"} onClick={() => subMenuToogle(i)}>
                          <a href="#" className={i === isSubMenuOpen ? "text-[#060213] text-sm pl-3" : "text-secondary text-sm pb-[10px] pl-3"}>{link.name}</a>
                        </li>
                      ))}
                    </ul>
                    :
                    ""
                  }
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar