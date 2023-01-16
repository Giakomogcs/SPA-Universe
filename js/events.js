import {
  Home,
  Universo,
  Exploracao,
  BTuniverso,
  ImagesBG,
} from './elements.js'

import Style from './style.js'

export default function() {
  Home.addEventListener('click', function() {
    Style()
  })
  
  Universo.addEventListener('click', function() {
    Style()
  })

  Exploracao.addEventListener('click', function() {
    Style()
  })


  return 

}