import React from 'react';
import CareerPlan from './components/CareerPlan';
import SkillAssessment from './components/SkillAssessment';
import ResourceLibrary from './components/ResourceLibrary';
import RealTimeUpdates from './components/RealTimeUpdates';
import CommunityCollaboration from './components/CommunityCollaboration';

function App() {
  return (
    <div>
      <h1>CareerForge</h1>
      <CareerPlan />
      <SkillAssessment />
      <ResourceLibrary />
      <RealTimeUpdates />
      <CommunityCollaboration />
    </div>
  );
}

export default App;
