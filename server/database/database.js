const quests = require('./quests/quests.json');
const data = require('./data/data.json')
const initDatabase = () => ({
  quests,
  data,
});

module.exports = {
  initDatabase,
};
