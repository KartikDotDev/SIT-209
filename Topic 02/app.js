let devices = JSON.parse(localStorage.getItem('devices')) || [];

// DOM manipulation using jQuery
function printTable() {
  devices.forEach(function (device) {
    $('#devices tbody').append(`
    <tr>
    <td>${device.user}</td>
    <td>${device.name}</td>
    </tr>`
    );
  });
}

// calling printTable() function to print the contents of the table.
printTable()

// On-Click function using jQuery
$('#add-device').on('click', function () {
  const user = $('#user').val();
  const name = $('#name').val();
  devices.push({ user: user, name: name });
  localStorage.setItem('devices', JSON.stringify(devices));
  location.href = "devices-list.html";
});


// Function for adding a new Device
function addNew() { location.href = "register-device.html"; }


// Function for deleting all the Devices.
function deleteAll() {
  localStorage.clear();
  devices=[];
  localStorage.setItem('devices', JSON.stringify(devices));
  location.href = "devices-list.html";
}

// Function for deleting one of the elements from the table
function deleteLastOne() {
  devices.pop();
  localStorage.setItem('devices', devices);
  location.href="devices-list.html";
}