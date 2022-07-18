const fs = require('fs');
let filePath='products.json';
function getAllData(req,res){
    fs.readFile(filePath,(err,data)=>{
        if(err){
            return console.log(err)
        }
        console.log('data',data)
        return res.send(data)
    })
}

 function addData(req,res){
    let dataToAdd=req.body;
    let data = fs.readFileSync(filePath);
    // console.log(data)
    let myObj=JSON.parse(data)
    myObj.push(dataToAdd)
    let newData2 = JSON.stringify(myObj);
    console.log(myObj)
    fs.writeFile(filePath,newData2, (err) => {
        if (err) throw err;
        console.log("New data added");
        return res.send('New Data Added')
      });
}

function updateData(req,res){
    let {id} = req.params;
    console.log(id)
    let dataToUpdate=req.body;
    let data = fs.readFileSync(filePath);
    // console.log(data)
    let myObj=JSON.parse(data)
    // let newData=[]
    for(let i=0;i<myObj.length;i++){
        if(myObj[i].id==id){
            // newData.push(myObj[i]);
            for(let j in dataToUpdate){
                myObj[i][j]=dataToUpdate[j]
            }
        }
    }
    let newData2 = JSON.stringify(myObj);
    fs.writeFile(filePath,newData2, (err) => {
        if (err) throw err;
        console.log("Data modified");
        return res.send('Data has been modified',newData2)
      });
}

function deleteData(req,res){
    let {id} = req.params;
    // console.log(id)
    // let dataToAdd=req.body;
    let data = fs.readFileSync(filePath);
    // console.log(data)
    let myObj=JSON.parse(data)
    let newData=[]
    for(let i=0;i<myObj.length;i++){
        if(myObj[i].id!=id){
            newData.push(myObj[i]);
        }
    }
    let newData2 = JSON.stringify(newData);
    fs.writeFile(filePath,newData2, (err) => {
        if (err) throw err;
        console.log("Data deleted");
        return res.send('Data has been deleted')
      });

}
module.exports = {
    getAllData,
    addData,
    updateData,
    deleteData,
}