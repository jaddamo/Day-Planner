
# **Daily Event Planner** 

###  _by Joseph Addamo_

## Pseudocode
- Create HTML template
- Append _Bootstrap v4.0_ CDN
- Create a **Jumbotron** intro, inside it's own container
- Center text in jumbotron
- Next, create body `Container` 
- Create 24 `row` with 3 `col` each
 
- Set the first column to 2 , the middle column to 8, and the last column to 2:

 `col-sm-2` `col-md-2` `col-lg-2` / `col-sm-8` `col-md-8` `col-lg-10` / `col-sm-2` `col-md-2` `col-lg-2` 
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
