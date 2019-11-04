# Interactive Frontend Development

## Milestone Project

### Loader Media
My second milestone project is entitled Loader Media. The Interactive Frontend Development project was to create a website displaying the appropriate use of HTML, CSS and JavaScript. I developed a website of my own choosing. I designed a photography website for my friend. Showcasing the images he has taken and making them available to be purchased. The webpage is aimed at existing fans of his work and possible new ones. It is designed to showcase his work and photography skills along with an insight into himself as a photographer. It is also designed to make it easy access, for users to find what they are looking for such as contact info. I have created a frontend only website consisting of six pages that can be accessed from the menu at the top and an additional four pages containing purchase information one of which is designed as a checkout page.

#### The business goals of this website are:
* Build brand awareness.
* Provide information on the photographer, his work and how to contact him.
* Provide contact info to ensure all users are kept up to date.
* Excellent UX to keep potential fans on site long enough to obtain all information they would need.

#### The customer goals of this website are:
* Searching for photographs to purchase or general data.
* Find contact information and social sites.
* Clear and easy to find background material about the artist.

### UX
This website is aimed at new and existing clients. It showcases new works, information on the photographer himself and a clear way to contact him. It also lists his brief guides on his favourite photography skills, for example, Car Photography and it lists the products that can be purchased and clearly states the price. (B2B) As a developer I wanted to create a colour scheme across the website to allow it to flow, there would be no drastic changes or harsh contrast conveying the pictures that are featured on Loader Media.(B2B & B2C) I also wanted the navigation system to be fairly simple so the user knows where the menu is sending them. Nothing ambiguous. I looked at many photography websites and forums of what clients want. I also had a list of questions I asked the photographer himself. Such as: colour schemes, fonts, menu navigation, gallery and also page content. (B2C)
[Wireframe] (https://balsamiq.cloud/s12yn7x/pq4pmcd/rB581)
After designing a wireframe using Balsamiq I did a quick mockup of the website and ran through my ideas with the photographer. He asked if it was possible to add certain features. Such as the layout of the gallery.

### Features

#### Header
The very first feature you will see are social links. These will link the user to said social sights. They are on the top left of the page and they are only small to essentially be a feature element. It gives users different ways of connecting with the photographer and view his work and other aspects of his life. The social links are placed on every page (apart from index.html) in the header and footer again equalling easy access.  The header also contains a menu bar again featured on every page. They are linked to each individual page for easy navigation. There is a hvr-sweep-to-bottom so it adds to the aesthetic of the page.

#### Footer
The footer is also featured on every page other than the home page (index.html). I have added a Google Maps API as a feature to the footer bar to a more enganging and interactive look. Underneath is an email address displayed and directly below that is duplicate social links. The footer is aimed towards ease of contact. The bootstrap grid method has been utilised on every page just with the layout being slightly different.

#### Section
##### Home
The Homepage is by far the most simple to look at. An image covers the entire page with “Loader Media” displayed in large lettering and a dropdown menu which can be accessed via the top in the centre. The menu drops down on the left hand side of the screen.
##### About
This page features a bio of the photographer. As aforementioned every page includes the Header and the Footer elements along with a title of the page in a different font. The page also features a portfolio of some of his work to interest his target audience to look on.
##### Photos
This page is entitled Photography. It features 4 accordions with tips and tricks on how to photograph certain pictures. Underneath is a light box with a picture relating to each guide.  
##### Pricing
The Pricing page features a pie chart with data showing the size of photo purchased. Underneath the chart there is a list of prices. There is also a drop down button which links to the Cars, Animals and Landscape pages that separately link to the checkout page (this cannot be accessed via the navbar) these pages contain cards with the picture and each button the user can tick to select what size picture and style.
##### Gallery
This page has a responsive gallery.
##### Contact
Contact page features an email form connected with EmailJS and a telephone number in case the client would prefer to phone.

#### Existing Features
* Header Navigation Bar - Exists on every page and allows all users to easily navigate all the website's pages and find what they are looking for quickly.
* Section Title – Exists on every page but doesn’t link to the homepage.
* Header Social Icons – Exists on every page and allows all users to access the social platforms that the artist uses.
* Footer Social Icons - Exists on every page and allows all users to access the social platforms that the artist uses.
* Footer Google Maps API – Provides a more interactive experience for the user. Exists on every page. Adds to aesthetic of the page.
* Bio - Allows potential clients and business contacts to connect with the photographer without overloading the user with information.
* Photo’s Page - Allows all visitors to the website to view his self he guides and see examples of his work.
* Pricing Page - Allows potential clients to see what others have purchased and the most popular option.
* Cars, Animals and Landscape Page – the perspective pages allows the user to select which picture to purchase.
* Checkout Page – standard checkout page
* Contact Page - Allows potential clients to see the best way to contact the photograph, in regards to professional or personal.

#### Features to Implement in future
* FAQ page, table with FAQs and dropdown buttons to view answers - Gives potential clients easy to find answers to their common questions.
* Blog - Allows new and existing fans to discover the website through articles written by the photographer about topics such as their pictures/new projects, what he has been up to and what he would like to accomplish.
* Option to choose the language of the website - As the brand expands it wouldn’t place a limit on their following.
* Promotional Video - Allows potential clients to connect with the artist. • Add audio and video clips.

### Technology Used
* This project uses HTML and CSS and JavaScript programming languages.
* Cloud9 - This project uses Cloud9 for the IDE while building the website.
* BootstrapCDN o The project uses Bootstrap4 to simplify the structure of the website and make the website responsive easily. o The project also uses BootstrapCDN to provide icons from FontAwesome
* Google Fonts o The project uses Google fonts to style the website fonts
* W3Schools o This project uses W3Schools to help with JavaScript. o This project also uses W3Schools for the list of colours
* Google Maps o This project uses Google Maps API. • High Charts o This project uses High Charts to help build a pie chart.
* EmailJS o This project uses EmailJS to link enquiries that are sent via the contact form.

### Testing
* W3C CSS validation
* W3C Markup Validation o This project uses W3C CSS Validation Service and W3C Markup Validation Service to check the validity of the website code.

#### Testing client stories from UX section of README.md
1.	As a new visitor to the website, I want to easily navigate the site, so I can find what I need efficiently. i. No matter what page the new visitor lands on, they can easily find and use the navigation bar.
2.	As a new visitor to the website, I want to know about the photographer’s skills and view his work in detail so I can decide if I want to follow him. i. Page dedicated to photography and a gallery page.
3.	As a visitor to the website, I am curious to know more about the photographer, so I can connect with them on a personal level. i. A clearly labelled About page is easy to find in the navigation on every page.. ii. The pages contains a few photos to demonstrate his work.
4.	As a potential client, I want to view expected prices for a portrait, so I can decide if it is within my budget to order. i. A clearly labelled pricing page is easy to find in the navigation on every page.. ii. The visitor is also invited to contact the photographer if they cannot find what they wanted.
5.	As an interested client, I want an easy way to be able to contact the artists, if I have a more personal request or a business enquiry. i. A clearly labelled contact page is easy to find in the website navigation on every page.
6.	As an interested observer and/or potential client, I want to follow the artists on social media, so I can keep up with her latest news. i. social media icons can be found in the header and footer on every page of the website.

#### Manual testing.

##### Header:
1.	Go to the "Home" page from a desktop.
2.	Change the screen size from desktop to mobile to verify that the navigation bar looks good on smaller screen sizes also.
3.	When checking responsiveness of navbar, verify that there is no overflow causing ugly size changes to menu items.
4.	Hover over the menu bar to test the hover elements.
5.	Hover over social links to see the color change.
6.	Click on each navigation menu item and verify that it links to the correct page.
7.	Change screen size to small and verify that menu text is centred.
8.	Repeat verification of functionality and responsiveness on div tools.

##### Footer:
1.	Hover over each social media icon and confirm colour and size transitions expected.
2.	Reduce and expand width of window to verify that the footer is responsive and looks good on all device widths.
3.	Review all functionality and responsiveness on div tools.

##### Page images:
1.	Hover over each image in the content and confirm that the alt title for each appears.
2.	Reduce and expand width of window to verify that each image behaves and centres the way expected, and that they look good on all device widths.

##### Page content:
1.	Reduce and expand width of window to verify that each line of text behaves the way expected, and that the text arrangement looks good on all device widths.

### Deployment
This project was developed using the Cloud9 IDE, committed to git and pushed to GitHub using the built in function within cloud9. To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:
1.	Log into GitHub.
2.	From the list of repositories on the screen, select elizabeth24602/loadermedia.
3.	From the menu items near the top of the page, select Settings.
4.	Scroll down to the GitHub Pages section.
5.	Under Source click the drop-down menu labelled None and select Master Branch
6.	On selecting Master Branch the page is automatically refreshed, the website is now deployed.
7.	Scroll back down to the GitHub Pages section to retrieve the link to the deployed website.

### Credits

#### Content
The text for the website was created for Loader Media by Elizabeth Perrey. • The text was proof-read/edited by Elizabeth Perrey

#### Media
* The photos used in this site were obtained from personal files with a few downloaded via google.

#### Code
* Snippets of code where used from W3 Schools/High Charts.

#### Acknowledgements
* I received inspiration for this project from my own experience of building and maintaining a WordPress Blog for personal use in the past years. • I received further inspiration from google searches of photography websites.
