const MessageContract = artifacts.require("MessageContract");

contract("MessageContract", (accounts) => {
  let messageContract;

  before(async () => {
    messageContract = await MessageContract.deployed();
  });

  it("should set and get the message correctly", async () => {
    const newMessage = "Hello, world!";
    
    // Set the message
    await messageContract.setMessage(newMessage, { from: accounts[0] });

    // Get the message
    const returnedMessage = await messageContract.getMessage();

    assert.equal(returnedMessage, newMessage, "Message did not match");
  });
});
