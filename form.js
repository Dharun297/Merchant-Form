function readFormData() {
  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["email"] = document.getElementById("email").value;
  formData["number"] = document.getElementById("phone").value;
  formData["website"] = document.getElementById("website").value;
  formData["ContactName"] = document.getElementById("contactname").value;
  formData["ContactPhone"] = document.getElementById("contactnumber").value;
  formData["Contactemail"] = document.getElementById("contactemail").value;
  formData["notes"] = document.getElementById("notes").value;
  formData["category"] = document.getElementById("select").value;
  formData["commission"] = document.getElementById("commission").value;
  formData["ActiveFrom"] = document.getElementById("mydate").value;
  formData["Logo"] = document.getElementById("myfile").value;
  formData["critical"] = account();
  formData["payment"] = payments();
  formData["small"] = beginner();
  localStorage.setItem("data", JSON.stringify(formData));
  console.log(formData);
 return formData;
}
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
  cell5.innerHTML = data.ContactName;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.ContactPhone;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.Contactemail;
  cell8 = newRow.insertCell(7);
  cell8.innerHTML = data.notes;
  cell9 = newRow.insertCell(8);
  cell9.innerHTML = data.small;
  cell10 = newRow.insertCell(9);
  cell10.innerHTML = data.category;
  cell11 = newRow.insertCell(10);
  cell11.innerHTML = data.commission;
  cell12 = newRow.insertCell(11);
  cell12.innerHTML = data.ActiveFrom;
  cell13 = newRow.insertCell(12);
  cell13.innerHTML = data.Logo;
  cell14 = newRow.insertCell(13);
  cell14.innerHTML = data.critical;
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
  document.getElementById("transaction").value = selectedRow.cells[14].innerHTML;
}
function updateRecord(formData)
 {
  selectedRow.cells[0].innerHTML = formData.name;
  selectedRow.cells[1].innerHTML = formData.email;
  selectedRow.cells[2].innerHTML = formData.number;
  selectedRow.cells[3].innerHTML = formData.website;
  selectedRow.cells[4].innerHTML = formData.ContactName;
  selectedRow.cells[5].innerHTML = formData.ContactPhone;
  selectedRow.cells[6].innerHTML = formData.Contactemail;
  selectedRow.cells[7].innerHTML = formData.notes;
  selectedRow.cells[8].innerHTML = formData.small;
  selectedRow.cells[9].innerHTML = formData.category;
  selectedRow.cells[10].innerHTML = formData.commission;
  selectedRow.cells[11].innerHTML = formData.ActiveFrom;
  selectedRow.cells[12].innerHTML = formData.Logo;
  selectedRow.cells[13].innerHTML = formData.critical;
  selectedRow.cells[14].innerHTML = formData.payment;
}
function onDelete(tabledata) {
  if (confirm("Are you sure to delete this record ?")) {
    row = tabledata.parentElement.parentElement;
    document.getElementById("datas").deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if (document.getElementById("name").value == "") {
    isValid = false;
    document.getElementById("firstnameValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      document.getElementById("firstnameValidationError").classList.contains("hide")
    )
      document.getElementById("firstnameValidationError").classList.add("hide");
  }
  return isValid;
 }

function beginner() {
  var radio = document.getElementsByName("beginner");
  var selectedType = "";
  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked) selectedType = radio[i].value;
  }
  return selectedType;
}
function payments() {
  var paymentMethods = []; 
  var paymentCheckboxes = document.querySelectorAll('input[name="payment"]:checked');
  paymentCheckboxes.forEach(function (checkbox) {
    paymentMethods.push(checkbox.value); // Add selected payment methods to the array
  });

  paymentCheckboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });

  return paymentMethods;
}

