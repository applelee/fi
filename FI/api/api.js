const _ = require('lodash');
const config = require('../config');
const AV = require('leancloud-storage');
const fs = require('fs');
const path = require('path');

AV.init({
  appId:'DGnG1OD1NVfhhsiGxIQw6bJW-MdYXbMMI',
  appKey:'1qE5d1P51UbH00hHCr861Oy4',
  region:'us'
});

//根据ID获取对应视频
exports.oneVideo = function(videoId){
  const videoContent = new AV.Query('Video')
  return videoContent.get(videoId)
}

//查询最新的5个视频
exports.newFiveVideo = function(videoId){
  const videoContent = new AV.Query('Video')
  return videoContent.descending('createdAt').notEqualTo('objectId',videoId).limit(5).find()
}
