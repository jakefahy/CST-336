function printContact(contact) {
    var contactList = document.getElementById("contact-list");
    
    var contactListItem = document.createElement("li");
    contactListItem.setAttribute("class", "list-group-item");
    contactList.appendChild(contactListItem);
    
    var rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row w-100");
    contactListItem.appendChild(rowDiv);
    
    var pictureColumnDiv = document.createElement("div");
    pictureColumnDiv.setAttribute("class", "col-12 col-sm-6 col-md-3 px-0");
    rowDiv.appendChild(pictureColumnDiv);
    
    var pictureImg = document.createElement("img");
    pictureImg.setAttribute("class", "rounded-circle mx-auto d-block img-fluid");
    pictureImg.setAttribute("src", contact.pictureUrl);
    pictureImg.setAttribute("alt", contact.name);
    pictureColumnDiv.appendChild(pictureImg);
    
    var infoColumnDiv = document.createElement("div");
    infoColumnDiv.setAttribute("class", "col-12 col-sm-6 col-md-9 text-center text-sm-left");
    rowDiv.appendChild(infoColumnDiv);
    
    var presenceSpan = document.createElement("span");
    presenceSpan.setAttribute("class", "fa fa-mobile fa-2x text-sucess float-right pulse");
    presenceSpan.setAttribute("title", "online now");
    infoColumnDiv.appendChild(presenceSpan);
    
    var nameLabel = document.createElement("label");
    nameLabel.setAttribute("class", "name lead");
    nameLabel.innerHTML = contact.name;
    infoColumnDiv.appendChild(nameLabel);
    
    var nameLineBreak = document.createElement("br");
    infoColumnDiv.appendChild(nameLineBreak);
    
    var addressActionSpan = document.createElement("span");
    addressActionSpan.setAttribute("class", "fa fa-map-marker fa-fw text-muted");
    addressActionSpan.setAttribute("data-toggle", "tooltip");
    addressActionSpan.setAttribute("data-original-title", contact.address);
    addressActionSpan.setAttribute("title", "");
    infoColumnDiv.appendChild(addressActionSpan);
    
    var addressSpan = document.createElement("span");
    addressSpan.setAttribute("class", "text-muted");
    addressSpan.innerHTML = contact.address;
    infoColumnDiv.appendChild(addressSpan);
    
    var addressLineBreak = document.createElement("br");
    infoColumnDiv.appendChild(addressLineBreak);
    
    var phoneActionSpan = document.createElement("span");
    phoneActionSpan.setAttribute("class", "fa fa-phone fa-fw text-muted");
    phoneActionSpan.setAttribute("data-toggle", "tooltip");
    phoneActionSpan.setAttribute("data-original-title", contact.phone);
    phoneActionSpan.setAttribute("title", "");
    infoColumnDiv.appendChild(phoneActionSpan);
    
    var phoneSpan = document.createElement("span");
    phoneSpan.setAttribute("class", "text-muted small");
    phoneSpan.innerHTML = contact.phone;
    infoColumnDiv.appendChild(phoneSpan);
    
    var phoneLineBreak = document.createElement("br");
    infoColumnDiv.appendChild(phoneLineBreak);
    
    var emailActionSpan = document.createElement("span");
    emailActionSpan.setAttribute("class", "fa fa-envelope fa-fw text-muted");
    emailActionSpan.setAttribute("data-toggle", "tooltip");
    emailActionSpan.setAttribute("data-original-title", "");
    emailActionSpan.setAttribute("title", "");
    infoColumnDiv.appendChild(emailActionSpan);
    
    var emailSpan = document.createElement("span");
    emailSpan.setAttribute("class", "text-muted small text-truncate");
    emailSpan.innerHTML = contact.email;
    infoColumnDiv.appendChild(emailSpan);
}