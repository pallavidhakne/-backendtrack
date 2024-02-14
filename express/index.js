import express from "express"
const app=express();

app.get('/',(req,res)=>{
    res.send('Server is ready');
});
app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
        id:1,
        title:'A joke',
        content:"this is a joke"
        },
        {
            id:2,
            title:'2nd joke',
            content:"this is a 2nd joke"
        },
        {
            id:3,
            title:' 3rd joke',
            content:"this is a 3rd joke"
        },
        {
            id:4,
            title:'4th joke',
            content:"this is a 4th joke"
        },
        {
            id:5,
            title:'5th joke',
            content:"this is a 5th joke"
        }
    ]
    res.send(jokes);
});
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});
