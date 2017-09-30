import path from 'path'
import Koa from 'Koa'
import serve from 'koa-static'

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

// 设置静态目录
app.use(serve(path.resolve(__dirname, './assets')))

app.use(ctx => {
	ctx.body = `
		<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<title>Document</title>
			</head>
			<body>
				<img src="/images/github.jpeg" alt="" />
			</body>
		</html>
	`
})

const PORT = 9898
app.listen(PORT)

console.log(`server listen on http://localhost:${PORT}`)