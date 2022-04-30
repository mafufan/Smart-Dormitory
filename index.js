const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8080);

app.get('/', (req, res) => {
  res.send('<h1>Hello Express!</h1>');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트 서버 대기중~~');
});
