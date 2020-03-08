
# **Daily Event Planner** 

###  _by Joseph Addamo_

## Pseudocode
- Create HTML template
- Append _Bootstrap v4.0_ CDN
- Create a **Jumbotron** intro, inside it's own container
- Center text in jumbotron
- Next, create body `Container` 
- Create 24 `row` with 3 `col` each
 
- Set the first column to 1 , the middle column to 10, and the last column to 1:

 `col-sm-1` `col-md-1` `col-lg-1` / `col-sm-10` `col-md-10` `col-lg-10` / `col-sm-1` `col-md-1` `col-lg-1` 
- Assign a `Class` to each `row`, to corellate with the **current time**
- Assign an **ID** to each `col`
- Create a `Form` for each middle column for the input type
- Create a `Button` on the third col of each row
- Assign data-index-number to each button that correlates with 
### Next, step into JS
- Create a variable to store today's date, and, one for today's time
- Create a `Function` that renders the page to set today's `hourNow` to the color red, anything `< hourNow` grey, `> hourNow` green
- Create event-listener, on submit, change store innerHTML in form
- Create on-click function for buttons
