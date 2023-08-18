  export type InputData = {
  id:  number;
  name: string;
  name2: string;
  birthday: string;
  age: string;
  height: string;
  weight: string;
  tel: string;
  mail: string;
  remarks: string;
};

 export const defaultInputData = ():InputData => 
 {return{
  id:  0,
  name: '',
  name2: '',
  birthday: '',
  age: '',
  height: '',
  weight: '',
  tel: '',
  mail: '',
  remarks: '',
}};

// export const defaultInputData:InputData = {
//  id:  0,
//  name: '',
//  name2: '',
//  birthday: '',
//  age: '',
//  height: '',
//  weight: '',
//  tel: '',
//  mail: '',
//  remarks: '',
// };