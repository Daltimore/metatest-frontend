import React from 'react';
import { Select } from 'antd';

const EfficiencyAnalysis = () => {
  const { Option } = Select;

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  return (
    <main className="px-10">
      <header className="py-9 flex justify-between items-center">
        <h3 className="font-semibold text-2xl">Efficiency Analytics</h3>
        <div className="flex items-center">
          <div className='relative'>
            <input
              className='w-[350px] h-[44px] border border-gray-200 rounded-lg bg-transparent pl-12 focus:outline-none'
              placeholder="Search"
            />
            <span className='absolute left-5 top-2.5'>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.625 16.625C13.491 16.625 16.625 13.491 16.625 9.625C16.625 5.759 13.491 2.625 9.625 2.625C5.759 2.625 2.625 5.759 2.625 9.625C2.625 13.491 5.759 16.625 9.625 16.625Z" stroke="#A3A3C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.375 18.375L14.5687 14.5687" stroke="#A3A3C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </div>
          <div className="mr-4 ml-6">
            <Select defaultValue="Filter Options" style={{ width: 160 }} onChange={handleChange}>
              <Option value="date">Date</Option>
              <Option value="status">Status</Option>
            </Select>
          </div>
          <div className="border-l border-[#ECEBF5] h-7 mr-4"></div>
          <button className="text-white bg-[#25BB87] rounded-lg text-center py-3 w-[105px]">Export</button>
        </div>
      </header>
    </main>
  )
}

export default EfficiencyAnalysis