module.exports.formatData = function(keyData) {

var sendMail = require('./sendMail');

var htmlTable1 = '',
htmlTable2 = '', //in place for future tables age 70 -80
htmlTable3 = '', //in place for future tables age 80 -90
htmlHeader = 'Access Key Ages',
htmlText = 'Access Keys over 70 days'


for (var key in keyData.Items) {

      let keyID = keyData.Items[key].KeyID,
     userName = keyData.Items[key].UserName,
     keyAge = keyData.Items[key].KeyAge

  htmlTable1 += 
  `<tr>
    <td>${keyID}</td><td>${userName}</td><td>${keyAge} days</td>
  </tr>
  `

  }

var htmlBody =
`<style type="text/css">
.tftable {font-size:12px;color:#333333;width:100%;border-width: 1px;padding-top: 20px;border-color: #ebab3a;border-collapse: collapse;}
.tftable th {font-size:12px;background-color:#e6983b;border-width: 1px;padding: 8px;border-style: solid;border-color: #ebab3a;text-align:centre;}
.tftable tr {background-color:#ffffff;text-align:center}
.tftable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #ebab3a; text-align:center; margin: 20px 0; }
</style>

<header>
  <h1>${htmlHeader}</h1>
</header>

<body>
 <div>
    <div>
      <h2>${htmlText}</h2>
    </div>
    <div>
      <table class="tftable" border="1">
        <tr><th>Access Key ID</th><th>Username</th><th>Access Key Age</th></tr>
        ${htmlTable1}
        </table>
    </div>
  </div>
</body>
`

sendMail.sendMail(htmlBody)

}