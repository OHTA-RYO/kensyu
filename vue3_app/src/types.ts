export type InputData = {
  id:  number,
  name: string;
  birthday: string;
  age: string;
  height: string;
  weight: string;
  tel: string;
  mail: string;
  remarks: string;
};

export const defaultInputData = ():InputData =>{ return{
  id:  Math.floor(Math.random() * 100),
  name: "",
  birthday: "",
  age: "",
  height: "",
  weight: "",
  tel: "",
  mail: "",
  remarks: "",
}};

