let fs=require("fs");
let path=require("path");
function treeFn(dirPath)
{
    
    if(dirPath==undefined)
    {
       // console.log("Please provide Directory Path");
       
       treeHelper(process.cwd(),"");
        return;
    }
    else{
            let doesExists=fs.existsSync(dirPath);
            if(doesExists==true)
            {
              treeHelper(dirPath , "");
                
            }
            else
            {
                console.log("Please provide a valid Directory path");
                return;
            }
    }
}

function treeHelper(dirPath,indent)
{
    //is file or folder
    let isFile=fs.lstatSync(dirPath).isFile();
    if(isFile)
    {
        let fileName=path.basename(dirPath)
        console.log(indent+"----------"+fileName);
    }
    else{
        let dirName=path.basename(dirPath);
        console.log(indent+"1_______"+dirName);
        let children=fs.readdirSync(dirPath);
        for(let i=0;i<children.length;i++)
        {
            let childrenPath=path.join(dirPath,children[i]);
            treeHelper(childrenPath,indent+"\t");
        }
    }
}
module.exports={
    treeKey:treeFn
};

