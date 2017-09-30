import path from 'path'
import Koa from 'koa'
import views from 'co-views'
const app = new Koa()

const render = views(path.resolve(__dirname, './templates'), {
	ext: 'ejs'
})

let user = {
  name: {
    first: 'Tobi',
    last: 'Holowaychuk'
  },
  species: 'ferret',
  age: 3
};

app.use(async ctx => {
	ctx.body = await render('user', {user})
})

const PORT = 9898
app.listen(PORT)

console.log(`server listen on http://localhost:${PORT}`)