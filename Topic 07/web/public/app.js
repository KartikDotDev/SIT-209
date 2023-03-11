$('#navbar').load('navbar.html');
let devices = JSON.parse(localStorage.getItem('devices')) || [];
const API_URL = 'http://localhost:5000/api';
const MQTT_URL = 'http://localhost:5001/send-command';

// DOM manipulation using jQuery

$.get(`${API_URL}/devices`)
  .then(response => {
    response.forEach(device => {
      $('#devices tbody').append(`
      <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
      </tr>`
      );
    });
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });


// On-Click function using jQuery
$('#add-device').on('click', () => {
  const name = $('#name').val();
  const user = $('#user').val();
  const sensorData = [];

  const body = {
    name,
    user,
    sensorData
  };

  $.post(`${API_URL}/devices`, body)
    .then(response => {
      location.href = '/';
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
});


// Function for adding a new Device
function addNew() {
  location.href = "register-device.html";

}

// Function for loading send-command.html
$('#send-command').on('click', function () {
  const deviceId = $('#deviceId').val();
  const command = $('#command').val();
  $.post(MQTT_URL, { deviceId, command })
    .then(response => {
      location.href = '/';
    })
});

// Function for deleting all the Devices.
function deleteAll() {


  // MAKING THIS FUNCTION OBSOLETE BECAUSE IT WAS AN EXTRA ADDITION DUE TO MY BOREDOM.

  // localStorage.clear();
  // devices = [];
  // localStorage.setItem('devices', JSON.stringify(devices));
  // location.href = "device-list.html";
}

// Function for deleting one of the elements from the table
function deleteLastOne() {

  // MAKING THIS FUNCTION OBSOLETE BECAUSE IT WAS AN EXTRA ADDITION DUE TO MY BOREDOM.

  // devices.pop();
  // localStorage.setItem('devices', devices);
  // location.href = "device-list.html";
}