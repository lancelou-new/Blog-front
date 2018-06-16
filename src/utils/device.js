// 设备判断，主要是移动端

const device = {};

const userAgent = window && window.navigator ? window.navigator.userAgent.toLowerCase() : '';

const find = needle => userAgent.indexOf(needle) !== -1;

device.windows = () => find('windows');

device.android = () => !device.windows() && find('android');

device.androidPhone = () => (device.android() && find('mobile'));

device.iphone = () => !device.windows() && find('iphone');

device.ipod = () => find('ipod');

device.windowsPhone = () => device.windows() && find('phone');

device.mobile = () => (
  device.androidPhone() ||
  device.iphone() ||
  device.ipod() ||
  device.windowsPhone()
);

export default device;
