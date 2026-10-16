document.addEventListener("DOMContentLoaded"
,  function()
   {
      let squares = document.querySelectorAll("#board div");

      let board = ["", "", "", "", "", "", "", "", ""];

      let status = document.getElementById("status");

      let newGameButton = document.querySelector(".btn");

      function checkWinner(player)
      {
         const winningCombos =
         [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
         ];

         for(let combo of winningCombos)
         {
            if(board[combo[0]] === player &&
               board[combo[1]] === player &&
               board[combo[2]] === player
               )
            {
               return true;
            }
        }

        return false;

      }

      squares.forEach(function(square)
      {
         square.classList.add("square");
      });


      let currentPlayer = "X";

      squares.forEach(function(square,index)
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

              board[index] = currentPlayer;

              if(checkWinner(currentPlayer))
              {
                 status.textContent = "Congratulations! " + currentPlayer + " is the Winner!";

                 status.classList.add("you-won");

                 return;
              }


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

      newGameButton.addEventListener("click",
        function()
        {
           board = ["", "", "", "", "", "", "", "", ""];

           currentPlayer = "X";

           squares.forEach(function(square)
           {
              square.textContent = "";

              square.classList.remove("X");
              square.classList.remove("O");
           });

           status.textContent = "Move your mouse over a square and click to play an X or an O.";

           status.classList.remove("you-won");

        });


     });
