// Create function addUser()
function addUser() {
  // Get value of user by id player1_name_input and player2_name_input
  player1_name_input = localStorage.getItem("player1_name_input");
  player2_name_input = localStorage.getItem("player2_name_input");

  // Store these values locally

  //Assign "game_page.html" to window.location
  window.location = "game_page.html";
}

