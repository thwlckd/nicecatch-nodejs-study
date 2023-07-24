const app = require('./src/app');

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || 'http://localhost';

app.listen(PORT, () => {
  console.log(`🚀Server on → ${HOST}:${PORT}`);
});
