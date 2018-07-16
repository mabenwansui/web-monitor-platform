### page
```
{
  url,
  dns,
  tcp,
  request,
  dom,
  whitescreen,
  domready,
  onload,
  userid,
  userAgent
}
```

DNS查询耗时、TCP链接耗时、request请求耗时、解析dom树耗时、白屏时间、domready时间、onload时间

### click

上限20条(待定)

```  
{
  xpath: 'div#main>div.float-left>span[data-selector=x]',
  time: '1521632251137'
}
```

### ajax

上限20条(待定)

```
{
  url: '/message/getnewdelegatelist4home.json',
  time: '1521632251137'
}
```

### jsError
```
{
  type: 'jsError',
  errType: '',         //SyntaxError（语法错误）ReferenceError（引用错误）等等
  msg: 'a is not defined',
  all_msg: 'Uncaught ReferenceError: a is not defined’,
  jsFile: '',
  lineNum: 1,
  colNum: 50
}
```

### 集合

```
{
  url,
  dns,
  tcp,
  request,
  dom,
  whitescreen,
  domready,
  onload,
  userid,
  userAgent,
  ajax: [
    {
      url: '/message/getnewdelegatelist4home.json',
      time: '1521632251137'
    },
    {
      url: '/message/getnewdelegatelist4home.json',
      time: '1521632251137'
    }    
  ],
  click: [
    {
      xpath: 'div#main>div.float-left>span[data-selector=x]',
      time: '1521632251137'
    },
    {
      xpath: 'div#main>div.float-left>span[data-selector=x]',
      time: '1521632251137'
    }    
  ]
}
```















{
  url,
  dns: domainLookupEnd - domainLookupStart,
  tcp: connectEnd - connectStart,
  request: responseEnd - responseStart,
  dom: domComplete - domInteractive,
  whitescreen: responseStart - navigationStart,
  domready: domContentLoadedEventEnd - navigationStart,
  onload: loadEventEnd - navigationStart,
  userid: (window.LT && window.LT.User.user_id) || '',
  userAgent: window.navigator.userAgent
}























{
    url,
    dns: domainLookupEnd - domainLookupStart,
    tcp: connectEnd - connectStart,
    request: responseEnd - responseStart,
    dom: domComplete - domInteractive,
    whitescreen: responseStart - navigationStart,
    domready: domContentLoadedEventEnd - navigationStart,
    onload: loadEventEnd - navigationStart,
    userid: (window.LT && window.LT.User.user_id) || '',
    userAgent: window.navigator.userAgent
}