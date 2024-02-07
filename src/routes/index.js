//routes

const { Router } = require('express');
const router = Router();


router.get('/', (req, res) => {
  res.json({ "titulo": "hello world" });
});

router.get('/test', (req, res) => {
  const data = {
    "titulo": "pagina test"
  };
  res.json(data);
});



module.exports = router;