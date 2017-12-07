



function displayData(id, object) {
    if (!objectHelper.clickedAlready) {
        objectHelper.clickedAlready = true;
        if (chooser.emailChosen) {
            document.getElementById(id).innerHTML += htmlFormer(object.contactInfo.fullName, "fullname", "a");
            for (var i = 0; i < object.organizations.length; i++){
                document.getElementById(id).innerHTML += htmlFormer("Employment " + (i+1) + ": " + object.organizations[i].name, "org", "a");
                document.getElementById(id).innerHTML += htmlFormer("Employment Title " + (i + 1) + ": " + object.organizations[i].title, "org1", "a");
                document.getElementById(id).innerHTML += htmlFormer("current : " + object.organizations[i].current, "org1", "a");
            }
            document.getElementById(id).innerHTML += htmlFormer("Location: " + object.demographics.locationDeduced.deducedLocation, "location", "a");
            document.getElementById(id).innerHTML += htmlFormer("Gender: " + object.demographics.gender, "gender", "a");
            document.getElementById(id).innerHTML += htmlFormer("Social Profiles: ", "social", "a");
            for (var i = 0; i < object.socialProfiles.length; i++){
                document.getElementById(id).innerHTML += buttonFormer(object.socialProfiles[i].typeName, object.socialProfiles[i].url, "row");
                if (object.socialProfiles[i].username != undefined) {
                    document.getElementById(id).innerHTML += htmlFormer("UserName: " + object.socialProfiles[i].username, "username", "row");
                }
                if (object.socialProfiles[i].followers != undefined) {
                    document.getElementById(id).innerHTML += htmlFormer("Followers: " + object.socialProfiles[i].followers, "follow", "row");
                }
                if (object.socialProfiles[i].bio != undefined){
                    document.getElementById(id).innerHTML += htmlFormer("Bio: " + object.socialProfiles[i].bio, "bio", "row");
                }
            }
        }
        else if (chooser.companyChosen) {
            document.getElementById(id).innerHTML += htmlFormer(object.organization.name, "fullname", "a");
            document.getElementById(id).innerHTML += htmlFormer("Approximate Employee Count: " + object.organization.approxEmployees, "approxemp", "a");
            document.getElementById(id).innerHTML += htmlFormer("Founded: " + object.organization.founded, "founded", "a");

            document.getElementById(id).innerHTML += htmlFormer("Address: " + object.organization.contactInfo.addresses[0].addressLine1 + " " + object.organization.contactInfo.addresses[0].addressLine2, "address", "a");
            document.getElementById(id).innerHTML += htmlFormer(object.organization.contactInfo.addresses[0].locality + ", " + object.organization.contactInfo.addresses[0].region.name + ", " + object.organization.contactInfo.addresses[0].country.code + ", " + object.organization.contactInfo.addresses[0].postalCode, "address", "a");
            document.getElementById(id).innerHTML += htmlFormer("Phone: " + object.organization.contactInfo.phoneNumbers[0].number, "number", "a");
            document.getElementById(id).innerHTML += htmlFormer("Overview: ", "over", "a");
            document.getElementById(id).innerHTML += htmlFormer(object.organization.overview, "overview", "well");
            document.getElementById(id).innerHTML += buttonFormerComp(object.website, object.website, "compButton");
            document.getElementById(id).innerHTML += htmlFormer("Rank According To Traffic: ", "rankTraffic", "a");
            for (var i = 0; i < object.traffic.ranking.length; i++) {
                document.getElementById(id).innerHTML += htmlFormer(object.traffic.ranking[i].rank + " " + object.traffic.ranking[i].locale, "rank", "a");
            }
        }
    }
}
 



function htmlFormer(data, id, className) {
    return "<div id='" + id + "' class='" + className + "'>" + data + "</div>";
}

function buttonFormer(buttonName, buttonHref, id) {
    var buttonString = "<a class='btn btn-lg' id='" + id + "' href='" + buttonHref + "'>" + buttonName + " Profile" + "</a>";
    return buttonString;
}

function buttonFormerComp(buttonName, buttonHref, id) {
    var buttonString = "<a class='btn btn-lg' id='" + id + "' href='" + buttonHref + "'>" + buttonName + "</a>";
    return buttonString;
}


function pressButton(option) {

    var responseEmail = "<input type='text' class='form-control' placeholder='Email Address' id='email'>";
    var responsePhone = "<input type='text' class='form-control' placeholder='Phone number' id='phone'>";
    var responseCompany = "<input type='text' class='form-control' placeholder='Company URL' id='comp'>";
    var response = "";

    if (option == 0) {
        response = responseEmail;
        chooser.companyChosen = false;
        chooser.phoneChosen = false;
        chooser.emailChosen = true;
    }
    else if (option == 1) {
        response = responsePhone;
        chooser.companyChosen = false;
        chooser.phoneChosen = true;
        chooser.emailChosen = false;
    }
    else if (option == 2) {
        response = responseCompany;
        chooser.companyChosen = true;
        chooser.phoneChosen = false;
        chooser.emailChosen = false;
    }

    $('#textInput').html(response);
}


function submitForm() {
    document.getElementById('content').innerHTML = "";
    if (chooser.emailChosen == true) {
        setupEmailRequest();
    }
    else if (chooser.companyChosen == true) {
        setupCompanyRequest();
    }
    else if (chooser.phoneChosen == true) {
        setupPhoneRequest();
    }
}

var objectHelper = {
    theObj: "",
    clickedAlready: false,
}



function parseJson(obj) {
    objectHelper.theObj = "";
    objectHelper.clickedAlready = false;
    var myObj = obj;

    
    if (myObj.status == 200) {
        objectHelper.theObj = obj;
    }
    else if (myObj.status == 404 || myObj.status == 202 || myObj.status == 422) {
        document.getElementById('content').innerHTML = "<h1>NO INFO FOUND</h1>";
        data.jsonObj = "";
    }
}


function setupCompanyRequest() {
    $.fullcontact.companyLookup(apiHelper.apiKey, document.getElementById('comp').value, function (obj) { parseJson(obj) });
}

function setupEmailRequest() {
    $.fullcontact.emailLookup(apiHelper.apiKey, document.getElementById('email').value, function (obj) { parseJson(obj) });
}

function setupPhoneRequest() {
    $.fullcontact.phoneLookup(apiHelper.apiKey, document.getElementById('phone').value, function (obj) { parsePhoneJson(obj) });
}


function move() {
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 25);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}



var chooser = {
    companyChosen: false,
    emailChosen: false,
    phoneChose: false,

}