
async function getArr(){
    let resp = await fetch("http://localhost:4001/quests");
    let arrayImage =  await resp.text()
    let array = JSON.parse(arrayImage)
    
    
    return array
}
export const Arr = await getArr()
