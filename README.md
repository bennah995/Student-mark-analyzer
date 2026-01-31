# Student Marks Analyzer (Mini Gradebook)

A lightweight JavaScript utility designed to process student data, calculate academic performance metrics, and generate a formatted class report. 

This project focuses on core programming logic using loops and conditional statements.

## 🚀 FeaturesAverage Calculation: 

- Iterates through nested mark arrays to compute precise averages. 
- Dynamic Grading: Assigns letter grades (A-E) based on a custom grading scale.
- Status Tracking: Automatically flags students as PASS or FAIL based on a 60% threshold. 
- Class Summary: Generates high-level insights including pass/fail counts and identifies the top/bottom performing students.

## 🛠 Concepts Covered

This project was built to demonstrate proficiency in:

- Object Manipulation: Accessing and constructing complex objects.
- Nested Loops: Using for loops to traverse arrays within arrays. 
- Conditional Logic: Utilizing if/else ladders for grading and status assignment.
- Data Aggregation: Manually calculating sums, maximums, and minimums without built-in helper methods (like map or reduce).

## 📊 Logic Flow

The analyzer follows a specific execution path:

- Initialize: Start with an array of student objects containing names and raw marks.

- Process: Loop through the data to calculate the mean for each student.

- Evaluate: Apply the grading rubric:

A: $\ge 80$

B: $\ge 70$

C: $\ge 60$ (Pass Threshold)

D: $\ge 50$

E: $< 50$

- Report: Construct a new report array and log the formatted results to the console.

## 💻 Sample Output

Plaintext

>Amina: Avg 79.25 | Grade B | PASS

>Brian: Avg 55.75 | Grade D | FAIL


Class Summary:

Total Students: 5

Pass: 3 | Fail: 2

Top Student: Cynthia (88.5)

Lowest Student: David (43.5)

## 📜 Rules Followed

1. No high-order functions (map, filter, reduce) were used.
2. Pure for loops used for all iterations to demonstrate fundamental control flow.

## 🛠 How to Run This Project
Follow these steps to view the Student Marks Analyzer in action:

1. Clone the Repository
Open your terminal and run the following command to get a local copy:

>git clone https://github.com/bennah995/Student-mark-analyzer.git

2. Open the Project
Navigate to the project folder and open the index.html file in any modern web browser (Chrome, Firefox, Edge, or Safari).

- Tip: You can simply double-click the file in your file explorer.

3. Open the Developer Tools
Since this script outputs data directly to the JavaScript Console, you’ll need to open it:

- Right-click anywhere on the page and select Inspect.

- Navigate to the Console tab at the top of the panel that appears.

4. View the Report
Once the console is open, refresh the page (F5 or Cmd+R). You will see the formatted student report and class summary printed clearly in the log.


## 📂 Project Structure
> index.html: The entry point that loads the script.

>script.js: Contains the logic for the Student Marks Analyzer.