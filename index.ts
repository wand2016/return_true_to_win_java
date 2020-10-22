import express from 'express'
import {execSync} from 'child_process'

const app: express.Express = express()

type Result = {
  result: 'pass'
  exitCode: 0
  stdout: string
} | {
  result: 'fail'
  exitCode: number
  stdout: string
  stderr: string
}

// CORSの許可
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// body-parserに基づいた着信リクエストの解析
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// GetとPostのルーティング
const router: express.Router = express.Router()
router.post('/api/submit', (req: express.Request, res: express.Response<Result>) => {
  const blank1 = String(req.body.blank1);
  const command = `
    docker-compose run \
    -e "blank1=${blank1}" \
    java < Main.java.tmpl
`
  console.log('command:', command);


  try {
    const stdout = execSync(command).toString();
    res.send({
      result: 'pass',
      exitCode: 0,
      stdout
    })
  }
  catch (error) {
    res.send({
      result: 'fail',
      exitCode: error.status,
      stdout: error.stdout.toString(),
      stderr: error.stderr.toString()
    })
  }
})
app.use(router)

// 3000番ポートでAPIサーバ起動
app.listen(3000,()=>{ console.log('Example app listening on port 3000!') })
