import {Router} from './router.js'
import Events from "./events.js"
import Style from "./style.js"


const router = new Router()
router.add('/','/pages/home.html')
router.add('/universo','/pages/universo.html')
router.add('/exploracao','/pages/exploracao.html')
router.add(404,'/pages/404.html')

router.handle()
Style()

window.onpopstate = () => {
  router.handle()
  Style()
}

window.route = () => {
  router.route()
  Style()
}

Events()







