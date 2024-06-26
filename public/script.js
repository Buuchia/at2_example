document.body.style.margin   = 0
document.body.style.overflow = `hidden`

const cnv = document.getElementById (`cnv_element`)
cnv.width = innerWidth
cnv.height = cnv.width * 9 / 16

const ctx = cnv.getContext (`2d`)
//draw the background
ctx.fillRect (0, 0, innerWidth, cnv.height)
ctx.fillStyle = rand_col ()


function draw_square (size) {
   //draw the square
   const x = cnv.width / 2 - size / 2
   const y = cnv.height / 2 - size / 2
   ctx.fillStyle = `turquoise`
   ctx.fillRect (x, y, 50, 50)
}

function draw_squares (start_size) {
   draw_square (start_size)

   if (start_size > 0) {
      draw_squares (start_size - 20)
   }

   //call the next frame
   //requestAnimationFrame (draw_squares)
}

//requestAnimationFrame(draw_squares)

function rand_col () {
   return 'hsl(${ Math.random () * 360 }, 50%, 50%)'
}

window.onresize = () => {
   cnv.width = innerWidth
   cnv.height = cnv.height   
}


//Link: https://www.youtube.com/watch?v=jPsZwrV9ld0