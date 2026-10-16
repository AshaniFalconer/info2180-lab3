document.addEventListener("DOMContentLoaded"
,  function()
   {
      let squares = document.querySelectorAll("#board div");

      squares.forEach(function(square)
      {
         square.classList.add("square");
      });


      let currentPlayer = "X";

      squares.forEach(function(square)
      {
         square.addEventListener("mouseover",
           function()
           {
              square.classList.add("hover");
           });

         square.addEventListener("mouseout",
           function()
           {
              square.classList.remove("hover");
           });

         square.addEventListener("click",
           function()
           {
              if(square.textContent !== "")
              {
                 return;
              }

              square.textContent = currentPlayer;
              square.classList.add(currentPlayer);

              if(currentPlayer === "X")
              {
                 currentPlayer = "O";
              }
              else
              {
                 currentPlayer = "X";
              }
          });

       });

    });
