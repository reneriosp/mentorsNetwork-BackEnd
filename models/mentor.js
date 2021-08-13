const {DBInteraction} = require("../dbinteraction")
var interaction = new DBInteraction()
class Mentor {
  getAllmentors(callback) {
    const params = {
      TableName: "Users",
      FilterExpression: "#mentor = :true",

      ExpressionAttributeNames: {
        "#mentor": "approvedToBeMentor",
      },
      ExpressionAttributeValues: {
        ":true": true,
      },
    };
    interaction.scanRecords(params, callback)
  }
}

// mentor = new Mentor()
// mentor.getAllmentors((data)=> console.log(data))