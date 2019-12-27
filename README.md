# demo
这是用来存储一些小功能的仓库


节流
```javascript
// 1
function throttle(fn, interval) {
  let flag = true;
  return function(...args) {
    let context = this;
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(context, args);
      flag = true;
    }, interval);
  };
};
// 2
const throttle = function(fn, interval) {
  let last = 0;
  return function (...args) {
    let context = this;
    let now = +new Date();
    // 还没到时间
    if(now - last < interval) return;
    last = now;
    fn.apply(this, args)
  }
}
```

防抖
```javascript
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    let context = this;
    if(timer) clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  }
}
```

双剑合璧——加强版节流
```javascript
function throttle(fn, delay) {
  let last = 0, timer = null;
  return function (...args) {
    let context = this;
    let now = new Date();
    if(now - last < delay){
      clearTimeout(timer);
      setTimeout(function() {
        last = now;
        fn.apply(context, args);
      }, delay);
    } else {
      // 这个时候表示时间到了，必须给响应
      last = now;
      fn.apply(context, args);
    }
  }
}
```

图片懒加载
方案一:clientHeight、scrollTop 和 offsetTop
```javascript
  // 占位
  <img src="default.jpg" data-src="http://www.xxx.com/target.jpg" />
  // 通过监听 scroll 事件来判断图片是否到达视口
  let img = document.getElementsByTagName("img");
  let num = img.length;
  let count = 0;//计数器，从第一张图片开始计

  lazyload();//首次加载别忘了显示图片

  window.addEventListener('scroll', lazyload);

  function lazyload() {
    let viewHeight = document.documentElement.clientHeight;//视口高度
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//滚动条卷去的高度
    for(let i = count; i <num; i++) {
      // 元素现在已经出现在视口中
      if(img[i].offsetTop < scrollHeight + viewHeight) {
        if(img[i].getAttribute("src") !== "default.jpg") continue;
        img[i].src = img[i].getAttribute("data-src");
        count ++;
      }
    }
  }
  // throttle函数我们上节已经实现
  window.addEventListener('scroll', throttle(lazyload, 200));
```

方案二：getBoundingClientRect
```javascript
  function lazyload() {
    for(let i = count; i <num; i++) {
      // 元素现在已经出现在视口中
      if(img[i].getBoundingClientRect().top < document.documentElement.clientHeight) {
        if(img[i].getAttribute("src") !== "default.jpg") continue;
        img[i].src = img[i].getAttribute("data-src");
        count ++;
      }
    }
  }
```

方案三: IntersectionObserver
```javascript
  // 这是浏览器内置的一个API，实现了监听window的scroll事件、判断是否在视口中以及节流三大功能。
  let img = document.getElementsByTagName("img");

  const observer = new IntersectionObserver(changes => {
    //changes 是被观察的元素集合
    for(let i = 0, len = changes.length; i < len; i++) {
      let change = changes[i];
      // 通过这个属性判断是否在视口中
      if(change.isIntersecting) {
        const imgElement = change.target;
        imgElement.src = imgElement.getAttribute("data-src");
        observer.unobserve(imgElement);
      }
    }
  })
  Array.from(img).forEach(item => observer.observe(item));
```

will-change: transform;  这行代码能够开启 GPU 加速页面渲染，从而大大降低了 CPU 的负载压力，达到优化页面渲染性能的目的



