# CV Template

This is a CV Template with JSON configuration files.

## Prerequired

Install angular cli globaly
```
$ npm install -g @angular/cli@6.2.4
```

## Installation

First, download dependances :
```
$ npm install
```

Build the application with 
```
$ ng build
```

Now you can go on `dist` folder and open `index.html` on navigator.

Or run a server with 
```
$ ng serve
```
And open the url `http://localhost:4200`

# Configuration

You can configurate you own CV with json files.
You can find it in `src/assets/json`.
Each json are linked on a page.

## Set a new icon

On the projet I use https://materialdesignicons.com/ for the icons.
If you want to change an icon, you must prefix the icon with `mdi:` and found the name on the website.

For example, if I want to have an Nintendo Switch icon (`nintendo-switch`) on my json I must have `mdi:nintendo-switch`.