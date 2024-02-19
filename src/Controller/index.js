import fs from 'fs'
import path from 'path'
const file = 'src/asset'
const readWriteFile = async(req,res)=>{
  try {
   let dateTime = new Date().toISOString().replace(new RegExp(':','g'),'_')
   console.log(dateTime)
    fs.writeFileSync(`${file}/${dateTime}.txt`,dateTime,'utf-8')

    let content = fs.readFileSync(`${file}/${dateTime}.txt`,'utf-8')

    res.status(200).send({
        message:"Success",
        content
    })
  } catch (error) {
    console.log(error) 
    res.status(500).send({
        error
    })
  }

}
export default {
    readWriteFile
}
