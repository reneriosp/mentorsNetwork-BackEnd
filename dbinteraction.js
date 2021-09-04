class DBInteraction {
  constructor() {
    var AWS = require("aws-sdk");
    var credentials = new AWS.SharedIniFileCredentials({
      profile: "ethanevans",
    });
    AWS.config.credentials = credentials;
    console.log(AWS.config.credentials.accessKeyId);
    AWS.config.update({ region: "us-east-1" });
    this.dynamoDB = new AWS.DynamoDB();
    this.docClient = new AWS.DynamoDB.DocumentClient();
  }
  writeRecord(tableName, record) {
    let obj = {
      TableName: tableName,
      Item: record,
    };
    this.docClient.put(obj, function (err, data) {
      if (err)
        console.error(
          "Unable to add item. Error",
          JSON.stringify(err, null, 2)
        );
      else console.log("Added item", JSON.stringify(data, null, 2));
    });
  }
  readRecord(tableName, keys, callback) {
    let obj = {
      TableName: tableName,
      Key: keys,
    };
    this.docClient.get(obj, function (err, data) {
      if (err)
        console.error("Unable to read item", JSON.stringify(err, null, 2));
      else {
        console.log("Got Item", JSON.stringify(data, null, 2));
        if (callback && typeof callback === "function") callback(data);
      }
    });
  }
  scanRecords(params, callback) {
    //Params needs to have the TableName struct
    this.docClient.scan(params, function (err, data) {
      if (err) {
        console.log("Unable to query. Error:", JSON.stringify(err, null, 2));
      } else {
        console.log("Query succeeded.");
        if (callback && typeof callback === "function") callback(data);
      }
    });
  }
}
module.exports = {DBInteraction}
// interaction = new DBInteraction();
// interaction.writeRecord("Movies", { year: 2016, title: "Fancy Pants Movie2", info: { plot: "Blah", rating: 0 } });
// interaction.readRecord("Movies", { year: 2015, title: "Fancy Pants Movie" });
// interaction.updateRecord;
