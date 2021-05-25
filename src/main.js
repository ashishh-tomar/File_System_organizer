#!/usr/bin/env node
let inputArr=process.argv.slice(2);

let helpObj=require("../commands/help");
let treeObj=require("../commands/tree");
let organizeObj=require("../commands/organize");
let types={
    media : ["mp4","mkv","jpg"],
    archives:['zip','7z','rar','tar','gz','ar','iso','xz'],
    document:['docx','doc','pdf','xlsx','xls','odt','ods','odp','odg','odf','txt','ps','tex'],
    app:['exe','dmg','pkg','deb']
};
let command=inputArr[0];
let dirPath=inputArr[1];


switch(command)
{
    case "tree" : treeObj.treeKey(dirPath);
                 break;
    case "organize" : organizeObj.organizeKey(dirPath);
                 break;
    case "help" : helpObj.helpKey();
                 break;
    default : 
             console.log("Please Enter a Valid Command");
            break;
}






//Help Command Implemented
