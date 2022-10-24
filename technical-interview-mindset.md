# Developing a Technical Interview Mindset By Quinton Aiken

## Agenda

- Intro
- Studying
  - Technical template
- Applying
  - Resume, etc
- Interviewing

## Interviewing is harder than the day-to-day role of software engineering.

- Every time I apply for jobs I have to practice technical interviewing?
- Yes.
- Create a notebook that you can use every time you need to study, apply, and interview.

## Job Search Template

For each company, list:

- Job listing
- Job title
- Date applied
- Status
- Cover letter
- People you spoke to
- Questions to ask them
- If you don't end up working here, what was the reason?

## Studying - Startups vs Big Tech

- What type of company do you want to work for?
  - Early Startups
    - Pre series C
    - Unstructured/Conversational
    - Fewer Rounds
  - Medium-Sized Companies
    - Series C -> Recently IPO
    - Structured / Standard Process
    - Recruiter Call, Phone Screen, Technical Interview, Onsite (5-6 rounds)
  - Big Tech
    - Giant, Public
    - Extremely Rigid
    - Company-Specific Interview Framework

## Studying - Data Structures, Algorithms, Big O

- Each technical question has 3 components:
  - Data Structures
    - How can I represent this problem in a data structure?
  - Algorithm
    - What can I do to this data structure to output my solution?
  - Analysis Techniques (Big O)
    - What is the time and space complexity?

### Focus on small subset of algorithms will being success! 90%+ of technical interviews on these data structures

- Hashes and Nested Arrays
  - 2D matrix in chess board
- Linked Lists
- Stacks, Queues, and Heaps
- Graphs, Trees
  - Great for pathfinding and networks

You can categorize (almost) every interview problem into one of ~16 patterns (algorithms). Have a toolbelt ready.

- Memoization, Recursion, Dynamic Programming
- Linear Algos - Arrays, Strings (Sliding Windows, Two Pointers, Sorting(Merge/Quick)
- Tree Algos (Binary, Breadth / Depth First Search, Pathfinding)

## Studying - Don't read Cracking the Coding Interview or do Leetcode Challenges and Avoid GeeksForGeeks

- Cracking the Coding Interview is a FAANG-focused.
- Leetcode is a competitive programming platform at its core, not an interview platform (Started with 100 problems, had over 1800 now).
- Leetcode "Hard" questions usually don't show up in interviews.
  - Hard problems give you the illusion that you need to prepare more, so you spent more time on the site.
- Companies know that you can't write perfect code in 30 minutes that passes 100s of test cases.
- In interviews, companies care about Big O, not on optimizing ms.
- These resources are unnecessarily overwhelming and promote anxiety.
- Pick 1-3 courses and **master** them.
  - Quinton's favorite courses:
    - [Educative - Grokking the Interview](https://www.educative.io/courses/grokking-the-coding-interview)
    - [Complete Intro to Computer Science](https://frontendmasters.com/courses/computer-science-v2/)
    - [Interview Cake](https://www.interviewcake.com/)
  - Quinton's favorite coding challenge site:
    - [codewars](https://www.codewars.com/) (low stress, good mentality)

**Most difficult part of interview is knowing which data structure and pattern to use** - key to acing interview

- *Focus on one resource at a time. Repeat them.*
- By adding resources, you focus on finishing the resources not mastering the content. You finish a resource then start the next one at 0%.
- Pick one coding challenge site.
- Do 100 problems, not 100, and truly understand the patterns and data structures.
- Focus on 2 resources (max).

## Studying - Technical Question Template

- Be comfortable using this template in a google doc, whiteboard and runnable coding environment.
- Communicate your thought process out loud during every step.
  - Gives interviewer chance to course-correct, ask questions.
  - ***Listen to what the interviewer says/asks during every step.***
    - Stop immediately, they are most likely giving you a hint.

1. Ask Clarifying Questions
   - Can I expect that ___?
     - Can I assume all numbers are whole numbers? 
     - Will numbers always be positive? 
     - Can I assume the arrays are sorted? 
     - Can the numbers be duplicated? 
     - Can there be more than one pair?)
   - State and clarify key assumptions, write them on the board.
2. Write Input/Output
    - Ensure you know what type of input to expect and what output should be
3. Generate Test Cases
    - Include 1 basic test and 2 edge-case tests
4. **Figure out which Data Structure and Algorithm best solve the problem**
    - Does it fit a pattern?
5. Write out the Algorithm in Very Basic Pseudo-Code
    - Explain that you will write a little big of pseudo-code first, but then will write code.
    - Do not go down an "Insanely complex implementation" road. If you are, stop and look for ways to simplify. You are probably missing "the trick/pattern".
    - Write out the data structure and algorithm as it applies to the problem.
    - Be brief. Example: Write 'swap' instead of actual swap function.
    - Run through one test case line-by-line.
6. Discuss the Time and Space Complexity (Big O) of your proposed solution
    - Should I start coding with that?
    - Chance to course correct
7. Write Actual Code
    - Write descriptive variable and function names.
    - If you made it here, you're in a good spot.
8. Test
    - Run through each test case line-by-line.
    - Add additional error handling / debug as needed.

- This promotes you speaking your thought process out loud.

## Applying

- Apply to jobs where you meet 50-75% of the requirements
- If job description is what you want to become, go for it!
- Small startup = full-stack, all hands on deck, very quick-paced to learn.
- Medium-to-large size with a little bit of hand-holding.