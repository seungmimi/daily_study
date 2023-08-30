var express = require('express');
var router = express.Router();

const postModel = require("../model/post");

router.post('/',async (req,res) => {
  const {title, content} = req.body;
  const post = new postModel({
    title: title,
    content: content
  });
  try{
    const result = await post.save();
    res.status(200).json({
      message: "업로드 성공",
      data: result
    });
  }catch(error){
    res.status(500).json({
      message: error
    });
  }
})

router.get('/', async (req,res) => {
  try{
    const result = await postModel.find({});
    res.status(200).json({
      message: "성공",
      data: result
    })
  }catch(error){
    res.status(500).json({
      message: error
    });
  }
})

router.get('/:id', async (req,res) => {
  const {id} = req.params;
  try{
    const result = await postModel.findById(id);
    res.status(200).json({
      message: "아이디 찾기 성공",
      data: result
    })
  }catch(error){
    res.status(500).json({
      message: error
    });
  }
})

router.put('/:id', async (req,res) => {
  const {id} = req.params;
  const {title, content} = req.body;
  try{
    const result = await postModel.findByIdAndUpdate(id,{
      title: title,
      content: content
    },{
      new: true
    })
    res.status(200).json({
      message: "업데이트 성공",
      data: result
    })
  }catch(error){
    res.status(500).json({
      message: error
    });
  }
})

router.delete('/:id', async (req,res) => {
  const {id} = req.params;
  try{
    await postModel.findByIdAndDelete(id)
    res.status(200).json({
      message: "삭제 성공",
      data: result
    })
  }catch(error){
    res.status(500).json({
      message: error
    });
  }
})

module.exports = router;
