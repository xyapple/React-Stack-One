# React Stack
--Yin Deascentis
tip: when I setup github repository I add .gitignore file; so when I try to push the local git file onto github, it was [rejected].
To solve the problem:
```
$git pull --rebase
/*First, rewinding head to replay your work on top of it...*/
$git push origin master
```

# File Structure
app/
  components/{Inside will be reusable parts; header will be in every page }
      Header/
        index.js

  containers/{Only use in individual subpage; Data and Logic(event listening; Ajx calls)}
    Hello/
      subpage/
        Carousel.jsx
        List.jsx
        Recommend.jsx
      index.jsx
index.jsx

# Testing (pick the easy one for this project)
```
npm install react-addons-perf --save

//then in app/index.jsx

import Perf from 'react-addons-perf'
if(__DEV__){
  window.Perf = Perf
}
```
```
npm i react-addons-pure-render-mixin --save
/*Inside the Todolist*/
import PureRenderMixin from 'react-addons-pure-render-mixin'

```

# React-Router
```
npm install react-router --save
```
