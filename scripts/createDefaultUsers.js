var AWS = require("aws-sdk");
AWS.config.update({
    region: "us-east-1",
});
var docClient = new AWS.DynamoDB.DocumentClient();
const { v4: uuidv4 } = require('uuid');
var params = {
    TableName: "Users",
    Item: {
        "userKey":  uuidv4(),
        "email": "sampleuser2@gmail.com",
        "waiver": true,
        nameFirst: "sample",
        nameLast: "user",
        linkedIn: "randomlinkedin",
        yearsOfExperience: 2,
        age: 30,
        gender: "male",
        timezone: "utc+530",
        country: "India",
        language: ["English", "Spanish"],
        preferredMeeting: "Zoom",
        mentorAvailability : 5,
        mentorTags: ["random-tag"],
        discord: "randomdiscordname",
        isAdmin: false,
        approvedToBeMentor: false,
        approvedToBeMentee: true,
        currentMentees: [null]
    }
}
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add user", data, ". Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("PutItem succeeded:");
    }
 });