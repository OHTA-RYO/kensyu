export type InputData = [{
  name: string;
  birthday: string;
  age: string;
  height: string;
  weight: string;
  tel: string;
  mail: string;
  remarks: string;
}];

export const defaultInputData: InputData = [{
  name: "",
  birthday: "",
  age: "",
  height: "",
  weight: "",
  tel: "",
  mail: "",
  remarks: "",
}];

// export type saveInputData = [{
//   name: inputData.name,
//   birthday: inputData.birthday,
//   age: inputData.age,
//   height: inputData.height,
//   weight: inputData.weight,
//   tel: inputData.tel,
//   mail: inputData.mail,
//   remarks: inputData.remarks,
// }];