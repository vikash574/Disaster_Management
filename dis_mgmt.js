// Function to toggle chat box visibility
function toggleChat() {
    var chatBox = document.getElementById("chatBox");
    var openChatButton = document.getElementById("openChat");
  
    // Toggle the visibility of the chat box
    if (chatBox.style.display === "none") {
      chatBox.style.display = "block";
      openChatButton.textContent = "Close Chat";
    } else {
      chatBox.style.display = "none";
      openChatButton.textContent = "Open Chat";
    }
  }
  
  // Function to send message
  // function sendMessage() {
  //   var messageInput = document.querySelector(".chat-input input");
  //   var message = messageInput.value;
  //   // Code to send message
  //   // Example: Append message to chat content
  //   var chatContent = document.querySelector(".chat-content");
  //   var newMessage = document.createElement("div");
  //   newMessage.textContent = message;
  //   chatContent.appendChild(newMessage);
  //   messageInput.value = ""; // Clear input field
  // }
  document.getElementById('logoutButton').addEventListener('click', function() {
    // Redirect to login page upon logout
    window.location.href = 'login.html';
  });
  // Function to send message
function sendMessage() {
  var messageInput = document.querySelector(".chat-input input");
  var message = messageInput.value;
  // Code to send message
  // Example: Append message to chat content
  var chatContent = document.querySelector(".chat-content");
  var newMessage = document.createElement("div");
  newMessage.textContent = message;
  chatContent.appendChild(newMessage);
  messageInput.value = ""; // Clear input field
}
var replies = [
  "Yes sir!..Where I go for mission",
  "Which casualities are for that area?",
  "How many rescuers should I take with me?",
  "Okay!..Copy that sir."
];
var nextReplyIndex = 0; // Index of the next reply to send

function sendMessage() {
  var messageInput = document.getElementById('messageInput');
  var message = messageInput.value;
  
  if (message.trim() !== '') {
    var chatMessages = document.getElementById('chatMessages');
    var newMessage = document.createElement('div');
    newMessage.classList.add('chat-message', 'sent'); // Add 'sent' class for sent messages
    newMessage.innerHTML = `
    <img src="sold4.jpg" alt="Your Profile Image" class="profile-img"> <!-- Your profile image -->
    <span class="sender">You:</span> <!-- Other person's name -->
      <span class="message-text">${message}</span>
    `;
    chatMessages.appendChild(newMessage);
    messageInput.value = ''; // Clear input field
    
    // Simulate receiving a reply from the other person after a short delay
    setTimeout(function() {
      receiveMessageFromOtherPerson();
    }, 1000); // Simulate delay
  }
}

function receiveMessageFromOtherPerson() {
  var chatMessages = document.getElementById('chatMessages');
  var newMessage = document.createElement('div');
  newMessage.classList.add('chat-message', 'received'); // Add 'received' class for received messages
  newMessage.innerHTML = `
    <img src="profile3.jpg" alt="Other Person's Profile Image" class="profile-img"> <!-- Other person's profile image -->
    <span class="sender">Rescuer:</span> <!-- Other person's name -->
    <span class="message-text">${replies[nextReplyIndex]}</span> <!-- Reply message -->
  `;
  chatMessages.appendChild(newMessage);
  
  nextReplyIndex = (nextReplyIndex + 1) % replies.length; // Move to the next reply index, wrapping around if needed
}


// Function to show overview section
function showOverview() {
  var overviewSection = document.getElementById("overview");
  overviewSection.style.display = "block";
  var strategiesSection = document.getElementById("strategies");
  strategiesSection.style.display = "none";
  var messagesSection = document.getElementById("messages");
  messagesSection.style.display = "none";
}

// Function to show messages section
function showMessages() {
  var overviewSection = document.getElementById("overview");
  overviewSection.style.display = "none";
  var strategiesSection = document.getElementById("strategies");
  strategiesSection.style.display = "none";
  var messagesSection = document.getElementById("messages");
  messagesSection.style.display = "block";
}
// Carousel functionality
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}  
var userData = {
  username: "Officer",
  profilePicture: "sold4.jpg" // URL to the user's profile picture
};

// Function to update profile picture and username
function updateProfile() {
  var profilePicture = document.getElementById("profile-picture");
  var username = document.getElementById("username");

  profilePicture.src = userData.profilePicture;
  username.textContent = userData.username;
}

// Call the function to update profile picture and username when the page loads
window.onload = function() {
  updateProfile();
};