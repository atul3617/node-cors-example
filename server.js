const http=require('http')

http.createServer((req,res)=>{
    let boys=[{
        name:"sahil",
        ability:"can't imagine",
        strength:"unlimited"
    },{
        name:"shreenath",
        ability:"below the belt",
        strength:"language"
    },{
        name:"ankit",
        ability:"poker face",
        strength:"call anytime"
    }]
    res.writeHead(200,"okay",{"content-type":"application/json","Access-Control-Allow-Origin":"*"})
    res.end(JSON.stringify(boys))

}).listen(4000,()=>{
    console.log("server is running on the port 4000... ");
})