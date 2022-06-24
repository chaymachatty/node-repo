const http=require('http');
const server= http.createServer((req,res)=>{
  if (req.url==='/'){
    res.end('welcome to our home page')
  }
  else if (req.url==='/about')
  {res.end('here is our short history !')}
  else{
  res.end(`
  <h1> OUUUps !</h1>
  <p> we cant seem tof the page </p>
  <a href='/'> back home </a> `)
  }
})
server.listen(5000)