

var WhitelistManager = window.WhitelistManager || {};

(function scopeWrapper($) {
    

    /*
     *  Event Handlers
     */

    $(function onDocReady() {
        $('#addEntryForm').submit(handleAddEntry);
        $('#getCityFromWorld').on("submit", handleGetWhitelist);
    });
    
    function handleAddEntry(event) {
       event.preventDefault();
       var url = location.href;
        var customer = getUrlParameter("customer")
        var entry = getUrlParameter("addwlentry")
        /*var entry ="google.com"*/
        console.log ( "Customer id :" + customer )
        console.log ( " entry :" + entry )
    }

    function handleGetWhitelist(event) {
        event.preventDefault();
        console.log("inside the hanlde")
         document.getElementById('demo').innerHTML="event.data.value";
     }
}(jQuery));
   