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
  image: string;
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
    image: "",
  };
};

export type InquiryDetail = {
  id: string;
  name: string;
  tell: string;
  info: string;
  times: string;
  remarks: string;
};

export const defaultInquiryDetail = (): InquiryDetail => {
  return {
    id: "",
    name: "",
    tell: "",
    info: "",
    times: "",
    remarks: "",
  };
};
