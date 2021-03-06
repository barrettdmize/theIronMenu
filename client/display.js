var display = {
  init: function (){
    display.styling();
  },
  events: function () {
    // body...
  },
  styling: function (){
    display.getAllMenuItems();
  },
  getAllMenuItems: function () {
    $(".menu").html("");
      $.ajax({
          type: 'GET',
          url: '/menu',
          success: function(data) {
            menuPage.currentDataSet = JSON.parse(data);
            display.putMenuItems();
          },
          failure: function(data) {
            console.log("FAILURE: ", data);
          }
        });
  },
  putMenuItems: function () {
    var itemHTML;
    _.each(menuPage.currentDataSet, function(currVal, idx, arr){
        itemHTML=menuPage.menuItemTemplate(currVal);
        $('.menu').append(itemHTML);
      });
  },
};
