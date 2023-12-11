const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { authenticateUser } = require('./controllers/AuthController');
const { generateCareerPlan } = require('./controllers/CareerPlanController');
const { conductSkillAssessment } = require('./controllers/SkillAssessmentController');
const { getResources } = require('./controllers/ResourceLibraryController');
const { getRealTimeUpdates } = require('./controllers/RealTimeUpdatesController');
const { getCommunityCollaboration } = require('./controllers/CommunityCollaborationController');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// API routes
app.post('/api/authenticate', authenticateUser);
app.get('/api/careerplan/:userId', generateCareerPlan);
app.post('/api/skillassessment', conductSkillAssessment);
app.get('/api/resources', getResources);
app.get('/api/realtimeupdates', getRealTimeUpdates);
app.get('/api/communitycollaboration', getCommunityCollaboration);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
