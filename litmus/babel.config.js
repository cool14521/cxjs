module.exports = {
   cacheDirectory: true,
   cacheIdentifier: "v13",
   presets: [
      ["cx-env", {
         targets: {
            chrome: 50,
            ie: 11,
            ff: 30,
            edge: 12,
            safari: 9
         },
         modules: false,
         loose: true,
         useBuiltIns: true,
         cx: {
            imports: false
         }
      }]
   ],
   "plugins": []
};

