// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const path = require('path');
// const router = require('./routes/routes');

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// app.use('/api', router);

// app.listen(port, ()=> {
//   console.log('Serve running on port ',port);
// });

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const router = require('./routes/routes');
const { getClanData } = require('./controllers/controllers');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.listen(port, () => {
  console.log('Server running on port', port);
});
