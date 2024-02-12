//your JS code here. If required.
// Define a class for the secret message
class SecretMessage {
  constructor(encodedMessage) {
    this.encodedMessage = encodedMessage;
  }

  decode() {
    // Assume a simple decoding mechanism for demonstration purposes
    // In a real-world scenario, a more sophisticated decoding algorithm would be used
    return this.encodedMessage.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
  }
}

// Create objects to store information in "heap memory"
const messageObject = new SecretMessage("Uifsf jt b tfdsfu nfttbhf!");
const missionInfoObject = {
  missionName: "Operation X",
  agentCode: "007",
  targetLocation: "Top Secret Facility",
};

// Simulate heap memory by referencing these objects
const heapMemory = {
  secretMessage: messageObject,
  missionInfo: missionInfoObject,
};

// Access the message object to decode and reveal the secret message
const decodedMessage = heapMemory.secretMessage.decode();

// Display the decoded message and other mission information
console.log("Decoded Message:", decodedMessage);
console.log("Mission Name:", heapMemory.missionInfo.missionName);
console.log("Agent Code:", heapMemory.missionInfo.agentCode);
console.log("Target Location:", heapMemory.missionInfo.targetLocation);
