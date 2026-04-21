
chrome.runtime.onConnect.addListener((port) => {
  console.log("Someone connected:", port.name);

  
  port.onMessage.addListener((message) => {
    console.log("Message received:", message);


    port.postMessage({ reply: "Hello back!", received: message });
  });

  port.onDisconnect.addListener(() => {
    console.log("Port disconnected");
  });
});