const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index')
})

//router.all('*', async (ctx, next) => {
//  
//})

router.get('/favicon.ico', async (ctx, next) => {
  ctx.redirect(`/app/dist/favicon.ico`);
  ctx.status = 301;
})

router.get('/css/:name', async (ctx, next) => {
  ctx.redirect(`/app/dist/css/${ctx.params.name}`);
  ctx.status = 301;
})

router.get('/js/:name', async (ctx, next) => {
  ctx.redirect(`/app/dist/js/${ctx.params.name}`);
  ctx.status = 301;
})

module.exports = router
