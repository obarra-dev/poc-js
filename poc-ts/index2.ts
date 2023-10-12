// assertions

// canvas could be HTMLElement or null
const canvas = document.getElementById('span')

if (canvas instanceof HTMLCanvasElement) {
  // infiere que canvas es HTMLCanvasElement
  // ademas es todo js
  const cxt = canvas.getContext('2d')
}

// tambine se puede usar as pero esto obliga al ts a entenderlo como lo que el programador decide