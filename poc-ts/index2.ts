// assertions

// retorna un tipo muy general
const htmlElement = document.getElementById("canvas") 

// canvas could be HTMLElement or null
const canvas = document.getElementById("canvas");

// way 1
// con el instanceof de js, ts puede inferir que es un HTMLCanvasElement
// ademas es todo js, la validacion es a nivel js
if (canvas instanceof HTMLCanvasElement) {
  const cxt = canvas.getContext("2d");
}

// way 2, esta bien pero no hace coprobacion en js sobre si es un canvas realemente
const canvas2 = document.getElementById("canvas");
if (canvas2 != null) {
  const cxt = (canvas2 as HTMLCanvasElement).getContext("2d");
}

// way 3, es la pero xq oculta el null y puede romper en ejecicion
// tambine se puede usar as pero esto obliga al ts a entenderlo como lo que el programador decide
const canvas3 = document.getElementById("canvas") as HTMLCanvasElement;
const cxt = canvas3.getContext("2d");



const canvas4: HTMLCanvasElement = document.getElementById("canvas");
if (canvas4 != null) {
    const cxt = canvas4.getContext("2d");
  }
  
