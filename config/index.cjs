/* eslint-disable */
const USER_CONFIG = {
  APP_ID: 'wx871b3217acb81304',
  APP_SECRET: '167c0e882b3fcc48d5b8db2eb88f23a6',
  PROVINCE: '浙江',
  CITY: '绍兴',
SWITCH: {
    /** 每日天气 */
    weather: true,

    /** 生日消息和节日消息 */
    birthdayMessage: true,
  },
  
  USERS: [
    {
      // 想要发送的人的名字
      name: '荔荔',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojaTg6i-G6yVw22x11LvpY3la_K4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'RybNFiBxzQ65hruJZU2pTveqVEmyZb2IhUXTPxl22Ng',
      province: '浙江',
      city: '绍兴',
      openUrl: 'https://baidu.com',
      
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '荔荔', year: '2002', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-08-15' },
      ],
      
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'RybNFiBxzQ65hruJZU2pTveqVEmyZb2IhUXTPxl22Ng',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojaTg6i-G6yVw22x11LvpY3la_K4',
    }
  ],

}

module.exports = USER_CONFIG
