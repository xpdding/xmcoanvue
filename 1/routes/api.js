const router = require('koa-router')()
const midcont = require('../midcont/midcont')

router.prefix('/api')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/t',midcont.usertest)

router.post('/addNewTea',midcont.addNewTea)
router.get('/addNewTea',midcont.addNewTea)

router.post('/addNewStu',midcont.addNewStu)
router.get('/addNewStu',midcont.addNewStu)
// addNewCo
router.post('/addNewCo',midcont.addNewCo)
router.get('/addNewCo',midcont.addNewCo)
// getCos
router.post('/getCos',midcont.getCos)
router.get('/getCos',midcont.getCos)
// getStuByTea
router.post('/getStuByTea',midcont.getStuByTea)
router.get('/getStuByTea',midcont.getStuByTea)
// postCotostu
router.post('/postCotostu',midcont.postCotostu)
// router.get('/postCotostu',midcont.postCotostu)
// router.get('/t', midcont.usertest)

// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

module.exports = router
