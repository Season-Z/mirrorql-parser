const TOML = require('@iarna/toml');
const fs = require('fs')

class PackageInfo {
    packageInfo: Object;
    depsInfo: Object;

    constructor(packageInfo: Object, depsInfo: Object) {
        this.packageInfo = packageInfo;
        this.depsInfo = depsInfo;
    }
}

// 解析 TOML 字符串为 JS 对象
const tomlStr = `
title = "TOML 示例"

[database]
server = "192.168.1.1"
ports = [ 8001, 8001, 8002 ]
`;


function parseToml(): PackageInfo | undefined {
    const parsedData = TOML.parse(fs.readFileSync('package.toml'));
    console.log(parsedData)

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

    const packageInfo: { [key: string]: any } = {};
    if (parsedData.package && typeof parsedData.package === "object") {
        for (const key in parsedData.package) {
            if (parsedData.package.hasOwnProperty(key)) {
                packageInfo[key] = parsedData.package[key];
            }
        }
    }

    const depsInfo: { [key: string]: any } = {};
    if (parsedData.deps) {
        if (typeof parsedData.deps === "object") {

            for (const key in parsedData.deps) {
                if (parsedData.deps.hasOwnProperty(key)) {
                    depsInfo[key] = parsedData.deps[key];
                }
            }
        }
    }

    return new PackageInfo(packageInfo, depsInfo);


}

const ret = parseToml();

console.log(ret);

// const parsedData = TOML.parse(cargo);
// console.log(cargo);