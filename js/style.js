import {
  Home,
  Universo,
  Exploracao,
  BTuniverso,
  ImagesBG,
} from './elements.js'

let tx_nav= '#C4C4CC';
let fw_nav= '400';
let bg_buttom= 'transparent';
let txt_buttom= '#FFFFFF';
let bg_img= 'url("./images/mountains-universe-1.png")';

let {pathname} = window.location

export default function Style(){


  if(pathname == '/'){
    home()
  }

  if(pathname == '/universo'){
    universo()
  }

  if(pathname == '/exploracao'){
    exploracao()
}

  function home(){
    reset()

    bg_img= 'url("./images/mountains-universe-1.png")'
    tx_nav= '#FFFFFF'
    fw_nav= '700';

    Home.style.setProperty('--tx-nav', tx_nav);
    Home.style.setProperty('--fwnav', fw_nav);
    ImagesBG.style.setProperty('--bg-img', bg_img);
  }

  function universo(){
    reset()

    bg_img= 'url("./images/mountains-universe02.png")'
    tx_nav= '#FFFFFF'
    fw_nav= '700';

    Universo.style.setProperty('--tx-nav', tx_nav);
    Universo.style.setProperty('--fwnav', fw_nav);
    ImagesBG.style.setProperty('--bg-img', bg_img);
  }

  function exploracao(){
    bg_img= 'url("./images/mountains-universe-3.png")'
    tx_nav= '#FFFFFF'
    fw_nav= '400';

    Exploracao.style.setProperty('--tx-nav', tx_nav);
    Exploracao.style.setProperty('--fwnav', fw_nav);
    ImagesBG.style.setProperty('--bg-img', bg_img);

  }

  function reset() {

    tx_nav= '#C4C4CC'
    fw_nav= '700';

    Home.style.setProperty('--tx-nav', tx_nav);
    Home.style.setProperty('--fwnav', fw_nav);

    Universo.style.setProperty('--tx-nav', tx_nav);
    Universo.style.setProperty('--fwnav', fw_nav);

    Exploracao.style.setProperty('--tx-nav', tx_nav);
    Exploracao.style.setProperty('--fwnav', fw_nav);

  }

  return{
    home,
    universo,
    exploracao,
  }
}