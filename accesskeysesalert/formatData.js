module.exports.formatData = function(keyData) {

  var sendMail = require('./sendMail');
  
  var htmlTable1 = '', //blank variable to append to 
  htmlHeader = 'Access Key Age - Alert', //header of the email 
  htmlText = 'The following users have been highlighted as their key ages exceed the threshold for this account.' //text above the table
  
  
  //small function to return td in seperate colourss
  var bgcolor = (keyAge, active) => {
    
    if (active === 'Active') {
        if(keyAge > 70 && keyAge < 80){ //these could be parameterized 
          return '#FFC125' //return yellow
        }else if (keyAge > 79 && keyAge < 90){ //these could be parameterized
          return '#F87531' //return orange
        } else { return '#CD2626' //return red 
      }
    } else return 'grey'
  }
  
  for (var key in keyData.Items) {
      let keyID = keyData.Items[key].KeyID,
       userName = keyData.Items[key].UserName,
       keyAge = keyData.Items[key].KeyAge,
       active = keyData.Items[key].Active
  
    htmlTable1 += 
    `<tr>
      <td>${keyID}</td><td>${userName}</td>
      <td bgcolor="${bgcolor(keyAge, active)}">${keyAge} days ${active}
      </td>
    </tr>
    `
  
    }
  
    //building the html 

  var htmlBody =
  `<style type="text/css">
  .tftable {font-size:12px;color:#333333;width:100%;border-width: 1px;padding-top: 20px;border-color: #ebab3a;border-collapse: collapse;}
  .tftable th {font-size:12px;background-color:#e6983b;border-width: 1px;padding: 8px;border-style: solid;border-color: #ebab3a;text-align:centre;}
  .tftable tr {background-color:#ffffff;text-align:center}
  .tftable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #ebab3a; text-align:center; margin: 20px 0; }
  </style>
  <header>
    <h1></h1>
  </header>
  <h3 class="awsdocs-section-header ng-binding ng-scope" ng-if="section.title">${htmlHeader}&nbsp;</h3>
  <p>${htmlText}</p>
  <p></p>
  <table border="1" style="border-collapse: collapse; width: 100%;">
  <tbody>
  <body>
    <div>
      <table class="tftable" border="1" paddingTop = "50px">
        <tr><th>Access Key ID</th><th>Username</th><th>Access Key Age</th></tr>
        ${htmlTable1}
        </table>
    </div>
  </body>
  `
  
  sendMail.sendMail(htmlBody)
  //push the htmlBody as a payload to the send mail
  }