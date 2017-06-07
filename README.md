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
  components/
      Header/
        index.js

  containers/
    Hello/
      subpage/
        Carousel.jsx
        List.jsx
        Recommend.jsx
      index.jsx
index.jsx
