import Koa from 'Koa'
import sleep from '../../utils/sleep.js'
const app = new Koa();

// 日志
app.use(logger)
async function logger(ctx, next){
	let iStart = new Date()
	await next()
	let { method, path } = ctx.request
	let ms = new Date() - iStart
	console.log(`${method} ${ctx.url} - ${ms}ms`)
}

// 延迟
app.use(async (ctx, next) => {
	await sleep(300);
	next();
})

app.use(ctx => {
	ctx.body = '666'
})

const PORT = 9898;
app.listen(PORT)

console.log(`server listen on http://localhost:${PORT}`)