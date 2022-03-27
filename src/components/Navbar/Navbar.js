import React from 'react';

const Navbar = () => {
  return (
    <nav className='py-3 px-10 border-b border-gray-100'>
      <div className='flex justify-between items-center'>
        <div className='relative'>
          <input
            className='w-[441px] h-[54px] border-0 rounded-[10px] bg-[#FAFAFC] px-4'
            placeholder="Ask us any question"
          />
          <span className='absolute right-6 top-4'>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.625 16.625C13.491 16.625 16.625 13.491 16.625 9.625C16.625 5.759 13.491 2.625 9.625 2.625C5.759 2.625 2.625 5.759 2.625 9.625C2.625 13.491 5.759 16.625 9.625 16.625Z" stroke="#A3A3C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.375 18.375L14.5687 14.5687" stroke="#A3A3C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>
        <div className="rounded-[10px] border border-gray-100 p-4 flex justify-between items-center">
          <div className="flex items-center">
          <span>
            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.23503 2.48071C9.10196 1.36502 8.15249 0.5 7.00098 0.5C5.84947 0.5 4.9 1.36502 4.76693 2.48071C2.88993 3.3316 1.58431 5.22166 1.58431 7.41667V11.1799L0.331437 13.662C0.0796442 14.1609 0.442195 14.75 1.00098 14.75H4.87901C5.18788 15.6239 6.02131 16.25 7.00098 16.25C7.98064 16.25 8.81407 15.6239 9.12295 14.75H13.001C13.5598 14.75 13.9223 14.1609 13.6705 13.662L12.4176 11.1799V7.41667C12.4176 5.22166 11.112 3.3316 9.23503 2.48071ZM10.9981 11.6964L11.7823 13.25H2.21967L3.00385 11.6964C3.05675 11.5916 3.08431 11.4759 3.08431 11.3585V7.41667C3.08431 5.25355 4.83786 3.5 7.00098 3.5C9.16409 3.5 10.9176 5.25355 10.9176 7.41667V11.3585C10.9176 11.4759 10.9452 11.5916 10.9981 11.6964Z" fill="#A3A3C2"/>
            </svg>
          </span>
          <span className="bg-[#F25A68] rounded-[4px] w-4 h-4 text-center text-xs text-white ml-[10.75px]">3</span>
          </div>
          <div className="border-l border-gray-200 mx-6 h-6"></div>
          <div className="flex items-center space-x-3">
            <span>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 33C25.8366 33 33 25.8366 33 17C33 8.16344 25.8366 1 17 1C8.16344 1 1 8.16344 1 17C1 25.8366 8.16344 33 17 33Z" stroke="#6837EF"/>
              </svg>
            </span>
            <span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 9.05719L10.8619 6.19526C11.1223 5.93491 11.5444 5.93491 11.8047 6.19526C12.0651 6.45561 12.0651 6.87772 11.8047 7.13807L8.4714 10.4714C8.21105 10.7318 7.78895 10.7318 7.5286 10.4714L4.19526 7.13807C3.93491 6.87772 3.93491 6.45561 4.19526 6.19526C4.45561 5.93491 4.87772 5.93491 5.13807 6.19526L8 9.05719Z" fill="#696D8C"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar