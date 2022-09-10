var variable = "this is a variable";

var ptaData = [
  ['Compliant IMEI', 'Non Compliant IMEI','Status']
];

var oemData = [
  ['Master IMEI', 'Slave IMEI']
];


var container = document.getElementById('example');
var container2 = document.getElementById('example2');

var hot = new Handsontable(container, {
  data: ptaData,
  rowHeaders: true,
  colHeaders: ["Compliant IMEI", "Not Compliant IMEI","Status"],
  filters: true,
  dropdownMenu: true,
  licenseKey: 'non-commercial-and-evaluation'
});

var hot2 = new Handsontable(container2, {
  data: oemData,
  rowHeaders: true,
  colHeaders: ["Master IMEI", "Slave IMEI"],
  filters: true,
  dropdownMenu: true,
  licenseKey: 'non-commercial-and-evaluation'
});





function changeNumbers(id) {

  document.getElementById("variable").innerHTML = "Yes. HTML and JS files are linked"

}

function check(id) {
  console.log("PTA data", ptaData);
  console.log("OEM data", oemData);
}

function verify(){

  console.log("1st imei", ptaData[0][0]);
  console.log("2nd imei",  ptaData[0][1]);


  for(i=0;i<ptaData.length;i++){

    ptaData[i][2]="False"
    for (j=0;j<oemData.length;j++){

      if(Number(ptaData[i][0])==Number(oemData[j][0]) && Number(ptaData[i][1])==Number(oemData[j][1])){
        ptaData[i][2]="True"
        break;
      }

      if(Number(ptaData[i][1])==Number(oemData[j][0]) && Number(ptaData[i][0])==Number(oemData[j][1])){
        ptaData[i][2]="True"
        break;
      }
    }
  }
  console.log("updated PTA", ptaData);
  hot.render();

}