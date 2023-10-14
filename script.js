// Get the input field, send button, and add button
var input = document.getElementById("chat-input");
var sendButton = document.getElementById("send-button");
var addButton = document.getElementById("add-button");
var searchInput = document.getElementById("search-input");

// Function to send a message
function sendMessage() {
    // Get the input value
    var message = input.value;
    // Clear the input field
    input.value = "";

    // Create a new message element
    var newMessage = document.createElement("div");
    newMessage.textContent = message;

    // Add the 'sent-message' class to the new message
    newMessage.classList.add("sent-message");

    // Add the new message to the chat
    var chatMessages = document.getElementById("chat-messages");
    chatMessages.appendChild(newMessage);
}

// Execute sendMessage function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    sendMessage();
  }
});

// Execute sendMessage function when the user clicks on send button
sendButton.addEventListener("click", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  sendMessage();
});

// Execute a function when the user clicks on add button
addButton.addEventListener("click", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();

  // Get the search input value
  var user = searchInput.value;
  
  // Clear the search input field
  searchInput.value = "";

  // Create a new user element
  var newUser = document.createElement("div");
  newUser.textContent = user;

  // Add the new user to the user list
  var userList = document.getElementById("user-list");
  userList.appendChild(newUser);
});

// Execute a function when the user types in search input field
searchInput.addEventListener("keyup", function(event) {
  // Get all users in user list
  var users = document.getElementById("user-list").children;

  // Loop through all users and highlight those that match with search input value
  for (var i = 0; i < users.length; i++) {
    if (users[i].textContent.includes(searchInput.value)) {
      users[i].style.backgroundColor = "yellow"; // Highlight matching users
    } else {
      users[i].style.backgroundColor = "white"; // Remove highlight from non-matching users
    }
  }
});
