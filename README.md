# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![Desktop Design](/public/design/desktop-full.png)

### Links

- Solution URL: [Solution URL](https://github.com/Heph-zibah/job-listing)
- Live Site URL: [Live site URL](https://job-frontendmentor-listing.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite) - For styles


### What I Learned
This project marks my first venture into React JS and typescript, and as expected, I’ve learned a lot. From the beginning, I was determined not to get stuck in tutorial hell. After watching just two tutorial videos, I decided to dive into building projects, using my Vue.js knowledge as a foundation.

While that background was helpful, React is not the same as Vue. The syntax is vastly different, and the patterns often require a new way of thinking. What truly helped me was having a clear idea of what I wanted to build and figuring things out along the way.

There’s a lot to be proud of, but here’s just a snippet that shows how I handled dynamic filters using useState and conditional logic:

```html
<p
  key={tool}
  className="bg-[#EEF6F6] text-[#61A8A8] font-semibold py-1 pl-2 rounded-sm"
>
  {tool}
  <span
    onClick={() =>
      setFilters((prev) => ({
        ...prev,
        tools: prev.tools.filter((item) => item !== tool),
      }))
    }
    className="text-white bg-[#61A8A8] p-2 rounded-e-sm ml-5 cursor-pointer"
  >
    X
  </span>
</p>

```
```js
const handleFilterClick = (type: keyof typeof filters, value: string) => {
  setFilters((prev) => {
    if (type === "languages" || type === "tools") {
      const exists = prev[type].includes(value);
      return {
        ...prev,
        [type]: exists
          ? prev[type].filter((item) => item !== value)
          : [...prev[type], value],
      };
    }
    return {
      ...prev,
      [type]: prev[type] === value ? "" : value,
    };
  });
};


```


### Continued development
I will continue to learn more about Reactjs and typescript.

### Useful resources

- [React Docs](https://react.dev) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.


## Author

- Website - [oadaramola]( https://oadaramola.vercel.app/)
- Frontend Mentor - [@Heph-zibah](https://www.frontendmentor.io/profile/Heph-zibah)
- Twitter - [@oadaramola]( https://twitter.com/oadaramola10)
