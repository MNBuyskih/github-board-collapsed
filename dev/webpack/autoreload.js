/* eslint-disable */

const io = require("socket.io");

class WebpackExtensionReload {
  // noinspection JSUnusedGlobalSymbols
  apply(compiler) {
    // noinspection SpellCheckingInspection
    const listener = io.listen(8890, {
      cors: {
        origin: "chrome-extension://jfjjbihghhhohnahailbplkciefnaffg",
        methods: ["GET", "POST"],
        credentials: true,
      },
    });

    // noinspection JSUnresolvedFunction
    compiler.hooks.done.tap("WebpackExtensionReload", () => {
      listener.emit("file.change", {});
      console.log("Extension reloaded!!!");
    });
  }
}

module.exports = WebpackExtensionReload;
