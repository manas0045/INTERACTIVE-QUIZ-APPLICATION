# INTERACTIVE-QUIZ-APPLICATION

*COMPANY NAME :- CODTECH IT SOLUTIONS*

*NAME :-MANASRANJAN ROUT*

*INTERN ID :-*

*DOMAIN :-FRONTEND DEVELOPEMENT*

*DURATION :-4WEEKS*

*MENTOR :-NEELA SANTOSH*

  *DESCRIPTION*

The Interactive Quiz Application is a lightweight and dynamic web-based platform built using HTML, CSS, and JavaScript. Designed with simplicity and engagement in mind, this app provides an intuitive way for users to take timed quizzes with multiple-choice questions.

Whether you’re preparing for a test, practicing general knowledge, or just killing time productively—this app makes it easy and fun to learn.

<img width="1752" height="936" alt="Image" src="https://github.com/user-attachments/assets/923b34bf-4363-456e-8e15-21a2f177e887" />


Smart Layout for Smarter Learning

The core of the app lies in its clean and distraction-free quiz box. Users are greeted with a question, four possible answers, and a visible countdown timer set to 30 seconds. The layout ensures that the content remains the focus.

Key UI Sections:
Timer (#time): Positioned at the top, keeping the user aware of the ticking clock.

Question Area (.question): Clearly displays the active question.

Answer Options: Each <li> holds a radio button and a label, styled for visibility and ease of selection.

Submit Button (#submmit): Allows the user to lock in their answer and proceed.

The Interactive Quiz Application is a browser-based quiz tool built using modern HTML, CSS, and JavaScript. With a vibrant UI and clean layout, it offers an engaging way for users to test their knowledge and challenge themselves. Whether you’re a student, professional, or trivia enthusiast, this app is a perfect choice for self-assessment or casual learning.


✨ Features
✅ Multiple-Choice Interface with clickable options

⏱ 30-second Timer to test speed and focus

📊 Clean Score Handling (when connected with JS logic)

💻 Responsive Design — perfect on mobile or desktop

🎨 Smooth Styling with soft colors and hover effects

📱 Intuitive Design
The user interface is minimalistic yet vibrant. The background uses a gradient from sky blue to light blue (#a1c4fd → #c2e9fb) to create a calm learning environment. The main quiz container has a frosted glass effect (rgba + backdrop-filter) that adds a soft modern aesthetic.

The question is bold and easy to read.

Answer options are styled like clickable cards with rounded corners and hover effects.

Timer is cleanly positioned in the top-right to build urgency.

The entire layout is centered using flexbox, making it perfectly responsive for mobile screens or desktops.


🧩 Easy Option Selection
Each option appears as a clickable row. You’ve used styled <li> elements with flex, gap, and padding to make the options visually distinct and accessible.

When a user hovers over an option, it changes to a vivid turquoise background (rgb(11, 218, 222)), making selection fun and interactive.

Radio buttons are subtly integrated and enhanced with hover effects, providing a satisfying user experience.


⏱ Built-In Timer
A functional timer element (#time) counts down from 30 seconds and is styled with red to create a subtle pressure, encouraging users to think fast.

You can further enhance it with JavaScript logic:

Auto-submission on timeout

Timer pause/resume

Flash animation near 5 seconds

📁 Simple Structure, Easy Customization
You can easily customize:

Background gradients or fonts

Button color scheme (hover changes from blue to green)

Container width or padding

Add image-based questions or icons next to options

The Submit button is prominently styled with a blue base and green hover transition, giving clear feedback on interaction.


💡 Use Cases
Practice quizzes for school or college

Online learning modules or LMS tools

Technical assessments

Gamified learning for kids

🔧 Ready for Enhancements
Once connected with your script.js, you can:

Dynamically load questions from a question bank

Track scores and show results

Add levels or categories

Display right/wrong answer highlights

📌 Summary
The Interactive Quiz App combines simplicity with modern web design. Its frosted glass container, colorful gradients, responsive layout, and interactive options make it a joy to use—whether for fun or serious study.

Want help integrating the JavaScript logic or exporting screenshots as part of a portfolio or presentation? Just ask!

🧠 Fun. Fast. Focused.
The Interactive Quiz Application is a sleek, browser-based quiz game built with HTML, CSS, and JavaScript. Designed for users of all ages, it offers a dynamic learning experience with multiple-choice questions, real-time scoring, and a 30-second timer per question.

Whether you're brushing up on general knowledge or want to create your own learning tool, this app is lightweight, interactive, and easy to customize.

🖼️ [Image Suggestion: Screenshot of full quiz interface on browser]
🔧 Built with Simplicity in Mind
The UI is clean, with a glassmorphism-style container centered on a blue gradient background. The layout includes:

A timer that counts down from 30 seconds for each question.

A visible question section at the top.

Four clickable answer options (styled as radio-button rows).

A "Submit" button to evaluate the answer and move forward.

This layout is fully responsive and works great on both desktop and mobile.

✨ Features Highlight
✅ 5 Quiz Questions from Different Topics

🕒 Timer Functionality: 30 seconds per question

💡 Auto-Reset Radio Buttons after Each Question

📈 Instant Feedback & Final Score

🔁 Play Again Button on Completion

🎨 Hover animations and custom button styles

🔥 How It Works
The app loads a series of quiz questions defined in a JavaScript array (quizData). Each object contains:

question — the question text

options — an array of 4 answer choices

answer — the index of the correct option

The loadQuiz() function dynamically populates the quiz with new questions and options. When the user selects an option and hits "Submit," the JavaScript:

Compares the selected answer with the correct one.

Updates the score if the answer is correct.

Loads the next question, or…

Displays the final result once all questions are completed.

⏳ Real-Time Timer
Every quiz question has a 30-second timer, activated via setInterval() when loadQuiz() runs. If time runs out, you can easily add auto-submit or alert functionality for time-bound quizzes. The red text ("Time Left:") adds urgency while keeping the experience casual.

🎉 Result Screen
Once the quiz ends, the app replaces the question box with a custom result screen using:

js
Copy
Edit
quiz.innerHTML = `<div class="result">...</div>`;
It displays:

The final score

A congratulatory message

A "Play Again" button that reloads the page with location.reload()


📦 Fully Customizable
With minimal effort, you can:

Change quiz topics and add more questions

Randomize question order

Add animations or sound effects

Save scores using localStorage or APIs

Create category-based quizzes (e.g., History, Coding, Math)

💡 Use Cases
✏️ School assignments or learning modules

🧪 Practice tests or mock exams

🎮 Fun trivia games for friends

🧩 Portfolio projects to showcase JavaScript skills

🚀 Conclusion
This Interactive Quiz App is a fantastic starting point for both learners and developers. It demonstrates clear logic, dynamic DOM manipulation, and user feedback—all while maintaining a sleek UI/UX.

<img width="1697" height="922" alt="Image" src="https://github.com/user-attachments/assets/73653297-b56c-47e1-b8af-42a3319f830b" />


