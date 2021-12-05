class Main {
    item: number;

    constructor(e: number) {
      this.item = e;
    }
    
    squared() {
      console.log(`Hi, original: ${this.item}`)
      console.log('one more')
      return this.item * this.item;
    }
  }
  
  class Second extends Main {
    constructor(a: number) {
      super(a);
    }
    
    squared() {
      super.squared()
      return this.item * this.item * this.item; // cubed
    }
  }
  
  const main = new Main(2);
  const sec = new Second(2);
  
  console.log(main.squared())
  console.log(sec.squared())
  