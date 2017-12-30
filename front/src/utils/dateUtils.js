/**
 * 时间处理相关油条都在这里
 */

const dateUtil = {};

const oneMinute = 1000 * 60;
const oneHour = oneMinute * 60;
const oneDay = oneHour * 24;
const oneMonth = oneDay * 30;
const oneYear = oneMonth * 12;
const distanceArr = [
  { value: oneYear, name: '年' },
  { value: oneMonth, name: '月' },
  { value: oneDay, name: '天' },
  { value: oneHour, name: '小时' },
  { value: oneMinute, name: '分钟' },
];

/**
 * 比较给出时间与参考时间，得出多久之前
 * @param {*} beforeDate Date obj or Date times
 * @param {*} referDate Date obj or Date times
 */
dateUtil.howLongBefore = (beforeDate, referDate) => {
  const length = referDate - beforeDate;
  let resStr = '';
  distanceArr.every((distance) => {
    const tmpRes = length / distance.value;
    if (tmpRes > 1) {
      resStr = `${Math.floor(tmpRes)}${distance.name}前`;
      return false;
    }
    return true;
  });
  resStr = resStr || '刚刚';
  return resStr;
};

export default dateUtil;
