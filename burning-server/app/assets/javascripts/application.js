// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let rowCount = 0;

  const createTable = function() {

    mytable = $('<table></table>')

    for (var i = 0; i <= rows; i++) {
      if (i === 0) {
        $(`<th>&nbsp;</td>`).appendTo(mytable);
      } else {
        $(`<th>${ i }</td>`).appendTo(mytable);
      }
    }

    for (var i = 0; i < cols; i++) {
      var row = $('<tr></tr>').appendTo(mytable);

      for (var j = 0; j < rows; j++) {
        if (j === 0) {
          $('<td class="alphabet"></td>').text(`${ alphabet[`${ rowCount }`] }`).appendTo(row);
          rowCount = rowCount + 1;
        }
        $('<td></td>').text("seat").appendTo(row);
    
      }
    }
    $('#plane_table').append(mytable);
  }
  createTable();
});
