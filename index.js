// code your solution here
function superbowlWin(record){
    const winDetails=record.find(item=>item["result"]==="W")
    if(winDetails){
        return winDetails["year"]
    }
    else{
        return undefined
    }
    
}