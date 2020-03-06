/* eslint-disable */
/**
 * 微信授权获取code
 * @param {string} url 授权后回跳的地址
 * @param {string} appid
 */
function wxOauth2(url, appid) {
  const link = encodeURIComponent(url);
  const oauthUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${link}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`;
  return oauthUrl;
}

/**
 * 更新微信分享信息
 * @param {Object} config
 */
function updateWxShare(config = {}) {
  const mergedConfig = Object.assign(
    {
      title: '精锐教育|佳学慧',
      imgUrl: 'http://bestmathoss.oss-cn-beijing.aliyuncs.com/share/icon.png',
      link: location.href
    },
    config
  );
  wx.ready(() => {
    wx.updateTimelineShareData({ ...mergedConfig });
    wx.updateAppMessageShareData({
      ...mergedConfig,
      desc: '4~12岁孩子的高端在线数学学习平台，学霸数学在家学'
    });
  });
}
/**
 * 调用微信支付
 * @param {Object} data
 * @param {Function} cb 支付成功后的回调
 */
function wxPayInvoker(data, cb) {
  function onBridgeReady() {
    /* eslint-disable */
    WeixinJSBridge.invoke(
      'getBrandWCPayRequest',
      {
        appId: data.appid, //公众号名称，由商户传入
        timeStamp: data.timestamp + '', //时间戳，自1970年以来的秒数
        nonceStr: data.nonce_str, //随机串
        package: data.prepay_id,
        signType: 'MD5', //微信签名方式：
        paySign: data.sign //微信签名
      },
      function(res) {
        if (res.err_msg == 'get_brand_wcpay_request:ok') {
          cb();
        }
      }
    );
  }
  if (typeof WeixinJSBridge == 'undefined') {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
      document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
  } else {
    onBridgeReady();
  }
}

export { wxOauth2, updateWxShare, wxPayInvoker };
