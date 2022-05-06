# CubeTest

You can see the finished product here: https://acchang.github.io/CubeTest/


This was an exercise from the Odin Project which involved taking HTML and rewriting it to Javascript Modules:
https://www.theodinproject.com/courses/javascript/lessons/restaurant-page

I decided I wanted to try this neat CSS of an animated spinning cube https://codepen.io/raevenk/pen/ojXMzV, so I started with that and then built a site for a cube-themed restaurant to go with it.

I learned how the CSS was built, and then I coded up an HTML page for my imaginary restaurant. It worked well, so then I moved on to breaking the code up into modules.

Unfortunately, there must have been something wrong with my HTML or I refactored wrong because I could only get 2 out of the 3 (at the time) buttons to work. I spent several days carefully reviewing my code line by line, asking in the Discord and publishing to Stack Overflow but hardly anyone answered. 

I understand why. The issue was not conceptual, there was just likely a syntax flaw. I was asking someone to review my code. I thought there might have been some exception I seized on -- the CSS uses `nth-child`, and that lands in between some modules.

First I thought the problem was the first module, then I swapped the `menuLabel.htmlFor = 'tab-menu'` to `tab-visit` or `tab-home` and it worked.

There was nothing wrong with `.tab-content:nth-child(1)` or with `menuLabel.htmlFor = 'tab-menu';` or `#tab-menu:checked ~ .cube` but I could only get two `transform` commands to execute in the JS version instead of three in the html version.

It's still here if you want to see the failed version: https://htmlpreview.github.io/?https://github.com/acchang/RestaurantPage/blob/main/dist/index.html

"Menu" doesn't work, only "Home" and "Visit" do.

So I went back to the original CSS and built it up from there, seeing if the three buttons worked when put into JS modules in a simpler form. They did, so I just built up the site from there, moving over and tweaking my code.

I played with the size of the cube again, to see if I could get it to fit mobile dimensions. And I added a fourth surface.

Then I polished it up, using factory functions for the final menu page. This page was very helpful to me to see it in action.

https://github.com/michalosman/restaurant-page/blob/main/dist/style.css




