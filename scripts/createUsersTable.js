var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
});

var dynamodb = new AWS.DynamoDB();

var params = {
  TableName: "Users",
  KeySchema: [
    { AttributeName: "userKey", KeyType: "HASH" },
    {AttributeName: "email", KeyType: "RANGE"}
  ],
  AttributeDefinitions: [
    {AttributeName: "userKey", AttributeType: "S"},
    { AttributeName: "email", AttributeType: "S" },
    // { AttributeName: "waiver", AttributeType: "B" },
    // { AttributeName: "nameFirst", AttributeType: "S" },
    // { AttributeName: "nameLast", AttributeType: "S" },
    // { AttributeName: "linkedin", AttributeType: "S" },
    // { AttributeName: "yearsofExperience", AttributeType: "N" },
    // { AttributeName: "age", AttributeType: "N" },
    // { AttributeName: "gender", AttributeType: "S" },
    // { AttributeName: "timezone", AttributeType: "S" },
    // { AttributeName: "country", AttributeType: "S" },
    // // { AttributeName: "language", AttributeType: "List" },
    // { AttributeName: "preferredMeeting", AttributeType: "S" },
    // { AttributeName: "mentorAvailability", AttributeType: "N" },
    // // { AttributeName: "mentorTags", AttributeType: "List" },
    // { AttributeName: "discord", AttributeType: "S" },
    // { AttributeName: "isAdmin", AttributeType: "B" },
    // { AttributeName: "approvedToBeMentor", AttributeType: "B" },
    // { AttributeName: "approvedToBeMentee", AttributeType: "B" },
    // // { AttributeName: "currentMentees", AttributeType: "List" },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10,
  },
};

dynamodb.createTable(params, function (err, data) {
  if (err) {
    console.error(
      "Unable to create table. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log(
      "Created table. Table description JSON:",
      JSON.stringify(data, null, 2)
    );
  }
});
