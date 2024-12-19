// Select the necessary elements
const commentInput = document.querySelector(".comments textarea");
const submitButton = document.querySelector(".comments button");
const commentSection = document.querySelector(".comments");

// Function to handle comment submission
submitButton.addEventListener("click", () => {
    const commentText = commentInput.value.trim();

    if (commentText) {
        // Create a new comment element
        const newComment = document.createElement("p");
        newComment.textContent = commentText;
        newComment.className = "comment";

        // Append the new comment to the section
        commentSection.appendChild(newComment);

        // Clear the input field
        commentInput.value = "";
    } else {
        alert("Please write a comment before submitting.");
    }
});