#1-Explain the Client-Server Architecture used in web applications.
In your answer, clearly describe:

- The role of the client (browser)
The client is usually a web browser (e.g., Chrome, Firefox, Safari) or a mobile/desktop app.
•	It is responsible for:
o	Sending requests to the server (e.g., when you click a link, submit a form, or load a webpage).
o	Displaying the response received from the server (like rendering HTML, CSS, and JavaScript).
o	Handling user interactions (typing, clicking, scrolling) and making further requests if needed.

- The role of the server
•	The server is a powerful computer or service that stores, processes, and manages data.
•	It is responsible for:
o	Receiving client requests (like “fetch the homepage” or “get my account details”).
o	Processing the request — often involving querying a database or performing some logic.
o	Sending back a structured response (HTML, JSON, XML, etc.) for the client to display.
•	Examples of web servers: Apache, Nginx, Microsoft IIS.

- How data flows between client and server
1.	The client (browser) sends an HTTP/HTTPS request to the server (e.g., GET /index.html).
2.	The server receives the request, processes it (maybe talks to a database), and prepares a response.
3.	The server sends an HTTP/HTTPS response back to the client (e.g., the HTML page or JSON data).
4.	The client renders the response — showing text, images, or app content to the user.

- Give an example of a real-world application using this architecture.
Example: Online Shopping Site (like Amazon)
•	Client (browser/app): You open Amazon on Chrome and search for “laptop.” The browser sends a request with your search query.
•	Server: Amazon’s servers receive the request, look up matching laptops in the database, and prepare results.
•	Data Flow: The server sends back the product list (JSON or HTML). The browser then displays laptops, prices, and images to you.
•	Every click (e.g., “Add to Cart,” “Checkout”) is another request-response between client and server.
---------------------------------------------------------------------------------------------------------------------------
#2- Design and implement a responsive student registration web page using HTML5, CSS3, and JavaScript. Your web page must fulfill the following requirements:
           HTML5:
             Create a form that includes the following fields:
                Full Name (text input)
                Email ID (email input)
                Course (dropdown/select)
                Gender (radio buttons)
                Hobbies (checkboxes)
                Profile Photo Upload (file input)
         CSS3:
                Apply CSS styles using ID, class, and element selectors.
                  Implement a responsive layout using Flexbox or CSS Grid.
                  Add styles to improve form appearance (spacing, colors, borders, font).
                  Highlight input fields on focus and use the box model properties effectively.
        JavaScript:
               Write JavaScript to perform client-side form validation:
               Ensure all required fields are filled.
              Validate the email format. 
              Show an alert or message if the form is submitted successfully or if any field is
              invalid.

              Add a basic event like showing a welcome message when the page loads or a field    
              is clicked.
1.Alert “Welcome message”
 

2.First view of your page – Course Registration Form
 

3.Write your full name 
 
4. Write your mail id
 

5.Select your course
 
6. Choose your gender
 

7. Select your hobbies
 
8. Upload your profile picture and click on submit
 

9. Alert message – “Form Submitted successfully”
 
---------------------------------------------------------------------------------------------------------------------------

#3- Difference Between ID Selector and Class Selector
•	ID Selector (#id)
o	Used for styling a single unique element.
o	Example: #header { color: blue; }
•	Class Selector (.class)
o	Used for styling multiple elements with the same style.
o	Example: .highlight { background: light pink; }

Input & Output Files
Since this is a web form, inputs are user entries. Here are test cases:
Test Case 1 (Valid Input)
•	Full Name: Amar Kumar kar
•	Email: ark.kar661@gmail.com
•	Course: BCA
•	Gender: Male
•	Hobbies: Music
•	Profile Photo: amarrre.jpg
 Output: “Form submitted successfully!”
Test Case 2 (Missing Fields)
•	Full Name: (empty)
•	Email: invalidemail
👉 Output: “Please fill all required fields!”
 
 Test Case 3 (Invalid Email)
•	Email: amar@abc
👉 Output: “Please enter a valid email address.”
 
#4 - Algorithm / Process:
1.	User loads the form → welcomeMessage() is triggered.
2.	User fills in input fields → CSS styles highlight focus.
3.	On submit, JavaScript checks:
o	All required fields are filled.
o	Email follows correct format using regex.
4.	If invalid → show alert and block submission.
5.	If valid → show success message.
Key Decisions:
•	Used Flexbox/Responsive layout to make it mobile-friendly.
•	Used Regex for email validation.
•	Used alert() for quick feedback (could be replaced with inline error messages for better UX).
Challenges:
•	Handling responsive design across different screen sizes.
•	Ensuring validation works for edge cases (empty fields, invalid email).

---------------------------------------------------------------------------------------------------------------------------


