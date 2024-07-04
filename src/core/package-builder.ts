/* eslint-disable @typescript-eslint/ban-ts-comment */
// import { ASTBuilder } from "./astBuilder"
import { ParsingManager } from "./parser";
import { ParseOptions } from "../typings/types";
// import * as PATH from "path";
// import * as FS from "fs";
// import * as PT from "./parse-toml";
// import { Optional } from "typescript-optional";
import { makeModuleExpr, ModuleExpr } from "../typings/ast-types";

export class PackageBuilder {
  UseDir: string = process.cwd();

  constructor(
    public options: ParseOptions,
    public manager: ParsingManager
  ) {}

  // checkDepVersion(libDir: string, dep: string, depVersion: string, neededDir: string): boolean {
  //   const depDir = PATH.join(FS.realpathSync(libDir), dep);
  //   const packageInfo = PT.parseWithPath(depDir);
  //   if (packageInfo[1].isEmpty()) {
  //     throw new Error(
  //       `The required ${dep} version number for file ${PATH.join(neededDir, "package.toml")} is ${depVersion},  but the provided version number for the ${depDir} library file is 'unknown'`
  //     );
  //     return false;
  //   }

  //   // @ts-expect-error
  //   const version = packageInfo[1].get().packageInfo["version"];
  //   if (version != depVersion) {
  //     throw new Error(
  //       `The required ${dep} version number for file ${PATH.join(neededDir, "package.toml")} is ${depVersion},  but the provided version number for the ${depDir} library file is '${version}'`
  //     );
  //     return false;
  //   }

  //   this.manager.PackageInfos.set(packageInfo[0], packageInfo[1]);
  //   return true;
  // }

  // getCurPackageInfo(): [string, Optional<PT.PackageInfo>] {
  //   const curParsingFile = this.manager.currentParsingFile;
  //   if (curParsingFile == "") {
  //     return ["", Optional.empty()];
  //   }

  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  //   const absPath = FS.realpathSync(curParsingFile);
  //   const packageInfo = this.manager.PackageInfos;

  //   if (packageInfo == null) {
  //     return ["", Optional.empty()];
  //   }

  //   let curPackageInfo = ["", Optional.empty()];
  //   for (const [key, value] of packageInfo) {
  //     if (absPath.startsWith(key) && value.isPresent()) {
  //       curPackageInfo = [key, value];
  //     }

  //     if (absPath.startsWith(PATH.join(key, "src"))) {
  //       curPackageInfo = [key, value];
  //     }
  //   }

  //   // @ts-ignore
  //   return curPackageInfo;
  // }

  paddedUseAccess(access: ModuleExpr[], useAccess: string, curLibDir: string): [ModuleExpr[], string] {
    const newAccess = new Array<ModuleExpr>();
    const newAccessPath = useAccess.substring(curLibDir.length + 1);

    // const items = newAccessPath.split(PATH.sep);
    const items = newAccessPath.split("/");
    for (let i = 0; i < items.length - (access.length - 1); i++) {
      const item = items[i];
      newAccess.push(makeModuleExpr(item, access[0].typeArgs));
    }

    newAccess.push(...access);
    return [newAccess, curLibDir];
  }

  // getNewModuleExprs(access: ModuleExpr[], depDir: string): ModuleExpr[] {
  //   const libDirName = PATH.join(depDir, access[0].base);
  //   let index = 0;
  //   if (this.manager.LibraryCounts.has(libDirName)) {
  //     // @ts-ignore
  //     index = this.manager.LibraryCounts.get(libDirName) + 1;
  //   }
  //   this.manager.LibraryCounts.set(libDirName, index);

  //   const firstAccess: ModuleExpr = access[0];
  //   const newAccess: ModuleExpr[] = new Array<ModuleExpr>();
  //   const newAccessName = firstAccess.base + index;

  //   newAccess.push(makeModuleExpr(newAccessName, firstAccess.typeArgs));
  //   newAccess.push(...access.slice(1));
  //   return newAccess;
  // }

  // getDirectoryWithAccess(access: ModuleExpr[]): string {
  //   let dir: string = "";
  //   for (const item of access) {
  //     dir = PATH.join(dir, item.base);
  //   }
  //   return dir;
  // }

  // getDirectoryOfDep(dep: string, libDirs: string[]): string {
  //   let libraryDir = "";
  //   for (let libDir of libDirs) {
  //     libDir = FS.realpathSync(libDir);
  //     const depDir = PATH.join(libDir, dep);
  //     if (FS.existsSync(depDir)) {
  //       libraryDir = libDir;
  //       break;
  //     }
  //   }

  //   return libraryDir;
  // }

  supplementUseAccess(access: ModuleExpr[]): ModuleExpr[] {
    const newAccess: ModuleExpr[] = new Array<ModuleExpr>();
    newAccess.push(access[0]);
    const strModuleExpr = makeModuleExpr("src", access[0].typeArgs);
    newAccess.push(strModuleExpr);
    newAccess.push(...access.slice(1));
    return newAccess;
  }

  // checkUseAccess(access: ModuleExpr[], useAccess: string): boolean {
  //   // const moduleAccess = new ModuleAccess(access);

  //   const useAccessFile = FS.realpathSync(useAccess);

