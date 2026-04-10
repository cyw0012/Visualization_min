// 头部时间
let updateTime = () => {
  let time = getNow()
  // 显示
  $('.number_hh').innerHTML = time.hh
  $('.number_mm').innerHTML = time.mm
  $('.number_ss').innerHTML = time.ss
  // 旋转
  let ssAngle = time.s * 6 + (time.ms / 1000) * 6
  let mmAngle = time.m * 6 + ssAngle / 60
  let hhAngle = (time.h % 12) * 30 + mmAngle / 12 + ssAngle / 360
  $('.img_mm').setAttribute('style', `transform: rotate(${mmAngle}deg)`)
  $('.img_hh').setAttribute('style', `transform: rotate(${hhAngle}deg)`)
  $('.img_ss').setAttribute('style', `transform: rotate(${ssAngle}deg)`)
}
updateTime()
setInterval(() => {
  updateTime()
}, 100)

// 第一部分（第一块）
let one_num = 0
let one_num1 = 163245
let one_num2 = 1434
let one_num3 = 145
let one_num4 = 500
let one_arr = [5, 3, 7, 8, 4, 5, 3]
let one_index = 0
setInterval(() => {
  one_index++
  one_index = one_index > one_arr.length - 1 ? 0 : one_index
  one_num1 = (Number(one_num1) + one_arr[one_index] / 10.0).toFixed(0)
  one_num2 = (Number(one_num2) + one_arr[one_index] / 10.0).toFixed(1)
  one_num3 = (Number(one_num3) + one_arr[one_index] / 10.0).toFixed(1)
  $('.one_num1').innerHTML = `${one_num1}&nbsp;<span>万kwh</span>`
  $('.one_num2').innerHTML = `${one_num2}&nbsp;<span>万kwh</span>`
  $('.one_num3').innerHTML = `${one_num3}&nbsp;<span>万kwh</span>`
}, 2000)
setInterval(() => {
  one_num4++
  $('.one_num4').innerHTML = `${one_num4}&nbsp;<span>h</span>`
}, 4000)

// 第二部分（第一块）
let two_cnt1 = 12345
let two_cnt2 = 231
let two_cnt3 = 231
let two_cnt4 = 500
setInterval(() => {
  two_cnt1++
  $('.two_num1').innerHTML = `${two_cnt1}&nbsp;<span>万kwh</span>`
}, 2000)
setInterval(() => {
  two_cnt2++
  $('.two_num2').innerHTML = `${two_cnt2}&nbsp;<span>万kwh</span>`
}, 3500)
setInterval(() => {
  two_cnt3 += getRandom(0, 2)
  $('.two_num3').innerHTML = `${two_cnt3}&nbsp;<span>万kwh</span>`
}, 5000)
setInterval(() => {
  two_cnt4 += getRandom(0, 2)
  $('.two_num4').innerHTML = `${two_cnt4}&nbsp;<span>h</span>`
}, 4500)

// 第三部分
setInterval(() => {
  let num = getRandom(0, 1000)
  $('.three_num1').innerHTML = `${(1234.12 + num / 100.0).toFixed(
    2
  )}&nbsp;<span>mv</span>`
}, 400)
setInterval(() => {
  let num = getRandom(0, 10)
  $('.three_num2').innerHTML = `${1234 + num}&nbsp;<span>万m<sup>3</sup></span>`
}, 2000)
setInterval(() => {
  let num = getRandom(0, 5)
  $('.three_num3').innerHTML = `${102 + num}&nbsp;<span>蒸吨</span>`
}, 1000)
setInterval(() => {
  let num = getRandom(0, 10)
  $('.three_num4').innerHTML = `${1238 + num}&nbsp;<span>mv</span>`
}, 600)

// 第五部分
let five_cnt1 = 400
let five_cnt2 = 150
let five_cnt3
setInterval(() => {
  five_cnt1++
  $('.five_num1').innerHTML = `${five_cnt1}&nbsp;<span>次</span>`
}, 2000)
setInterval(() => {
  five_cnt2++
  $('.five_num2').innerHTML = `${five_cnt2}&nbsp;<span>次</span>`
}, 3500)
setInterval(() => {
  five_cnt3 = 5 + getRandom(0, 2)
  $('.five_num3').innerHTML = `${five_cnt3}&nbsp;<span>分钟</span>`
}, 5000)

// 第七部分
let seven_cnt1 = 12345
let seven_cnt2 = 12345.0
let seven_cnt3 = 1345.1
let seven_cnt4 = 2341.1
setInterval(() => {
  seven_cnt1 += 3
  $('.seven_num1').innerHTML = `${seven_cnt1}&nbsp;<span>t</span>`
}, 1500)
setInterval(() => {
  seven_cnt2 += getRandom(0, 100) / 10
  $('.seven_num2').innerHTML = `${seven_cnt2.toFixed(1)}&nbsp;<span>t</span>`
}, 3500)
setInterval(() => {
  seven_cnt3 += getRandom(0, 100) / 10
  $('.seven_num3').innerHTML = `${seven_cnt3.toFixed(
    1
  )}&nbsp;<span>万kwh</span>`
}, 2800)
setInterval(() => {
  seven_cnt4 += getRandom(0, 100) / 10
  $('.seven_num4').innerHTML = `${seven_cnt4.toFixed(
    1
  )}&nbsp;<span>万kwh</span>`
}, 3500)
