// 1. importar o app(api)
// 2. definir uma porta e ouvi-la
const app = require('./src/app')

const PORT =process.env.PORT


app.listen(8000, () => console.log(`fé no pai que agora vai: 8000`))
