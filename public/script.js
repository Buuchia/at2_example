document.body.style.margin   = 0
document.body.style.overflow = `hidden`

const cnv = document.getElementById (`cnv_element`)
cnv.width = innerWidth
cnv.height = innerHeight

const ctx = cnv.getContext (`2d`)

requestAnimationFrame(draw_frame)

const draw_frame = () => {
   //draw the background
   ctx.fillStyle = rand_col ()
   ctx.fillRect (0, 0, innerWidth, innerHeight)

   //draw the square
   ctx.fillStyle = 'tomato'
   ctx.fillRect = (x, y, size, size)

   //call the next frame
   requestAnimationFrame (draw_frame)
}

function rand_col () {
   return 'hsl(${ Math.random () *360 }, 50%, 50%)'
}

window.onresize = () => {
   cnv.width = innerWidth
   cnv.height = innerHeight   
}

