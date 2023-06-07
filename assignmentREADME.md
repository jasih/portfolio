# JS Portfolio Assignment

---

This assignment combines the interpersonal and technical lecture modules. This portfolio page will contain their biographies, stories (Maybe in a blog format), resumes, descriptions of the assignments and assessments they completed, any previous projects they built, and professional images of themselves. The students should develop their own user stories and design the portfolio site themselves. Each student will present their portfolio pages along with their stories and experiences through FastTrack'D to the class.

## Goal

---

Students will create their own portfolio page/site and prepare a presentation in which they will cover their experiences at FastTrack'D, their story which they have developed throughout the course, and their technical abilities by using their portfolio sites to effectively guide and support their presentation. This will serve as a great resource for representing each student individually and their experience throughout the lecture modules of FastTrack'D.

## Required Content

---
- [ ] Resume present and available for download
- [ ] Routing either between pages || single scrolling page (using anchors or a some type of navigation)
- [ ] Working links to Github projects or deployed projects
- [ ] About section. (Summary can be taken from your story mining).
- [ ] At least (1) animation existing anywhere on the site (e.g.- sliders, button effects, loading spinner, etc...)
- [ ] Github API specific data - Object structure below
- [ ] ----------------------------
- [ ] Profile picture present, pulled from Github via Github's API
- [ ] Bio underneath profile picture, pulled from Github via Github's API
- [ ] Hire-able status displayed, pulled from Github via Github's API


## Wireframe


## Examples
Below is a multi-page portfolio with both desktop and mobile views. The design is very minimal and relies on large areas of white-space.

<!-- ![multi-page](https://user-images.githubusercontent.com/12191780/161307224-b29bf3e0-e2a6-41c6-bda3-fb90398929f8.png) -->

![home-page](https://user-images.githubusercontent.com/12191780/161307236-e749eb6d-83af-4ea7-a680-8f49ff5395b9.png)

The landing page for this site includes the about section as well as a download link for the resume and the profile picture.

![work-page](https://user-images.githubusercontent.com/12191780/161307244-8285e756-3ead-4653-9579-5ea59800093d.png)

Clicking the title of each project will take you to the GitHub repository for the respective project, but you could also include a GitHub icon that links to the project if you prefer.

![contact-page](https://user-images.githubusercontent.com/12191780/161307252-3646cbb3-5a8e-4d3b-89eb-4ca840786cba.png)

The contact page is very basic and just sends an email to the portfolio owner.


Below is a single scrolling portfolio page with anchors in the navbar leading to different sections on the same page. Click on the image to explore the portfolio's wireframe in Figma.

<a href="https://www.figma.com/proto/vE1T72gLqju5ITQ2jlSzfL/Portfolio-Wireframe?node-id=14%3A10&starting-point-node-id=14%3A10">
<img width="1438" alt="Screen Shot 2022-03-29 at 4 24 34 PM" src="https://user-images.githubusercontent.com/32781877/160709821-1b2593c1-52e9-408d-9830-6a5a305e1791.png">
</a>


Below is a wireframe (also known as a page schematic or screen blueprint) with sidebar navigation and a more grid layout for representing the user flow. Click on the "play" button at the top right within the Figma in order to explore the flow of the site.

![wireframe-image](https://i.imgur.com/gN9wI5M.png)


https://www.figma.com/file/VvzrwlF8oLbjqKXLh0w9Tj/Wireframes-for-Portfolios?node-id=0%3A1https://www.figma.com/file/VvzrwlF8oLbjqKXLh0w9Tj/Wireframes-for-Portfolios?node-id=0%3A1

## The example object will be returned from Github's API
###  https://api.github.com/users/chris-purnell 
---

```json
{
   "login":"chris-purnell",
   "id":74918205,
   "node_id":"MDQ6VXNlcjc0OTE4MjA1",
   "avatar_url":"https://avatars.githubusercontent.com/u/74918205?v=4",
   "gravatar_id":"",
   "url":"https://api.github.com/users/chris-purnell",
   "html_url":"https://github.com/chris-purnell",
   "followers_url":"https://api.github.com/users/chris-purnell/followers",
   "following_url":"https://api.github.com/users/chris-purnell/following{/other_user}",
   "gists_url":"https://api.github.com/users/chris-purnell/gists{/gist_id}",
   "starred_url":"https://api.github.com/users/chris-purnell/starred{/owner}{/repo}",
   "subscriptions_url":"https://api.github.com/users/chris-purnell/subscriptions",
   "organizations_url":"https://api.github.com/users/chris-purnell/orgs",
   "repos_url":"https://api.github.com/users/chris-purnell/repos",
   "events_url":"https://api.github.com/users/chris-purnell/events{/privacy}",
   "received_events_url":"https://api.github.com/users/chris-purnell/received_events",
   "type":"User",
   "site_admin":false,
   "name":"Christopher Purnell",
   "company":null,
   "blog":"",
   "location":"Memphis, TN",
   "email":null,
   "hireable":null,
   "bio":"A wizard coder who casts powerful spells... but also wrong spells.",
   "twitter_username":null,
   "public_repos":7,
   "public_gists":2,
   "followers":0,
   "following":1,
   "created_at":"2020-11-23T14:49:26Z",
   "updated_at":"2021-11-10T21:38:56Z",
   "private_gists":1,
   "total_private_repos":7,
   "owned_private_repos":7,
   "disk_usage":18632,
   "collaborators":0,
   "two_factor_authentication":false,
   "plan":{
      "name":"free",
      "space":976562499,
      "collaborators":0,
      "private_repos":10000
   }
}
```

### The current values are to be pulled from the above response and injected into your portfolio.

```json
{
    "avatar_url": "https://avatars.githubusercontent.com/u/74918205?v=4",
    "is_hireable": null,
    "bio": "A wizard coder who casts powerful spells... but also wrong spells.",
}
```
*iF **is_hireable** is null like the example above, conditionally check this and add your own value such as "Hireable".*

