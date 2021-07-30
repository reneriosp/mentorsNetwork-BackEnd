var AWS = require("aws-sdk")
var credentials = new AWS.SharedIniFileCredentials({profile: 'ethanevans'});
AWS.config.credentials = credentials;
console.log(AWS.config.credentials.accessKeyId)

AWS.config.update({
    region: "us-east-1",
  });
  
  var dynamodb = new AWS.DynamoDB();
  
  var params = {
      TableName : "Movies",
      KeySchema: [       
          { AttributeName: "year", KeyType: "HASH"},  //Partition key
          { AttributeName: "title", KeyType: "RANGE" }  //Sort key
      ],
      AttributeDefinitions: [       
          { AttributeName: "year", AttributeType: "N" },
          { AttributeName: "title", AttributeType: "S" }
      ],
      ProvisionedThroughput: {       
          ReadCapacityUnits: 10, 
          WriteCapacityUnits: 10
      }
  };
  
  dynamodb.createTable(params, function(err, data) {
      if (err) {
          console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
      } else {
          console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
      }
  });