const tiktok = require('.')
const url = 'https://www.tiktok.com/@ads.who/video/7152104100639870234'
const slider_url = 'https://v.douyin.com/i898mq6S/'

tiktok.tiklydown(url)
     .then(result => {
          console.log(result)
     })
     .catch(e => console.log(e))

tiktok.dlpanda(slider_url)
     .then(result => {
          console.log(result)
     })
     .catch(e => console.log(e))