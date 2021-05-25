let fs=require("fs");
let path=require("path");
function organizeFn(dirPath)
{
    let destPath;
    if(dirPath==undefined)
    {
       // console.log("Please provide Directory Path");
       destPath=process.cwd();
        return;
    }
    else{
            let doesExists=fs.existsSync(dirPath);
            if(doesExists==true)
            {
                destPath=path.join(dirPath,"organized_file");
                if(fs.existsSync(destPath)==false)
                {
                    fs.mkdirSync(destPath);
                }
                
            }
            else
            {
                console.log("Please provide a valid Directory path");
                return;
            }
    }
    organizeHelper(dirPath,destPath);
}

function organizeHelper(src,dest)
{
    let childName=fs.readdirSync(src);
    for(let i=0;i<childName.length;i++)
    {
        let childPath=path.join(src,childName[i]);
        let isFile=fs.lstatSync(childPath).isFile();
        if(isFile)
        {
          let category=getCategory(childName[i]);
          sendFile(childPath,dest,category);
        }
    
    }
}

function sendFile(srcFile,dest,category)
{
    let categoryPath=path.join(dest,category);
        if(fs.existsSync(categoryPath)==false)
          {
             fs.mkdirSync(categoryPath);
          }

    let fileName=path.basename(srcFile);
    let destFilePath=path.join(categoryPath,fileName);
   
    fs.copyFileSync(srcFile,destFilePath);
   // fs.unlinkSync(srcFile);
    console.log(fileName," copied");
}
function getCategory(name)
{
    let ext=path.extname(name);
    ext=ext.slice(1); //To remove . from .pdf ,.exe
    for(let type in types)
    {
        let currentTypeArr=types[type];
        for(let i=0;i<currentTypeArr.length;i++)
        {
            if(currentTypeArr[i]==ext)
            {
                return type;
            }
        }
    }
    return "others";
}
module.exports={
    organizeKey:organizeFn
};