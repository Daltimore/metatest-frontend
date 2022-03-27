import React from 'react';
import { Tabs } from 'antd'
import DashboardLayout from '../layouts/DashboardLayout'
import EfficiencyAnalysisTab from '../components/EfficiencyAnalysis/EfficiencyAnalysis'

const Dashboard = () => {
  const { TabPane } = Tabs;

  const callback = (key) => {
    console.log(key);
  }
  return (
    <DashboardLayout>
      <main>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Efficiency" key="1">
          <EfficiencyAnalysisTab />
        </TabPane>
        <TabPane tab="Volume" key="2">
          Content of Volume
        </TabPane>
        <TabPane tab="Customer Satisfaction" key="3">
          Content of Customer Satisfaction
        </TabPane>
        <TabPane tab="Backlog" key="4">
          Content of Backlog
        </TabPane>
      </Tabs>
      </main>
    </DashboardLayout>
  )
}

export default Dashboard