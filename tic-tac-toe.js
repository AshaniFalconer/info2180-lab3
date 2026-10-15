document.addEventListener("DOMContentLoaded,
function()
{
   let squares = document.querySelectorAll("#aboard div");

   squares.forEach(function(square)
   {
      square.classList.add("square");
   });
});

