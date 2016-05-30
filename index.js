var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

pageMod.PageMod({
  include: /.+:\/\/.+\.lanacion\.com\.ar\/.*/,
  contentStyleFile: self.data.url("lanacion.css")
});

pageMod.PageMod({
  include: [/.+:\/\/.+\.clarin\.com\/.*/, /.+:\/\/.+\.ole\.com\.ar\/.*/],
  contentStyleFile: self.data.url("clarin.css")
});
