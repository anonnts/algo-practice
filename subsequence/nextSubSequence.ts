class nextSequenceNumber {
   public sequence: number[];
   constructor(
      numbers: number[]
   ) {
      this.sequence = numbers
   }

   devider(
      sequence: number[],
      n: number,
      start: number
      ) {
      let result = 0;
      for (let index = start; index < sequence.length; index++) {
         result = sequence[index] / n
      }  
      return result;
   }

   start() {
      if (this.sequence.length) {
         const result: number = this.devider(
            this.sequence,
            2,
            0);
         this.sequence.push(result);
         console.log(this.sequence, 'Next sequence is', result);
      }
   }
}

// from this problem, please find next number of 4.5 ... ?
const next = new nextSequenceNumber([72, 36, 18, 9, 4.5]);
next.start()
