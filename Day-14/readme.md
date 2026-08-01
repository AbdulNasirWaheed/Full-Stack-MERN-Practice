Here is a `README.md` file tailored for your GitHub repository. It explains the project, the folder structure, the task details, and how to run the code.

You can create a file named `README.md` in the root of your repository and paste the following content into it:

***

```markdown
# JavaScript Array & Loops Tasks

This repository contains two basic JavaScript projects designed to practice fundamental programming concepts: **Arrays**, **for Loops**, **Variables**, and **if Statements**. 

Each task is enclosed in its own folder containing an `index.html` file to display the output in a web browser, and a `script.js` file containing the JavaScript logic.

## 📁 Project Structure

```text
├── Task1_SumOfArray/
│   ├── index.html       # HTML file to display the result
│   └── script.js        # JavaScript logic for Task 1
├── Task2_FindIndex/
│   ├── index.html       # HTML file to display the result
│   └── script.js        # JavaScript logic for Task 2
└── README.md            # Project documentation
```

## 📝 Tasks Overview

### Task 1: Sum of Array Elements
**Concepts Used:** Arrays, `for` Loop, Variables

This program initializes an array of numbers and iterates through them using a `for` loop to calculate their total sum.

* **Input Array:** `[10, 20, 30, 40, 50]`
* **Expected Output:** `Sum = 150`

### Task 2: Find an Element's Index
**Concepts Used:** Arrays, `for` Loop, `if` Statement

This program searches for a specific string element within an array. If the element is found, it prints its corresponding index. If the loop finishes without finding the element, it outputs a "not found" message.

* **Input Array:** `["Ali", "Ahmed", "Sara", "Fatima"]`
* **Target Element:** `"Sara"`
* **Expected Output:** `Sara found at index 2`
* **Fallback Output:** `Element not found` (if searching for a name not in the array)

## 🚀 How to Run Locally

To run these tasks on your local machine, follow these steps:

1. **Clone the repository** (if it's already on GitHub) or download the files to your computer.
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Navigate to the project folder.
3. Open either the `Task1_SumOfArray` or `Task2_FindIndex` folder.
4. Double-click the `index.html` file to open it in your default web browser.
5. The result will be displayed directly on the webpage.

### Viewing Console Output (Optional)
You can also view the `console.log` outputs by opening your browser's Developer Tools:
* **Windows/Linux:** Press `F12` or `Ctrl + Shift + I`
* **Mac:** Press `Cmd + Option + I`
* Navigate to the **Console** tab to see the printed results.

## 🛠️ Technologies Used
* HTML5
* JavaScript (ES6)
```