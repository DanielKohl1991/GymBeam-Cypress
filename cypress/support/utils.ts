export class RandInt {
  static randCategory() {
    return Math.floor(Math.random() * 8) + 1;
  }
  static randProduct() {
    return Math.floor(Math.random() * 10) + 1;
  }
}
