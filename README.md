# MediQueue
## Description
MediQueue was developed to address the chaos of high-traffic medical centers. By
moving the physical queue into a digital environment, hospitals can reduce lobby
density, minimize wait-time anxiety, and provide a safer, more organized experience
for patients and staff alike.

## The system logic
The system is built on a non-linear data flow. Unlike traditional sites, MediQueue uses
URL Query Parameters as a trigger mechanism. When a department is selected,
the script interprets the string and initiates a ticket increment logic: Ticket = (n + 1) %
400. This ensures a sustainable loop for high-volume facilities.

## The problem its solving
1.The "Unknown Wait" Anxiety (Psychological Load) is avoided .
2.Physical Congestion and "Cross-Infection" Risks is well solved .
3.Departmental "Traffic Jam" Desync is possible.

## Project setup instructions
### step 1
clone repo:https://github.com/coodewizard31/clinical-priority
### step 2
cd into the cloned dir

### step 3
create files into them 
1.Index.html
2.Style.css
3.Script.js
3.About.htm

## Technologies used
1.Html: used to give stucture to my website
2.css:used in styling
3.Javascript: for logic

## Known Bugs
1.The Bug: The system relies on the URL "query string" (e.g., ?dept=xray) to trigger the ticket logic.
2.The Reality: If a user is bored and manually changes the URL to ?dept=theater, the header might show "Confirming Department..." or break the image display because there is no theater.jpg.
3.There is currently no "Timeout" or "Auto-Clear" logic.If a patient joins the queue and then simply closes their browser and goes home without clicking "Cancel & Exit," their ticket number stays in the localStorage forever.

## Author information
Git profile:https://github.com/coodewizard31
Email:frankwamuyu40@gmail.com
Role:Junior dev
## live site
## Copyright & License
MIT License
Copyright (c) 2026
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
