const isPord = process.env.NODE_ENV === 'production';

export const API_TIMEOUT = 6000;

export const API_URL = process.env.API_URL || 'http://develop.bestmath.cn';

export const OSS_IMG_URL = 'https://img.bestmath.cn/';

export const OSS_VIDEO_URL =
  'https://bestmathvod.oss-cn-beijing.aliyuncs.com/VOD';

export const APP_ID = isPord ? 'wx6fec0622e7fd5858' : 'wx818afd13a8bc12f9';
