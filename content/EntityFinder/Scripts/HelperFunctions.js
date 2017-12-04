


// obj will hold json string returned by the fullcontact api
var data = {
    'apiData': 'a',
    theName: 1,
    theObject: function parseTheJson(obj) {
        var myObj = obj;


        if (myObj.status == 200) {

            data.theName = myObj.status;
            document.getElementById('content').innerHTML = "<a class='btn btn-warning' id='modalButton' href='Home/Email'>View Info</a>";

        }
        else if (myObj.status == 404 || myObj.status == 202 || myObj.status == 422) {
            document.getElementById('content').innerHTML = "<h1>NO INFO FOUND</h1>";
            data.jsonObj = "";
        }

        return myObj;
    }
}



