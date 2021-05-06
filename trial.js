//const os = require(`os`)
//const path = require(`path`)
//const {readFile,writeFile} = require(`fs`)
const http=require('http')
//console.log(os.userInfo())
//console.log(`the system uptime is ${os.uptime()} seconds`)
//console.log(__filename)
//let currentOS={
//    name :os.type(),
  //  release: os.release(),
   // totalmem: (os.totalmem()/(1024*1024))+"gb",
 //   freemem:(os.freemem()/(1024*1024))+"gb",
//}
//console.log(currentOS)
//const base=  path.basename(__filename);
//console.log(base)
//const oldpath=path.join(__dirname,'content')
//const newpath=path.resolve(__dirname,'content','media')
//console.log(oldpath)
//console.log(newpath)
//writeFileSync('./first.txt','damn right we are..',{flag:'a'})
//const first=readFileSync('./first.txt','utf8')
//console.log(first)
//readFile('./first.txt','utf8',(err,result)=>{
//    if(err){
//        console.log(err)
//        return
//    }
//    const first = result
//    writeFile('./result.txt',`here is the result ${first}`,(err,result)=>{
//        if(err){
//                console.log(err)
//                return
//           }
//       else{
//             console.log(result)
//            }
//        }
//    )
//    })
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end(`<h1>welcome to our home page</h1>`)
    }
    if(req.url==='/about'){
        res.end(`<h1>welcome to our about page</h1>
        <a href='/'>back home</a>`)
    }
   res.end(`
   <h1>oops!!</h1>
   <p>we cant seem to find the page your looking for</p>
   <a href="/">back home</a>
   `)
})
server.listen(5000)


