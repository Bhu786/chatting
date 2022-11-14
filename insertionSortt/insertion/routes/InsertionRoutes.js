const express = require('express')
const {Router} = require('express')
const { resolve } = require('path')
const InsertedSchema = require('../models/inserted')
const router = express.Router()


router.get('/all',async(req,res)=>{
    const allinsert = await InsertedSchema.find()
    res.json(allinsert)

})
router.post('/insertion',async(req,res)=>{
    
    let re = {}
    
    
    
    const {Iarray} = req.body
    try{
        const result = await InsertedSchema.create({
            Iarray
        })
        //res.json(result)
        const nums = result.Iarray
        console.log(result.Iarray)
        re[nums] = 'nums'
        const sorting = (nums) =>{
        for (let i = 1; i < nums.length; i++) {
            let j = i - 1
            let temp = nums[i]
            
            while (j >= 0 && nums[j] > temp) {
              nums[j + 1] = nums[j]
              j--
              
            }
            nums[j+1] = temp
            
            console.log(nums)
            
            re[nums]='nums'
            
            
          }
          return nums
        }
        let finale = sorting(nums)
        //console.log(finale)
        
        console.log(re)
        let finals = Object.keys(re)
        console.log(finals)
        
        res.json(finals)
    
    }catch(err){
        res.send(err)
    }
    
})

module.exports = router