let express = require('express')
let app = express()

app.get('/', function (req: any, res: any) {
  res.send('Hello World! This is api part!')
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})