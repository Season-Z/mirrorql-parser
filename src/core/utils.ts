// import * as PATH from "path";
// export function getFileName(curFile: string): string {
//   if (curFile.includes(PATH.sep)) {
//     curFile = curFile.substring(curFile.lastIndexOf(PATH.sep) + 1);
//   }
//   if (curFile.includes(".")) {
//     return curFile.substring(0, curFile.lastIndexOf("."));
//   }
//   return curFile;
// }

// export function getFileExtension(curFile: string): string {
//   if (curFile.includes(".")) {
//     return curFile.substring(curFile.lastIndexOf(".") + 1);
//   }
//   return "";
// }

class ArrayStack<T = any> {
  // 定义一个数组，用于存储元素
  private data: T[] = [];

  constructor(data: T[]) {
    this.data = data || [];
  }

  // 实现栈中相关的操作方法
  // push 方法：将一个元素压入栈中
  push(element: T): void {
    this.data.push(element);
  }

  // pop方法：将栈顶的元素弹出栈（返回出去，并且从栈顶移除）
  pop(): T | undefined {
    return this.data.pop();
  }

  // peek方法：返回栈顶元素
  peek(): T | undefined {
    return this.data[this.data.length - 1];
  }

  // isEmpty方法：判断栈是否为空
  isEmpty(): boolean {
    return this.data.length === 0;
  }

  // size放法：返回栈里元素个数
  size(): number {
    return this.data.length;
  }
}

export default ArrayStack;
