module.exports.config = {
  name: "বট",
  version: "1.0.0",
  permission: 0,
  credits: "ryuko",
  prefix: true,
  description: "goibot",
  category: "noprefix",
  usages: "admin",
  cooldowns: 5
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);
  var tl = ["আমি এখন নাঈম বস এ রসাথে বিজি আছি", "জ্বি বলেন আমি শুনছি।", "I love you baby meye hole chipay aso", "Love you 3000-😍💋💝", "ji bolen ki korte pari ami apnar jonno?","আমাকে না ডেকে আমার বস নাঈমকে একটা জি এফ দেন", "Ato daktasen kn bujhlam na 😡", "jan bal falaba,🙂","ask amr mon vlo nei dakben na🙂", "Hmm jan ummah😘😘","jang hanga korba 🙂🖤","iss ato dako keno lojja lage to 🫦🙈","suna tomare amar valo lage,🙈😽","জ্বি তুমি কি আমাকে ডেকেছো 😇🖤🥀"," আরেকবার ডাক দিলে তোর খবর আছে কিন্তু 🤬","কিরে তুই সিঙ্গেল? কষ্ট পাইছ না আমিও সিঙ্গেল 🥺","ময়ে ময়ে 🤪"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
  if (event.body.indexOf("বট") == 0 || (event.body.indexOf("বট") == 0)) {
    var msg = {
      body: `╭────────────❍\n╰➤ 👤 𝐃𝐞𝐚𝐫 『 ${name} 』,\n╰➤ 🗣️${rand}\n╰─────────────────➤`
    }
    return api.sendMessage(msg, threadID, messageID);
  };
}
module.exports.run = function({ api, event, client, __GLOBAL }) { }
