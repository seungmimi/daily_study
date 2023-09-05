//index.js: 모듈별로 쪼게진 JS를 하나로 합쳐주는 역할
import ColaGenerator from "./js/colaGenerator.js";
import VendingMachineFunc from "./js/vendingMachineFn.js";

const colaenerator = new ColaGenerator;
await colaenerator.setup();

const vendingMachineFunc = new VendingMachineFunc;
vendingMachineFunc.setup();