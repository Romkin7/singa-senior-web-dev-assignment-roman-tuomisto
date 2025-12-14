// Define simple Event handler to listen for /ping calls
export default defineEventHandler(() => {
  return {
    ping: "pong",
  };
});
