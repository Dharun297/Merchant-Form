function onsubmit(){
    var process = {};
    
    process.name= document.getElementById("name").value;
    process.mail = document.getElementById("mail").value;
    process.mobilenumber = document.getElementById("mobilenumber").value;
    process.website = document.getElementById("website").value;
    process.contactname = document.getElementById("contactname").value;
    process.contactnumber = document.getElementById("contactnumber").value;
    process.contactemail = document.getElementById("contact email").value;
    process.notes = document.getElementById("notes").value;
    process.type = role();
    process.business = document.getElementById("business").value;
    process.products = document.getElementById("products").value;
    process.critical = document.getElementById("critical").value;
    process.mydate = document.getElementById("myDate").value;
    process.myfile = document.getElementById("myfile").value;
    process.new = document.getElementById("new").value;
    process.payment = callpayment();


var table = document.getElementById("input Data");
var row = table.insertRow(table.rows.length);
var cella =row.insertcell(0);
var cellb =row.insertcell(1);
var cellc =row.insertcell(2);
var celld =row.insertcell(3);
var celle =row.insertcell(4);
var cellf =row.insertcell(5);
var cellg =row.insertcell(6);
var cellh =row.insertcell(7);
var celli =row.insertcell(8);
var cellj =row.insertcell(9);
var cellk =row.insertcell(10);
var celll =row.insertcell(11);
var cellm =row.insertcell(12);
var cellm =row.insertcell(13);
///

///
cella.innerHTML = process.name;
cellb.innerHTML = process.mail;
cellc.innerHTML = process.mobilenumber;
celld.innerHTML = process.website;
celle.innerHTML = process.contactname;
cellf.innerHTML = process.contactnumber;
cellg.innerHTML = process.contactemail;
cellh.innerHTML = process.notes;
celli.innerHTML = process.type;
cellj.innerHTML = process.business;
cellk.innerHTML = process.products;
celll.innerHTML = process.critical;
cellm.innerHTML = process.mydate;
celln.innerHTML = process.myfile;
cello.innerHTML = process.mail;





}