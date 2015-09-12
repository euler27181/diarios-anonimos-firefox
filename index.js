var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

pageMod.PageMod({
  include: /.+:\/\/.+\.lanacion\.com\.ar\/.*/,
  contentScriptFile: self.data.url("lanacion.js")
});

pageMod.PageMod({
  include: /.+:\/\/.+\.clarin\.com\/.*/,
  contentScriptFile: self.data.url("clarin.js")
});
