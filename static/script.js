$(document).ready(function() {                                                                                                                                         
   console.log("Hello from ShowMe!");
   Galaxy.listenTo(Galaxy.currHistoryPanel.model, {"change": function(event) {
     // if "change" event is triggered in cases other from when item processing
     // has been finished investigating the event's object can help to set up an appropriate condition     
     // console.log(event);
     
     var lastItemId = Galaxy.currHistoryPanel.model.contents.models[0].id;
     document.querySelector('#' + lastItemId + ' .display-btn').click();
   }});
});

