$(document).ready(function() {

     // Initialize Firebase
    var config = {
    apiKey: "AIzaSyDvWRkxI7ovzrRHuW7xn61HkYkpuzuu85Y",
    authDomain: "employeepay-9e72f.firebaseapp.com",
    databaseURL: "https://employeepay-9e72f.firebaseio.com",
    projectId: "employeepay-9e72f",
    storageBucket: "employeepay-9e72f.appspot.com",
    messagingSenderId: "672755591527"
    };
    firebase.initializeApp(config);

    var createRow = function() {

        var tRow = $('<tr>');

        var employeeTd = $('<td>').text();
        var roleTd = $('<td>').text();
        var startDateTd = $('<td>').text();
        var monthlyRateTd = $('<td>').text();
        var totalTd = $('<td>').text();

        tRow.append(employeeTd, roleTd, startDateTd, monthlyRateTd, totalTd);
    }

    $('#submit').on('click', function(event) {
        event.preventDefault();
    
        name = $('#employeeName').val().trim();
        role = $('#role').val().trim();
        startDate = $('#startDate').val().trim();
        rate = $('#rate').val().trim();
        billed = $('#billed').val().trim();

        database.ref().set({
            name: name,
            role: role,
            startDate: startDate,
            billed: billed
        });

});