  //   if (!FS.existsSync(useAccessFile)) {
  //     throw new Error(`${useAccess} is not exists`);
  //     return false;
  //   }

  //   return true;
  // }

  // transformLibrary(accessAndDepDir: [ModuleExpr[], string]): ModuleExpr[] {
  //   let depDir = accessAndDepDir[1];
  //   const access = accessAndDepDir[0];

  //   const accessName = this.getDirectoryWithAccess(access);
  //   depDir = FS.realpathSync(depDir);

  //   if (this.manager.LibDir2UseAccess.has(depDir)) {
  //     const useAccessNames = new Array<string>();
  //     // @ts-ignore
  //     useAccessNames.push(...this.manager.LibDir2UseAccess.get(depDir));

  //     if (useAccessNames.includes(accessName)) {
  //       const curUseAccess = new Array<ModuleExpr>();
  //       curUseAccess.push(access[access.length - 1]);
  //       return curUseAccess;
  //     }

  //     useAccessNames.push(accessName);
  //     this.manager.LibDir2UseAccess.set(depDir, useAccessNames);
  //   } else {
  //     this.manager.LibDir2UseAccess.set(depDir, [accessName]);
  //   }

  //   const newModuleExprs = this.getNewModuleExprs(access, depDir);
  //   this.manager.UseAccessMp.set(accessName, new ModuleAccess(newModuleExprs));

  //   this.manager.Libraries.push([accessName + ".mql", depDir]);
  //   const newAccess = new Array<ModuleExpr>();
  //   newAccess.push(access[access.length - 1]);
  //   return newAccess;
  // }

  // handleLibrary(access: ModuleExpr[], useAccess: string, prefix: string): ModuleExpr[] {
  //   const curPackageInfo = this.getCurPackageInfo();
  //   const curLibDir = curPackageInfo[0] == "" && curPackageInfo[1].isEmpty() ? this.UseDir : PATH.dirname(curPackageInfo[0]);

  //   if (prefix === "package") {
  //     const accessName = this.getDirectoryWithAccess(access);
  //     const depRootDir = curPackageInfo[0] == "" && curPackageInfo[1].isEmpty() ? this.UseDir : curPackageInfo[0];
  //     const depDir = PATH.join(depRootDir, "src");
  //     useAccess = PATH.join(depDir, accessName + ".mql");
  //   }
  //   if (!this.checkUseAccess(access, useAccess)) {
  //     return access;
  //   }

  //   const accessAndDepDir = this.paddedUseAccess(access, useAccess, curLibDir);
  //   return this.transformLibrary(accessAndDepDir);
  // }

  // buildUseAccess(access: ModuleExpr[], prefix: string): ModuleExpr[] {
  //   const accessName = this.getDirectoryWithAccess(access);
  //   // const moduleAccess = new ModuleAccess(access);

  //   const curParsingFile = this.manager.currentParsingFile;
  //   if (prefix === "") {
  //     const libDirs = this.manager.LibraryDirs;
  //     if (libDirs == null || libDirs.length == 0) {
  //       throw new Error(`Use ('-L') to specify the path of the library file`);
  //       return access;
  //     }

  //     const curPackageInfo = this.getCurPackageInfo();
  //     if (curPackageInfo[0] === "" && curPackageInfo[1].isEmpty()) {
  //       throw new Error(`No package information was obtained for the library where the file('${this.manager.currentParsingFile}') is located`);
  //       return access;
  //     }

  //     const dep = access[0].base;
  //     const packageInfo = curPackageInfo[1];
  //     if (packageInfo.isEmpty()) {
  //       throw new Error("module not found");
  //       return access;
  //     }

  //     // @ts-ignore
  //     if (!packageInfo.get().depsInfo.has(dep)) {
  //       throw new Error(`${dep} is not a valid dependency`);
  //       return access;
  //     }
  //     const libraryDir = this.getDirectoryOfDep(dep, libDirs);
  //     if (libraryDir.length == 0) {
  //       throw new Error(`${dep} is not a valid dependency`);
  //       return access;
  //     }

  //     const depVersion = packageInfo.get().depsInfo[dep];
  //     const checked = this.checkDepVersion(libraryDir, dep, <string>depVersion, curPackageInfo[0]);
  //     if (!checked) {
  //       return access;
  //     }

  //     let newAccess = this.supplementUseAccess(access);
  //     newAccess = this.transformLibrary([newAccess, libraryDir]);
  //     return newAccess;
  //   } else if (prefix === "self") {
  //     if (curParsingFile.length == 0) {
  //       return access;
  //     }
  //     const curDir = FS.realpathSync(curParsingFile);
  //     const curLinFile = PATH.join(curDir, accessName + ".mql");
  //     return this.handleLibrary(access, curLinFile, prefix);
  //   } else if (prefix === "super") {
  //     if (curParsingFile.length == 0) {
  //       return access;
  //     }
  //     const superDir = PATH.dirname(curParsingFile);
  //     const useAccess = PATH.join(superDir, accessName + ".mql");
  //     return this.handleLibrary(access, useAccess, prefix);
  //   } else if (prefix === "package") {
  //     return this.handleLibrary(access, "", prefix);
  //   } else {
  //     throw new Error(`${prefix} is not a valid prefix`);
  //   }
  //   return access;
  // }
}
