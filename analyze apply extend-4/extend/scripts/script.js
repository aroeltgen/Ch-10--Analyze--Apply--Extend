/*
    Student Name: Alexander Roeltgen
    File Name: script.js
    Date: 4/16
*/

$(document).ready(function() {
    $("#hideBtn").click(function() {
        $("article p").hide(); // Hides all <p> elements inside <article>
    });
    $("#showBtn").click(function() {
        $("article p").show(); // Shows all <p> elements inside <article>
    });
});
