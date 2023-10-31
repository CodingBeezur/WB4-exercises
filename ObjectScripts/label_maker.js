let contactInfo = {
    contactName: "Cesar",
    contactAddress: "300 W Van Buren",
    contactCity: "Phoenix",
    contactState: "Arizona",
    zip: "85009"
}

printContact(contactInfo);

function printContact(contactInfo) {
    console.log(contactInfo.contactName);
    console.log(contactInfo.contactAddress);
    console.log(`${contactInfo.contactCity}, ${contactInfo.contactState} ${contactInfo.zip}`);

}