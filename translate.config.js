// // install `googleapis` & `fs`

// const { google: e } = require('googleapis'),
//   fs = require('fs')
// ;(async () => {
//   let s = {
//       email: '',
//       key: '',
//       scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//       version: 'v4',
//       spreadsheetId: '',
//       ranges: { common: 'common!B:D', messages: 'messages!B:D' }, // custom sheet name & collumn range
//     },
//     a = async (e) =>
//       await t.spreadsheets.values.get({
//         spreadsheetId: s.spreadsheetId,
//         auth: i,
//         range: e,
//       }),
//     i = new e.auth.JWT({ email: s.email, key: s.key, scopes: s.scopes }),
//     t = e.sheets(s.version)
//   await Promise.all(
//     Object.keys(s.ranges).map(async (e) => {
//       let i = {},
//         t = {},
//         l = await a(s.ranges[e])
//       l.data.values.shift()
//       l.data.values.map((e) => {
//         ;(i = { ...i, [e[0]]: e[1] || e[0] }),
//           (t = { ...t, [e[0]]: e[2] || e[1] || e[0] })
//       }),
//         fs.writeFileSync(`public/locales/ja/${e}.json`, JSON.stringify(t)),
//         fs.writeFileSync(`public/locales/en/${e}.json`, JSON.stringify(i))
//     })
//   )
// })()

