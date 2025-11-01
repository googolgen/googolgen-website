export interface Module {
  title: string;
  duration: string;
  topics: string[];
  practicalWork: string[];
  miniProject: string;
}

export interface Course {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  targetGroup: string;
  duration: string;
  certificate: string;
  goal: string;
  modules: Module[];
}


// ==================================================================
// 1. COMPREHENSIVE COURSE DATA (Parsed from your PDF)
// ==================================================================
// This new data structure holds all syllabus details for the modal.
export const courseDetailsData: Course[] = [
  {
    slug: "foundation-of-programming",
    title: "Foundation of Programming",
    description: "To introduce young learners (10-13) to computers, logical thinking, and coding fundamentals.",
    imageUrl: "/assets/images/courses/foundation-programming.jpg", // REPLACE with your image
    targetGroup: "10-13 years old (Beginners)",
    duration: "6 Months",
    certificate: "Googolgen Education Foundation Certificate",
    goal: "To introduce young learners to computers, logical thinking, and coding fundamentals through fun and creative projects.",
    modules: [
      { title: "Module 1: Fundamentals of Computer", duration: "3 Weeks", topics: ["Introduction to Computers", "Input and Output Devices", "Software and Hardware", "Operating System Basics", "Storage Devices", "Internet and Safe Browsing"], practicalWork: ["Identifying hardware components", "Operating system basics (open, save, copy files)", "Using Paint, WordPad, and web browsers"], miniProject: "Create a short PowerPoint or Google Slides presentation titled 'Parts of My Computer'." },
      { title: "Module 2: Block Coding with Scratch", duration: "5 Weeks", topics: ["Introduction to Scratch Interface", "Sprites, Motion, and Looks", "Loops, Events, and Conditionals", "Variables and Broadcasting", "Sound and Animation", "Creating Interactive Stories and Games"], practicalWork: ["Make characters move, talk, and react", "Create simple animations and interactive stories"], miniProject: "Develop an interactive Scratch game or animation (e.g., 'Catch the Apple' or 'Dancing Robot')." },
      { title: "Module 3: LOGO Programming", duration: "3 Weeks", topics: ["Basics of LOGO and Turtle Commands", "Drawing Shapes (Line, Square, Circle, Polygon)", "Using Loops and Colors", "Creating Patterns"], practicalWork: ["Drawing geometric shapes and creative designs"], miniProject: "Design a LOGO art project combining multiple shapes and patterns." },
      { title: "Module 4: Algorithm and Flowchart", duration: "3 Weeks", topics: ["What is an Algorithm", "Steps in Problem Solving", "Decision Making (If-Else Logic)", "Flowchart Symbols and Usage", "Creating Flowcharts for Simple Problems"], practicalWork: ["Draw flowcharts for daily activities (e.g., 'Brushing Teeth' or 'Making Tea')"], miniProject: "Design a Flowchart for a Simple Calculator or Guessing Game." },
      { title: "Module 5: Basics of Python", duration: "4 Weeks", topics: ["Introduction to Python and IDLE", "Print Statements and Comments", "Variables and Data Types", "Input/Output Functions", "Basic Arithmetic and Conditional Statements", "Simple Loops"], practicalWork: ["Write simple Python programs (calculator, table generator, guessing game)"], miniProject: "Build a small Python game or calculator (e.g., 'Number Guessing Game')." },
      { title: "Module 6: AI Tools and Use in Daily Life", duration: "4 Weeks", topics: ["What is Artificial Intelligence?", "Everyday Al Examples (ChatGPT, Gemini, Claude)", "How Al Works in Games, Photos, and Search", "Responsible Al Use and Safety"], practicalWork: ["Explore online Al tools safely under guidance", "Identify Al applications around you"], miniProject: "Prepare a short report or poster: 'How Al Helps Me in Daily Life.'" },
      { title: "Module 7: Final Integration Project", duration: "3 Weeks", topics: ["Integrate everything learned from logic to coding into one creative project.", "Project Options: A Python mini-game (quiz, calculator, or number guessing) OR A Scratch interactive story or animation"], practicalWork: [], miniProject: "" }
    ]
  },
  {
    slug: "programming-for-problem-solving",
    title: "Programming for Problem Solving",
    description: "Develop computational thinking and problem-solving skills for intermediate learners (13-16).",
    imageUrl: "/assets/images/courses/problem-solving.jpg", // REPLACE with your image
    targetGroup: "13-16 years old (Intermediate Learners)",
    duration: "6 Months",
    certificate: "Googolgen Internal Certificate",
    goal: "To develop computational thinking, logic building, and problem-solving skills through algorithm design, C programming, Python, and web technologies.",
    modules: [
      { title: "Module 1: Algorithm and Flowchart", duration: "2 Weeks", topics: ["Problem Solving Approach", "Understanding Algorithms", "Decision Making and Looping Logic", "Flowchart Symbols and Construction", "Converting Real-Life Problems into Algorithms"], practicalWork: ["Write algorithms for everyday problems", "Create flowcharts using diagrams.net"], miniProject: "Design flowcharts for 'Simple Calculator' and 'Even/Odd Number Checker.'" },
      { title: "Module 2: Introduction to Programming using C", duration: "8 Weeks", topics: ["Basics of C Language", "Data Types, Variables, and Operators", "Input/Output Functions (printf, scanf)", "Control Statements (if, else, switch)", "Loops (for, while, do-while)", "Arrays and Strings", "Functions and Modular Programming"], practicalWork: ["Write basic C programs (sum, factorial, tables, reverse number)", "Debugging and compiling in Dev C++"], miniProject: "Build a Student Marks Calculator or Mini Library Management System using functions." },
      { title: "Module 3: Python Intermediate", duration: "5 Weeks", topics: ["Review of Python Basics", "Data Structures (List, Tuple, Dictionary, Set)", "Conditional and Looping Constructs", "Functions and Modules", "File Handling"], practicalWork: ["File reading/writing tasks"], miniProject: "Develop a Mini Contact Book using Python." },
      { title: "Module 4: Web Development (HTML, CSS, JavaScript)", duration: "7 Weeks", topics: ["Basics of Internet and Web", "HTML Structure, Tags, Lists, Tables, Forms", "CSS for Styling: Colors, Fonts, Layouts", "JavaScript Basics: Variables, Loops, Events, Functions", "DOM Manipulation and Simple Interactions"], practicalWork: ["Create simple webpages and style them", "Add JavaScript interactivity (button clicks, forms, calculators)"], miniProject: "Design a Personal Portfolio Website or School Club Webpage." },
      { title: "Module 5: AI Tools and Future", duration: "2 Weeks", topics: ["Understanding Modern Al Concepts", "Introduction to ChatGPT, Gemini, and Copilot", "How Al is Changing the Future of Coding", "Al Ethics and Safe Use for Students"], practicalWork: ["Try text and image generation tools under supervision", "Explore Al-based learning tools"], miniProject: "Create a small presentation or blog titled 'How Al Will Shape Future Programmers.'" },
      { title: "Module 6: Final Capstone Project", duration: "4 Weeks", topics: ["Combine skills from C, Python, and Web Development.", "Project Ideas: Build a School Management Web Portal (HTML + JS), Create a Python Data Tracker (marks, attendance, or expenses), or Develop a C Program Suite (menu-driven utilities)"], practicalWork: [], miniProject: "" }
    ]
  },
  {
    slug: "python-programming",
    title: "Python Programming",
    description: "Master Python programming fundamentals for students (age 15+) with basic programming knowledge.",
    imageUrl: "/assets/images/courses/python-programming.jpg", // REPLACE with your image
    targetGroup: "Students with basic programming knowledge (age 15+)",
    duration: "6 Months",
    certificate: "Googolgen Education Foundation Certificate",
    goal: "To master Python programming fundamentals and apply them to build logic-based, real-world applications.",
    modules: [
        { title: "Module 1: Introduction to Python", duration: "3 Weeks", topics: ["Python Overview and Features", "Installing and Setting Up Python IDE", "Syntax, Indentation, and Comments", "Variables, Data Types, and Type Casting", "Basic Input/Output Operations"], practicalWork: ["Write simple programs (Hello World, Calculator)", "Explore input/output and formatting techniques"], miniProject: "Create a Basic Calculator that performs arithmetic operations." },
        { title: "Module 2: Control Structures and Loops", duration: "4 Weeks", topics: ["Conditional Statements (if, elif, else)", "Loops (for, while, nested loops)", "break, continue, pass statements", "Range function and iteration", "Practical problem-solving patterns"], practicalWork: ["Programs on factorial, prime numbers, number patterns", "Simple menu-driven programs"], miniProject: "Develop a Pattern Generator or Number Game using loops." },
        { title: "Module 3: Data Structures in Python", duration: "5 Weeks", topics: ["Lists, Tuples, Sets, and Dictionaries", "Indexing, Slicing, and Iteration", "Built-in Functions for Data Structures", "Nested Lists and Advanced Operations"], practicalWork: ["Practice CRUD operations on lists and dictionaries", "Create small data-driven programs"], miniProject: "Build a Student Record Management System using lists and dictionaries." },
        { title: "Module 4: Functions and Modules", duration: "4 Weeks", topics: ["Defining and Calling Functions", "Arguments and Return Values", "Lambda Functions", "Recursion", "Importing Modules (math, random, datetime, os)", "Creating and Using Custom Modules"], practicalWork: ["Create custom utility functions", "Explore Python Standard Library"], miniProject: "Build a Math Utility Module (factorial, prime check, Fibonacci, etc.)" },
        { title: "Module 5: File Handling and Exception Handling", duration: "4 Weeks", topics: ["Opening and Reading Files", "Writing to Files", "Working with CSV Files", "Handling Exceptions (try, except, finally)", "File-based Data Management"], practicalWork: ["File I/O examples (notes app, log system)", "Exception handling exercises"], miniProject: "Develop a Simple To-Do List App that stores data in text files." },
        { title: "Module 6: Object-Oriented Concepts in Python", duration: "4 Weeks", topics: ["Introduction to OOP", "Classes and Objects", "Constructors and Destructors", "Inheritance and Polymorphism", "Encapsulation and Data Hiding"], practicalWork: ["Create classes for real-life entities (Student, Bank, etc.)", "Implement inheritance and method overriding"], miniProject: "Design a Bank Account Management System using OOP principles." },
        { title: "Module 7: Final Project", duration: "4 Weeks", topics: ["Integrate all Python concepts learned to build a full application.", "Project Ideas: Billing System, Quiz Application, Expense Tracker, File-Based Student Database"], practicalWork: [], miniProject: "" }
    ]
  },
  {
    slug: "web-design",
    title: "Web Design (HTML, CSS, JS)",
    description: "For school students (Class 8-12) to learn the fundamentals of modern web design.",
    imageUrl: "/assets/images/courses/web-design.jpg", // REPLACE with your image
    targetGroup: "School Students (Class 8-12)",
    duration: "6 months",
    certificate: "Googolgen Education Foundation",
    goal: "To equip students with the core skills of web design, from structuring with HTML to styling with CSS and adding interactivity with JavaScript.",
    modules: [
        { title: "Module 1: Fundamentals of Web Design", duration: "2 Weeks", topics: ["Introduction to the Internet and Websites", "How Websites Work (Client-Server Model, Domains, Hosting)", "Structure of a Website (Front-end vs. Back-end)", "UI vs. UX Design Basics", "Tools Used in Web Design (VS Code, Figma, Browser Dev Tools)"], practicalWork: ["Create a simple wireframe for a website using Figma or pen & paper", "Identify good and bad website designs"], miniProject: "" },
        { title: "Module 2: HTML - The Structure of the Web", duration: "4 Weeks", topics: ["Introduction to HTML and Document Structure", "Headings, Paragraphs, Links, Lists, and Tables", "Forms and Input Elements", "Embedding Images, Audio, and Video", "Semantic HTML and Accessibility"], practicalWork: ["Create a personal webpage using HTML", "Build a student registration form"], miniProject: "" },
        { title: "Module 3: CSS - Styling the Web", duration: "5 Weeks", topics: ["Introduction to CSS and Selectors", "Colors, Fonts, Backgrounds, Borders, and Shadows", "Box Model, Flexbox, and Grid Layouts", "Responsive Design using Media Queries", "CSS Animations and Transitions"], practicalWork: ["Design a responsive landing page", "Create a portfolio layout using CSS Grid and Flexbox"], miniProject: "" },
        { title: "Module 4: Introduction to Web Design Tools", duration: "3 Weeks", topics: ["Overview of Design Systems and Style Guides", "Introduction to Tailwind CSS and Bootstrap", "Using Google Fonts and Icon Libraries", "Introduction to Figma for UI Prototyping"], practicalWork: ["Create a simple website mockup in Figma", "Recreate the mockup using HTML + CSS framework"], miniProject: "" },
        { title: "Module 5: JavaScript for Interactivity", duration: "5 Weeks", topics: ["Basics of JavaScript and DOM", "Variables, Operators, and Control Statements", "Functions and Events", "DOM Manipulation (select, add, remove elements)", "Form Validation and Basic Animations"], practicalWork: ["Add interactive behavior (menu toggle, popup, image slider)", "Create a calculator or quiz web app"], miniProject: "" },
        { title: "Module 6: Project & Hosting", duration: "3 Weeks", topics: ["Combining HTML, CSS, and JS into a Complete Website", "Testing and Debugging", "Introduction to GitHub Pages / Netlify for Free Hosting", "Project Presentation and Review"], practicalWork: [], miniProject: "Design and host a 3-5 page responsive website (e.g., school site, personal portfolio, or product landing page)." }
    ]
  },
  {
    slug: "oop-java",
    title: "Object Oriented Programming using Java",
    description: "For students with prior programming knowledge to master Object-Oriented principles.",
    imageUrl: "/assets/images/courses/oop-java.jpg", // REPLACE with your image
    targetGroup: "Students with prior programming knowledge (C/Python preferred)",
    duration: "N/A (Module durations provided)",
    certificate: "Internal Certificate (Googolgen Education Foundation)",
    goal: "To provide a deep understanding of Object-Oriented Programming principles using the Java language, from basic concepts to building GUI applications.",
    modules: [
        { title: "Module 1: Introduction to Java and OOP Concepts", duration: "2 Weeks", topics: ["Features of Java and JVM Architecture", "Setting up JDK and IDE (Eclipse/IntelliJ)", "Writing and running first Java program", "Understanding Classes, Objects, Methods, and Constructors", "Overview of OOP principles (Abstraction, Encapsulation, Inheritance, Polymorphism)"], practicalWork: ["Create a basic 'Hello Java' and arithmetic program", "Implement a class for Student details"], miniProject: "" },
        { title: "Module 2: Control Structures and Data Handling", duration: "3 Weeks", topics: ["Variables, Data Types, Operators", "Conditional Statements (if, switch)", "Loops (for, while, do-while)", "Arrays (1D & 2D), Strings, and Wrapper Classes", "Input/Output and Scanner class"], practicalWork: ["Write programs for grade calculation, matrix operations, and string manipulation"], miniProject: "" },
        { title: "Module 3: Object-Oriented Programming in Depth", duration: "5 Weeks", topics: ["Constructors and Method Overloading", "Inheritance and Method Overriding", "Abstract Classes and Interfaces", "Packages and Access Modifiers", "Static and Final Keywords"], practicalWork: ["Implement a student-inheritance system (Student -> GraduateStudent -> ResearchStudent)", "Create an interface-based shape calculator (area, perimeter, etc.)"], miniProject: "" },
        { title: "Module 4: Exception Handling and File Management", duration: "3 Weeks", topics: ["Types of Exceptions", "Try-Catch-Finally, Throw, Throws", "Creating Custom Exceptions", "File Handling (FileReader, FileWriter, BufferedReader, etc.)"], practicalWork: ["File-based student record management system", "Implement custom exception for invalid marks"], miniProject: "" },
        { title: "Module 5: Collections Framework", duration: "4 Weeks", topics: ["Introduction to Collections", "List, Set, and Map Interfaces", "ArrayList, LinkedList, HashSet, TreeSet, HashMap, TreeMap", "Generics and Iterators"], practicalWork: ["Implement a library management system using Collections", "Store and retrieve objects dynamically"], miniProject: "" },
        { title: "Module 6: GUI Programming with JavaFX", duration: "4 Weeks", topics: ["Basics of Event-Driven Programming", "JavaFX Components and Layouts", "Buttons, Labels, Text Fields, Events", "Simple Application: Calculator / Login Form"], practicalWork: ["Build a GUI-based application using JavaFX"], miniProject: "" },
        { title: "Module 7: Final Project", duration: "4 Weeks", topics: ["Combine all OOP principles into a complete Java application.", "Example Projects: Student Result Management System, Bank Account Management System, Inventory Management Tool"], practicalWork: [], miniProject: "" }
    ]
  },
  {
    slug: "python-ml-ds",
    title: "Python for ML & Data Science",
    description: "For students with basic computer knowledge to learn ML & Data Science from scratch.",
    imageUrl: "/assets/images/courses/python-ml-ds.jpg", // REPLACE with your image
    targetGroup: "Students who have basic computer knowledge (no need for prior Python experience)",
    duration: "N/A (Module durations provided)",
    certificate: "Internal Certificate (Googolgen Education Foundation)",
    goal: "To take students from zero programming knowledge to building basic Machine Learning models, focusing on Python, data analysis, and visualization.",
    modules: [
        { title: "Module 1: Introduction to Python Programming", duration: "4 Weeks", topics: ["What is Python and Why It's Used in Al & Data Science", "Installing Python and Jupyter Notebook", "Writing Your First Python Program", "Variables, Data Types, and Input/Output", "Operators and Conditional Statements (if, else, elif)", "Loops (for, while) and Functions"], practicalWork: ["Simple programs (calculator, even-odd, grade system)", "Pattern printing and function-based exercises"], miniProject: "" },
        { title: "Module 2: Python Data Structures", duration: "3 Weeks", topics: ["Lists, Tuples, Sets, and Dictionaries", "String Manipulation", "Nested Lists and Loops", "Practical Data Handling with Lists and Dictionaries"], practicalWork: ["Manage student marks using lists", "Dictionary-based mini project (Contact Book or Product Manager)"], miniProject: "" },
        { title: "Module 3: Working with Files and Libraries", duration: "3 Weeks", topics: ["Reading and Writing Files", "Understanding Libraries and Modules", "Introduction to NumPy (arrays and basic math operations)", "Introduction to Pandas (data loading, viewing, filtering)"], practicalWork: ["Read and analyze a CSV file", "Perform simple numerical operations using NumPy arrays"], miniProject: "" },
        { title: "Module 4: Data Visualization", duration: "3 Weeks", topics: ["Why Visualization is Important", "Introduction to Matplotlib", "Bar Chart, Line Chart, Pie Chart, Scatter Plot", "Introduction to Seaborn"], practicalWork: ["Visualize students' marks or sales data", "Create comparison charts and style them"], miniProject: "" },
        { title: "Module 5: Introduction to Machine Learning", duration: "5 Weeks", topics: ["What is Machine Learning and How It Works", "Features, Labels, and Datasets", "Understanding Training and Testing", "Simple ML Models using Scikit-learn (Linear Regression, Decision Tree)", "Model Accuracy and Evaluation"], practicalWork: ["Predict house prices using Linear Regression", "Build a small Decision Tree classifier (like pass/fail prediction)"], miniProject: "" },
        { title: "Module 6: Real-World Project", duration: "5 Weeks", topics: ["Combine everything into one project.", "Example Projects: Predicting Student Marks, Visualizing Population or Sales Data, Analysing COVID-19 Data using Python", "Deliverables: A Jupyter notebook with analysis, graphs, and results presentation."], practicalWork: [], miniProject: "" }
    ]
  },
  {
    slug: "game-development-python",
    title: "Game Development using Python",
    description: "For students with basic to intermediate Python knowledge to build 2D games.",
    imageUrl: "/assets/images/courses/game-development-python.jpg", // REPLACE with your image
    targetGroup: "Students with basic to intermediate Python knowledge",
    duration: "6-8 months",
    certificate: "Googolgen Education Foundation",
    goal: "To teach students how to build a variety of 2D games using Python and Pygame, from simple arcade games to RPGs with AI opponents.",
    modules: [
        { title: "Module 1: Introduction to Game Development", duration: "2 Weeks", topics: ["What is Game Development?", "Game Genres (2D, 3D, Strategy, etc.)", "Understanding Game Engines and Libraries", "Why Pygame for Beginners", "Introduction to Python Game Loop and Rendering Concepts"], practicalWork: ["Install and setup Pygame", "Display first window and draw basic shapes"], miniProject: "" },
        { title: "Module 2: Pygame Fundamentals", duration: "4 Weeks", topics: ["Game Window, Events, and Loops", "Surfaces, Colors, and Coordinates", "Keyboard and Mouse Events", "Frame Rate (FPS) and Timers", "Adding Images, Sounds, and Text"], practicalWork: ["Create an interactive bouncing ball game", "Add sound effects and background music"], miniProject: "" },
        { title: "Module 3: Building Board Games", duration: "4 Weeks", topics: ["Game Logic and Turn Systems", "Collision Detection", "Working with Grids and 2D Arrays", "Storing Game State and Moves"], practicalWork: ["Develop 3-4 Board Games: Tic Tac Toe, Sudoku, Chess (basic logic)"], miniProject: "" },
        { title: "Module 4: Developing Simple Arcade & Running Games", duration: "5 Weeks", topics: ["Character Movement and Sprite Animation", "Gravity and Collision Handling", "Score System and Difficulty Levels", "Sound and Background Music Integration"], practicalWork: ["Develop 4-5 Arcade Games: Snake Game, Flappy Bird Clone, Dinosaur Run Game, Brick Breaker, Space Shooter"], miniProject: "" },
        { title: "Module 5: 2D Adventure RPG Game Development", duration: "5 Weeks", topics: ["Concept of Game Design and Storyboarding", "Map Design and Tile-Based Movement", "Enemy Al (Basic Logic and Collision)", "Health, Inventory, and Scoring System", "Game Saving and Loading"], practicalWork: ["Create a full 2D RPG Adventure Game with player movement, enemy attack, collectibles, and checkpoints"], miniProject: "" },
        { title: "Module 6: Al in Games - Intelligent Agents & Players", duration: "4 Weeks", topics: ["Introduction to Al in Game Development", "Game Decision Systems (Finite State Machines, Behavior Trees)", "Pathfinding (A*, BFS, DFS Concepts)", "Enemy Al (Chase, Patrol, Evade Systems)", "Reinforcement Learning Basics for Games", "Designing Smart NPCs"], practicalWork: ["Implement Al opponent in Tic Tac Toe or Snake", "Add intelligent enemies in RPG Adventure Game", "Build a self-playing Flappy Bird (Al Agent learns from attempts)"], miniProject: "" }
    ]
  },
  {
    slug: "c-cpp-programming",
    title: "C & C++ Programming",
    description: "Strengthen programming fundamentals and logic building for aspiring developers.",
    imageUrl: "/assets/images/courses/c-cpp-programming.jpg", // REPLACE with your image
    targetGroup: "Students who want to strengthen programming fundamentals and logic building",
    duration: "6 Months",
    certificate: "Internal Certificate (Googolgen Education Foundation)",
    goal: "To build a strong foundation in procedural programming with C and transition to Object-Oriented Programming with C++.",
    modules: [
        { title: "Module 1: Introduction to Programming and C Language", duration: "3 Weeks", topics: ["What is Programming?", "History and Importance of C", "Structure of a C Program", "Keywords, Identifiers, Variables, and Data Types", "Input/Output Functions (printf, scanf)", "Operators (Arithmetic, Relational, Logical, Bitwise)"], practicalWork: ["Write simple programs for addition, swapping numbers, and area calculation", "Basic pattern printing exercises"], miniProject: "" },
        { title: "Module 2: Control Statements and Loops", duration: "3 Weeks", topics: ["Conditional Statements (if, else if, nested if, switch)", "Looping Statements (for, while, do-while)", "Jump Statements (break, continue)", "Flow Control and Logic Building"], practicalWork: ["Programs for factorial, palindrome, Fibonacci, prime numbers", "Menu-driven programs using loops and switch"], miniProject: "" },
        { title: "Module 3: Arrays, Strings, and Functions", duration: "4 Weeks", topics: ["1D and 2D Arrays", "String Handling (strlen, strcpy, strcat, strcmp)", "User-Defined Functions", "Function Calling, Parameters, and Recursion", "Storage Classes (auto, static, extern)"], practicalWork: ["Program to perform matrix addition/multiplication", "Recursive functions (factorial, Fibonacci)", "String reversal and sorting"], miniProject: "" },
        { title: "Module 4: Pointers and Structures", duration: "4 Weeks", topics: ["Introduction to Pointers and Memory Addresses", "Pointer Arithmetic and Functions with Pointers", "Introduction to Structures and Unions", "Array of Structures", "Dynamic Memory Allocation (malloc, calloc, free)"], practicalWork: ["Structure-based student record system", "Pointer-based array manipulation"], miniProject: "" },
        { title: "Module 5: Introduction to C++ and OOP Concepts", duration: "4 Weeks", topics: ["Difference between C and C++", "Setting up a C++ Program", "Classes and Objects", "Constructors and Destructors", "Function Overloading and Operator Overloading", "Inheritance, Polymorphism, and Encapsulation"], practicalWork: ["Implement a class for bank account management", "Demonstrate inheritance using shape area calculation"], miniProject: "" },
        { title: "Module 6: File Handling and Final Project", duration: "4 Weeks", topics: ["File Input/Output (read, write, append)", "Working with Binary Files", "Exception Handling Basics (in C++)", "Project Development"], practicalWork: [], miniProject: "Final Project Examples: Student Record System, Library Management System, Inventory Management Tool" }
    ]
  },
  {
    slug: "android-app-development",
    title: "Android App Development",
    description: "For students with basic Java knowledge to build modern Android applications.",
    imageUrl: "/assets/images/courses/android-app-development.jpg", // REPLACE with your image
    targetGroup: "Students with basic knowledge of Java programming",
    duration: "6 Months",
    certificate: "Internal Certificate (Googolgen Education Foundation)",
    goal: "To guide students through building complete Android applications using Java, from basic UI design to API integration and database management.",
    modules: [
        { title: "Module 1: Introduction to Android Development", duration: "2 Weeks", topics: ["What is Android and how it works", "Android Architecture", "Android Studio Installation and Setup", "Understanding Activities, Views, and Layouts", "Running First App: 'Hello Android'"], practicalWork: ["Install Android Studio and create your first app", "Explore emulator and device debugging"], miniProject: "" },
        { title: "Module 2: Android UI Design", duration: "4 Weeks", topics: ["Understanding XML Layouts", "TextView, EditText, Button, ImageView, and ScrollView", "Linear, Relative, and Constraint Layouts", "Material Design Guidelines", "Adding Fonts, Colors, and Styles"], practicalWork: ["Create a simple registration form UI", "Design a personal profile app interface"], miniProject: "" },
        { title: "Module 3: Activity, Intent, and Navigation", duration: "3 Weeks", topics: ["Activity Lifecycle", "Intents (Explicit and Implicit)", "Passing Data Between Activities", "Toast Messages and Snackbar", "Navigation Components and Fragments"], practicalWork: ["Create a multi-screen app using intents", "Build a simple navigation drawer"], miniProject: "" },
        { title: "Module 4: Data Storage and Management", duration: "4 Weeks", topics: ["SharedPreferences for Small Data", "SQLite Database", "CRUD Operations (Create, Read, Update, Delete)", "Introduction to Room Database", "JSON Parsing and API Integration Basics"], practicalWork: ["Create a Notes app with SQLite", "Display online data using JSON"], miniProject: "" },
        { title: "Module 5: Advanced Features and API Integration", duration: "4 Weeks", topics: ["RecyclerView and Adapters", "Image Handling (Glide/Picasso)", "Working with REST APIs", "Using Volley/Retrofit for Networking", "Introduction to Firebase (Authentication and Realtime Database)"], practicalWork: ["Build a news app or weather app using APIs", "Create login & signup using Firebase"], miniProject: "" },
        { title: "Module 6: Final Project", duration: "5 Weeks", topics: ["Goal: Build a complete Android app with UI, data handling, and API integration.", "Example Projects: Expense Tracker, Student Management App, To-Do List with Firebase Sync, Notes App with Search and CRUD"], practicalWork: [], miniProject: "" }
    ]
  },
  {
    slug: "generative-ai",
    title: "Generative AI",
    description: "Explore and build with Generative AI tools and APIs (Age 14+, Python recommended).",
    imageUrl: "/assets/images/courses/generative-ai.jpg", // REPLACE with your image
    targetGroup: "School Students (Age 14+, basic Python knowledge recommended)",
    duration: "6 Months",
    certificate: "Internal Certificate (Googolgen Education Foundation)",
    goal: "To introduce students to the world of Generative AI, enabling them to use modern AI tools and build their own AI-powered applications using Python and APIs.",
    modules: [
        { title: "Module 1: Introduction to Generative Al & Its Applications", duration: "N/A", topics: ["What is Artificial Intelligence?", "What makes 'Generative' Al different?", "Understanding Al tools (ChatGPT, DALL E, Gemini, Copilot, etc.)", "How Al creates text, images, videos, and code", "Responsible use of Al (ethics, bias, verification of Al outputs)"], practicalWork: ["Using ChatGPT and DALL E for creative writing and art generation"], miniProject: "" },
        { title: "Module 2: Exploring Al Tools for Productivity and Creativity", duration: "N/A", topics: ["Al for writing (content, summaries, notes, and stories)", "Al for learning (using Al as a tutor and coding assistant)", "Al for design (Canva Al, Adobe Firefly, Leonardo.ai)", "Al for music and video (Soundraw, Pika Labs, Runway ML)"], practicalWork: [], miniProject: "Generate a poster using Al, Create an Al-written storybook, Build a simple chatbot using ChatGPT API (no-code/low-code)" },
        { title: "Module 3: Introduction to Python for Al Integration", duration: "N/A", topics: ["Refresher: Basic Python syntax, functions, APIs, and JSON", "How to connect Python to external AI APIs (OpenAI, Gemini, Hugging Face)", "Prompt engineering basics"], practicalWork: ["Create a simple Python script to generate images and text", "Generate personalized greetings using Al APIs"], miniProject: "" },
        { title: "Module 4: Building Al-Powered Apps", duration: "N/A", topics: ["Introduction to Streamlit for web apps", "Building interactive Al apps (text generator, summarizer, image captioning)", "Adding user input and displaying Al responses"], practicalWork: [], miniProject: "'Al Story Generator' App, 'Al Study Assistant' App" },
        { title: "Module 5: Introduction to Retrieval-Augmented Generation (RAG)", duration: "N/A", topics: ["What is RAG and why do we need it?", "How Al can use custom data", "Basic concept of embeddings and vector search (in simple terms)"], practicalWork: ["Create a 'Chat with My Notes' app using LangChain / LlamaIndex", "Upload a text file and ask Al questions from it"], miniProject: "" },
        { title: "Module 6: Final Projects and Future of Generative Al", duration: "N/A", topics: ["Combining everything into a mini project", "Suggested Final Projects: Al-powered personal assistant, Al tutor app, Al resume & email writer, 'Ask My PDF' or 'Al Library Chatbot'", "Introduction to advanced topics: LLMs, Prompt chaining, Ethics and Al's impact"], practicalWork: [], miniProject: "" }
    ]
  },
  {
    slug: "frontend-development",
    title: "Frontend Development",
    description: "Learn HTML, CSS, JS, and modern frameworks like React and Tailwind (Age 14+).",
    imageUrl: "/assets/images/courses/frontend-development.jpg", // REPLACE with your image
    targetGroup: "School Students (Age 14+, basic computer knowledge)",
    duration: "6 Months",
    certificate: "Internal Certificate (Googolgen Education Foundation)",
    goal: "To provide a comprehensive introduction to frontend web development, from foundational technologies (HTML, CSS, JS) to modern tools like Tailwind and React.",
    modules: [
        { title: "Module 1: Introduction to Web Development", duration: "N/A", topics: ["What is a website? How does the web work?", "Understanding client-server model", "Tools you'll use: Browser, VS Code, Live Server", "Introduction to HTML, CSS, and JavaScript", "File structure and linking files"], practicalWork: ["Create your first webpage"], miniProject: "" },
        { title: "Module 2: HTML The Structure of the Web", duration: "N/A", topics: ["Basic HTML tags: headings, paragraphs, lists, links, images", "Forms and input elements", "Tables and semantic HTML", "Attributes, IDs, and classes", "HTML best practices"], practicalWork: [], miniProject: "Portfolio structure, Feedback form" },
        { title: "Module 3: CSS - Styling the Web", duration: "N/A", topics: ["Inline, internal, and external CSS", "Colors, borders, backgrounds, and gradients", "Fonts, text alignment, and Google Fonts", "Box model and positioning", "Flexbox and Grid layout", "Transitions and hover effects"], practicalWork: [], miniProject: "Styled personal profile page, Responsive landing page" },
        { title: "Module 4: JavaScript - Bringing Webpages to Life", duration: "N/A", topics: ["Variables, data types, and operators", "Functions and conditionals", "DOM (Document Object Model) manipulation", "Event handling (clicks, input, mouse, etc.)", "Introduction to arrays and loops"], practicalWork: [], miniProject: "Interactive quiz, Digital clock or calculator" },
        { title: "Module 5: Modern Frontend Tools and Frameworks", duration: "N/A", topics: ["What are frameworks and why use them?", "Introduction to Tailwind CSS and Bootstrap", "Responsive design (mobile-first approach)", "Basics of React (conceptual understanding + simple setup)", "Using Al tools like GitHub Copilot to assist in coding"], practicalWork: [], miniProject: "Simple React component app, Responsive website using Tailwind CSS" },
        { title: "Module 6: Final Project - Build and Host Your Own Website", duration: "N/A", topics: ["Combine HTML, CSS, and JavaScript", "Deploying your site (GitHub Pages / Netlify)", "SEO basics and website optimization", "Introduction to version control (Git & GitHub)"], practicalWork: [], miniProject: "Final Projects (choose one): Personal portfolio website, School project showcase site, Product landing page, Al-assisted web design using Copilot" }
    ]
  },
];
