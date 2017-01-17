declare module 'numeral' {
  declare class Numeral {
    static defaultFormat(format: string):void;
    static zeroFormat(format: string):void;
    static nullFormat(format: string):void;
    static register(type: string, sub: string, options: Object):void;

    constructor(input: number|string):void;
    format(format?: string):string;
    value():number;
    add(val: number):void;
    subtract(val: number):void;
    multiply(val: number):void;
    divide(val: number):void;
    set(val: number):void;
    clone():Numeral;
  }

  declare var exports: Class<Numeral>
}
