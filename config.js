const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_13_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA0NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxLFxuICAgICAgICA2NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQwLFxuICAgICAgICA4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTksXG4gICAgICAgIDMzLFxuICAgICAgICAyOCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA2NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NixcbiAgICAgICAgMixcbiAgICAgICAgODYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA0OSxcbiAgICAgICAgNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM1LFxuICAgICAgICA2NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNixcbiAgICAgICAgMTE5LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDkzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDEyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDU1LFxuICAgICAgICA2LFxuICAgICAgICAzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MixcbiAgICAgICAgMzcsXG4gICAgICAgIDM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzksXG4gICAgICAgIDcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0MixcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDc0LFxuICAgICAgICA1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZkRER2p0MnRFbFlueXlzOHNqeFFjL0ovb0ZodWlRZUhKYU8rMDhTUGVyMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTUFJeXZ6X1VUZ0NzNGFiNm1mc3k0Z1wiLFxuICBcInBob25lSWRcIjogXCJhZDc3MGNkNC03ZTJlLTQwYTgtOTJkMS01MWY2Y2ZmYjM2NDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAxLFxuICAgICAgMTAsXG4gICAgICA1MCxcbiAgICAgIDQzLFxuICAgICAgMzUsXG4gICAgICA1NyxcbiAgICAgIDIxNixcbiAgICAgIDcsXG4gICAgICAxOTIsXG4gICAgICAxMzYsXG4gICAgICAxNTMsXG4gICAgICA4NyxcbiAgICAgIDIwOCxcbiAgICAgIDczLFxuICAgICAgODEsXG4gICAgICA4MCxcbiAgICAgIDE2MCxcbiAgICAgIDExMSxcbiAgICAgIDY0LFxuICAgICAgMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIxLFxuICAgICAgMjEyLFxuICAgICAgNjEsXG4gICAgICAxMDEsXG4gICAgICA1NSxcbiAgICAgIDI0MSxcbiAgICAgIDE3NCxcbiAgICAgIDk4LFxuICAgICAgMjA2LFxuICAgICAgNzMsXG4gICAgICA5NyxcbiAgICAgIDIzMSxcbiAgICAgIDE1OCxcbiAgICAgIDk0LFxuICAgICAgMjM1LFxuICAgICAgMTk4LFxuICAgICAgNzQsXG4gICAgICAyMjEsXG4gICAgICAxOTAsXG4gICAgICAxNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKbi96TjBERUx1dDFjTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9LR2l3RGcybm5vV3BRTzdkanA5MTFFRFcxS0hRRmliNlM1dU1Ib2s1emM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVWRyYi9ZZGFoYlVXQWpCN3hLZHlXNGRnRk5hbUthRThPWmlGRnp2UTBFaW1nU3Rjdkg4R09pdmdybDBsRDQ0MitwS2d2NFdBL3dycWo0eUIxcStCQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVmdtUmEzNHBha0wycWV2Z1plVW44Y0ZIN1hzNkRla2R3bGFVZFplWlRQSEpuYlhQdWVsYWp5OE9jOFRxMUVsemZPWVo3MnZzYWwxVFdDVGZnREZUZ2c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2MDk0NTk3MDo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTkwMDg2MDYwNzI5NDc6NTBAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2MDk0NTk3MDo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTI1MjAzODNcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