function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) {
      insertNewRecord(formData);
    } else {
      updateRecord(formData);
    }
  }
  resetForm();
}
    function account() {
      let radio = document.getElementsByName("account");
      let selectedType = "";
      for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) selectedType = radio[i].value;
      }
      return selectedType;
    }
  selectedRow = null;
    
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");

  // form.addEventListener("onSubmit", (event) => {
    // event.preventDefault();

    const formData = new FormData(form);

    // const formDataObject = {};
    //   formData.forEach(function (value, key) {
    //     formDataObject[key] = value;
    //   });

    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      const parsedData = JSON.parse(storedFormData);
    
      // Populate form elements with parsed data
      for (const key in parsedData) {
        const input = document.getElementById(key);
        if (input) {
          input.value = parsedData[key];
        }
      }
    }
    

    const formDataObject = {};
    formData.forEach((value, key) => {
      if (formDataObject[key]) {
        if (Array.isArray(formDataObject[key])) {
          formDataObject[key].push(value);
        } else {
          formDataObject[key] = [formDataObject[key], value];
        }
      } else {
        formDataObject[key] = value;
      }
    });

       // Retrieve existing stored data or initialize an empty array
      //  let storedData = JSON.parse(localStorage.getItem("formData")) || [];

       // Add the current form data to the stored data array
      //  storedData.push(formDataObject);
   
       // Store the updated data in localStorage
      //  localStorage.setItem("formData", JSON.stringify(storedData));
       localStorage.setItem("formData", JSON.stringify(formDataObject));

   
       console.log("Form Data:", formDataObject);
   
    });
   
     // Load and populate stored form data on page load
     const storedFormData = localStorage.getItem("formData");
     if (storedFormData) {
      //  const parsedData = JSON.parse(storedFormData);
       
      //  console.log("Stored Form Data:", parsedData);
     }

  //---------------------------------------- filter the datas --------------------------------------------------->
  // function getSelectedFilterType() {
  //   var filterRadios = document.getElementsByName("start");
  
  //   for (var i = 0; i < filterRadios.length; i++) {
  //     if (filterRadios[i].checked) {
  //       return filterRadios[i].value;
  //     }
  //   }
  // }
  function filterBusinessCategory() {
    var select = document.getElementById('businessCategoryFilter').value; // Get the selected filter value
    var table = document.getElementById('datas');
    var rows = table.getElementsByTagName('tr');

    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        var businessCategoryCell = row.cells[8]; // Assuming the "Business Category" value is in cell index 8
        var businessCategory = businessCategoryCell.textContent.trim();

        if (select === 'all' || businessCategory === select) {
            row.style.display = ''; // Display rows that match the filter or 'all'
        } else {
            row.style.display = 'none'; // Hide rows that don't match the filter
        }
    }
}


  function clearFilter() {
    var table = document.getElementById("datas");
    for (var i = 1; i < table.rows.length; i++) {
      table.rows[i].style.display = ""; 
    }
  }
  function filterCategory() {
    var select = document.getElementById('categoryFilter').value; // Get the selected filter value
    var table = document.getElementById('datas');

    for (var i = 1; i < table.rows.length; i++) {
        var row = table.rows[i];
        var category = row.cells[9].innerHTML.trim(); // Assuming the "Category" value is in cell index 9

        if (select === 'all' || category.includes(select)) {
            row.style.display = ''; // Display rows that match the filter or 'all'
        } else {
            row.style.display = 'none'; // Hide rows that don't match the filter
        }
    }
}

  function filterSelect() {
    var select = document.getElementById('criticalFilter').value; // Get the selected filter value
    var table = document.getElementById('datas');

    for (var i = 1; i < table.rows.length; i++) {
        var row = table.rows[i];
        var criticalAccountValue = row.cells[13].innerHTML.trim(); // Assuming the "Critical Account" value is in cell index 13

        if (select === 'all' || criticalAccountValue === select) {
            row.style.display = ''; // Display rows that match the filter or 'all'
        } else {
            row.style.display = 'none'; // Hide rows that don't match the filter
        }
    }
}


  // critical account
function filteraccount() {
  var filteraccount = getSelectedFilterAccount();
  // console.log(filteraccount)
  //   // cellno=8;
  filterData(filteraccount, 13);
}
function filterPayment() {
  var select = document.getElementById('transactions').value; // Get the selected filter value
  var table = document.getElementById('datas');

  for (var i = 1; i < table.rows.length; i++) {
      var row = table.rows[i];
      var paymentOptions = row.cells[14].innerHTML.trim(); // Assuming the "Payment Options" value is in cell index 14

      if (select === 'all' || paymentOptions.includes(select)) {
          row.style.display = ''; // Display rows that match the filter or 'all'
      } else {
          row.style.display = 'none'; // Hide rows that don't match the filter
      }
  }
}
