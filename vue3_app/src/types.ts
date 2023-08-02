export type InputData = {
  id: string;
  name: string;
  birthday: string;
  age: string;
  height: string;
  weight: string;
  tel: string;
  mail: string;
  remarks: string;
  day: object;
};

export const defaultInputData = (): InputData => {
  return {
    id: "",
    name: "",
    birthday: "",
    age: "",
    height: "",
    weight: "",
    tel: "",
    mail: "",
    remarks: "",
    day: new Date(),
  };
};
