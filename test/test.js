var TOML = require('@iarna/toml');
var fs = require('fs');
var PackageInfo = /** @class */ (function () {
    function PackageInfo(packageInfo, depsInfo) {
        this.packageInfo = packageInfo;
        this.depsInfo = depsInfo;
    }
    return PackageInfo;
}());
// 解析 TOML 字符串为 JS 对象
var tomlStr = "\ntitle = \"TOML \u793A\u4F8B\"\n\n[database]\nserver = \"192.168.1.1\"\nports = [ 8001, 8001, 8002 ]\n";
function parseToml() {
    var parsedData = TOML.parse(fs.readFileSync('package.toml'));
    console.log(parsedData);
    if (!parsedData || typeof parsedData !== "object") {
        return undefined;
    }
    // if (parsedData.package && typeof parsedData.package === "object") {
    //     var package = parsedData.package;
    //     var name = "";
    //     if (package.name && typeof package.name === "string") {
    //         name = parsedData.name;
    //     }
    //     var entry = "";
    //     if (package.entry && typeof package.entry === "string") {
    //         entry = parsedData.entry;
    //     } else {
    //         entry = "main";
    //     }
    //     var version = "";
    //     if (package.version && typeof package.version === "string") {
    //         version = parsedData.version;
    //     }
    //     var is_lib = false;
    //     if (package.is_lib && typeof package.is_lib === "boolean") {
    //         is_lib = parsedData.is_lib;
    //     }
    // }
    var packageInfo = {};
    if (parsedData.package && typeof parsedData.package === "object") {
        for (var key in parsedData.package) {
            if (parsedData.package.hasOwnProperty(key)) {
                var element = parsedData.package[key];
                packageInfo[key] = element;
            }
        }
    }
    var depsInfo = {};
    if (parsedData.deps) {
        if (typeof parsedData.deps === "object") {
            for (var key in parsedData.deps) {
                if (parsedData.deps.hasOwnProperty(key)) {
                    var element = parsedData.deps[key];
                    depsInfo[key] = element;
                }
            }
        }
    }
    return new PackageInfo(packageInfo, depsInfo);
}
var ret = parseToml();
console.log(ret);
// const parsedData = TOML.parse(cargo);
// console.log(cargo);
