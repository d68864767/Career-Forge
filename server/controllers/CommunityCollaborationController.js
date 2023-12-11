const getCommunityCollaboration = (req, res) => {
  // Logic to fetch community collaboration data from the database or external APIs

  const collaborationData = [
    {
      id: 1,
      title: "Community Event 1",
      description: "This is community event 1",
      date: "2022-12-01",
      location: "Virtual",
      link: "https://example.com/event1"
    },
    {
      id: 2,
      title: "Community Event 2",
      description: "This is community event 2",
      date: "2022-12-15",
      location: "In-person",
      link: "https://example.com/event2"
    },
    {
      id: 3,
      title: "Community Event 3",
      description: "This is community event 3",
      date: "2022-12-31",
      location: "Virtual",
      link: "https://example.com/event3"
    }
  ];

  res.status(200).json(collaborationData);
};

module.exports = {
  getCommunityCollaboration
};
