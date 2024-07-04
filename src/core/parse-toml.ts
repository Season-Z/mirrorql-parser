// import { Optional } from "typescript-optional";
// import * as PATH from "path";
// import * as FS from "fs";
// import * as TOML from '@iarna/toml';
import TOML from "@iarna/toml";

export class PackageInfo {
  packageInfo: object;
  depsInfo: TOML.JsonMap;

  constructor(packageInfo: object, depsInfo: TOML.JsonMap) {
    this.packageInfo = packageInfo;
    this.depsInfo = depsInfo;
  }
}

// function parseToml(tomlFile: string): Optional<PackageInfo> {
//     const parsedData = TOML.parse(FS.readFileSync(tomlFile, 'utf-8'));
//     // console.log(parsedData)

//     if (!parsedData || typeof parsedData !== "object") {
//         return Optional.empty();
//     }

//     const packageInfo: { [key: string]: any } = {};
//     if (parsedData.package && typeof parsedData.package === "object") {
//         for (const key in parsedData.package) {
//             if (Object.prototype.hasOwnProperty.call(parsedData.package, key)) {
//                 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//                 // @ts-expect-error
//                 packageInfo[key] = parsedData.package[key];
//             }
//         }
//     }

//     const depsInfo: { [key: string]: any } = {};

//     if (parsedData.deps) {
//         if (typeof parsedData.deps === "object") {

//             for (const key in parsedData.deps) {
//                 if (Object.prototype.hasOwnProperty.call(parsedData.deps, key)) {
//                     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//                     // @ts-expect-error
//                     depsInfo[key] = parsedData.deps[key];
//                 }
//             }
//         }
//     }

//     return Optional.of<PackageInfo>(new PackageInfo(packageInfo, depsInfo));
// }

// export function parseWithFile(curFile: string): [string, Optional<PackageInfo>] {
//     // let found = false;
//     // let newProperty = PATH.dirname(curFile);
//     // let newTomlFile = PATH.join(newProperty, 'package.toml');

//     // 无效循环
//     // while (newProperty !== null && newProperty !== '') {
//     //     if (FS.existsSync(newTomlFile)) {
//     //         found = true;
//     //         break;
//     //     }
//     //     newProperty = PATH.dirname(curFile);
//     //     newTomlFile = PATH.join(newProperty, 'package.toml');
//     // }

//     const newProperty = PATH.dirname(curFile)
//     const newTomlFile = PATH.join(newProperty, 'package.toml');
//     const found = FS.existsSync(newTomlFile)

//     if (found) {
//         return [newProperty, parseToml(newTomlFile)];
//     }

//     return ['', Optional.empty()];
// }

// export function parseWithPath(property: string): [string, Optional<PackageInfo>] {
//     let newTomlFile = PATH.join(property, 'package.toml');
//     let newProperty = property;

//     let found = false;

//     while (newProperty !== null && newProperty !== '') {
//         if (FS.existsSync(newTomlFile)) {
//             found = true;
//             break;
//         }
//         newProperty = PATH.dirname(newProperty);
//         newTomlFile = PATH.join(newProperty, 'package.toml');
//     }

//     if (found) {
//         return [newProperty, parseToml(newTomlFile)];
//     }

//     return ['', Optional.empty()];
// }

// export function parse(property: string, curFile: string): [string, Optional<PackageInfo>] {
//     const info = parseWithFile(curFile);
//     if (info[0] != '' && info[1].isPresent()) {
//         return info;
//     }
//     return parseWithPath(property);
// }
