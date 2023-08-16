document.getElementById("myForm");
document.addEventListener("submit", function (event) {
  event.preventDefault();
  let form = event.target;
  let formData = new FormData(form);
  var data = {};
  for (let x of formData.entries()) {
    data[x[0]] = x[1];
    console.log(x[0] + x[1]);
  }
  console.log(data, "data");
  localStorage.setItem("data", JSON.stringify(data));
});
var selectedRow = null;
function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
  }
}
function readFormData() {
  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["email"] = document.getElementById("email").value;
  formData["number"] = document.getElementById("phone").value;
  formData["website"] = document.getElementById("website").value;
  formData["contact"] = document.getElementById("contactname").value;
  formData["phone"] = document.getElementById("contactnumber").value;
  formData["another"] = document.getElementById("contactemail").value;
  formData["notes"] = document.getElementById("notes").value;
  formData["small"] = document.getElementById("business").value;
  formData["category"] = document.getElementById("select").value;
  formData["commission"] = document.getElementById("commission").value;
  formData["date"] = document.getElementById("mydate").value;
  formData["file"] = document.getElementById("myfile").value;
  formData["yes"] = document.getElementById("yes").value;
  formData["payment"] = document.getElementById("transaction").value;
  return formData;
}
// console.log("name");
function insertNewRecord(data) {
  var table = document.getElementById("datas").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.email;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.number;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.website;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.contact;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.phone;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.another;
  cell8 = newRow.insertCell(7);
  cell8.innerHTML = data.notes;
  cell9 = newRow.insertCell(8);
  cell9.innerHTML = data.small;
  cell10 = newRow.insertCell(9);
  cell10.innerHTML = data.category;
  cell11 = newRow.insertCell(10);
  cell11.innerHTML = data.commission;
  cell12 = newRow.insertCell(11);
  cell12.innerHTML = data.date;
  cell13 = newRow.insertCell(12);
  cell13.innerHTML = data.file;
  cell14 = newRow.insertCell(13);
  cell14.innerHTML = data.yes;
  cell15 = newRow.insertCell(14);
  cell15.innerHTML = data.payment;
  cell16 = newRow.insertCell(15);
  cell16.innerHTML = ` <button onClick="onEdit(this)">Edit</button>
                       <button onClick="onDelete(this)">Delete</button>`;
}
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("website").value = "";
  document.getElementById("contactname").value = "";
  document.getElementById("contactnumber").value = "";
  document.getElementById("contactemail").value = "";
  document.getElementById("notes").value = "";
  document.getElementById("business").value = "";
  document.getElementById("select").value = "";
  document.getElementById("commission").value = "";
  document.getElementById("mydate").value = "";
  document.getElementById("myfile").value = "";
  document.getElementById("yes").value = "";
  document.getElementById("transaction").value = "";
  selectedRow = null;
}
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("email").value = selectedRow.cells[1].innerHTML;
  document.getElementById("phone").value = selectedRow.cells[2].innerHTML;
  document.getElementById("website").value = selectedRow.cells[3].innerHTML;
  document.getElementById("contactname").value = selectedRow.cells[4].innerHTML;
  document.getElementById("contactnumber").value =selectedRow.cells[5].innerHTML;
  document.getElementById("contactemail").value =selectedRow.cells[6].innerHTML;
  document.getElementById("notes").value = selectedRow.cells[7].innerHTML;
  document.getElementById("business").value = selectedRow.cells[8].innerHTML;
  document.getElementById("select").value = selectedRow.cells[9].innerHTML;
  document.getElementById("commission").value = selectedRow.cells[10].innerHTML;
  document.getElementById("mydate").value = selectedRow.cells[11].innerHTML;
  document.getElementById("myfile").value = selectedRow.cells[12].innerHTML;
  document.getElementById("yes").value = selectedRow.cells[13].innerHTML;
  document.getElementById("transaction").value =
    selectedRow.cells[14].innerHTML;
}
function updateRecord(formData)
 {
  selectedRow.cells[0].innerHTML = formData.name;
  selectedRow.cells[1].innerHTML = formData.email;
  selectedRow.cells[2].innerHTML = formData.number;
  selectedRow.cells[3].innerHTML = formData.website;
  selectedRow.cells[4].innerHTML = formData.contact;
  selectedRow.cells[5].innerHTML = formData.phone;
  selectedRow.cells[6].innerHTML = formData.another;
  selectedRow.cells[7].innerHTML = formData.notes;
  selectedRow.cells[8].innerHTML = formData.small;
  selectedRow.cells[9].innerHTML = formData.category;
  selectedRow.cells[10].innerHTML = formData.commission;
  selectedRow.cells[11].innerHTML = formData.date;
  selectedRow.cells[12].innerHTML = formData.file;
  selectedRow.cells[13].innerHTML = formData.yes;
  selectedRow.cells[14].innerHTML = formData.payment;
}
function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("datas").deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if (document.getElementById("name").value == "") {
    isValid = false;
    document
      .getElementById("firstnameValidationError")
      .classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("firstnameValidationError")
        .classList.contains("hide")
    )
      document.getElementById("firstnameValidationError").classList.add("hide");
  }
  return isValid;
}
