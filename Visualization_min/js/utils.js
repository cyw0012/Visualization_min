// 函数封装

// 获取随机数
let getRandom = (a, b) => {
  return Math.floor(Math.random() * (b - a + 1) + a)
}

// 获取元素
let $ = (str) => document.querySelector(str)

// 获取当前时间并处理
let getNow = () => {
  let date = new Date()
  let h = date.getHours()
  let hh = h < 10 ? '0' + h : h
  let m = date.getMinutes()
  let mm = m < 10 ? '0' + m : m
  let s = date.getSeconds()
  let ss = s < 10 ? '0' + s : s
  return {
    hh,
    mm,
    ss,
    h,
    m,
    s,
    ms: date.getMilliseconds(),
  }
}
