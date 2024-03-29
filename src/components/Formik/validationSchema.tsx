import * as Yup from "yup";

export const MerriageSchema = Yup.object({
  location: Yup.string().required("Location is required"),
  marriageDate: Yup.date().required("Marriage Date is required"),
  marriageAddress: Yup.string().required("Marriage Address is required"),
});

export const HusbandSchema = Yup.object({
  husbandsurname: Yup.string().required("Husband surname is required"),
  husbandname: Yup.string().required("Husband name is required"),
  husbandbirthdate: Yup.string().required("Husband birthdate is required"),
  husbandreligions: Yup.string().required("Husband religions is required"),
  husbandage: Yup.number().required("Husband age is required"),
  husbandstatus: Yup.string().required("Husband status is required"),
  husbandlocation: Yup.string().required("Husband Location is required"),
  husbandaddress: Yup.string().required("Husband address is required"),
  gardianSurname: Yup.string().required("Gardian surname is required"),
  gardianName: Yup.string().required("Gardian Name is required"),
  gardianAge: Yup.number().required("Gardian Age is required"),
  gardianLocation: Yup.string().required("Gardian Location is required"),
  gardianAddress: Yup.string().required("Gardian Address is required"),
  gardianContact: Yup.number().required("Gardian Contact is required"),
  gardianMobile: Yup.string().max(10).required("Gardian Mobile is required"),
  gardianEmail: Yup.string().email().required("Not proper email"),
});

export const WifeSchema = Yup.object({
  wifesurname: Yup.string().required("Wife surname is required"),
  wifename: Yup.string().required("Wife name is required"),
  wifebirthdate: Yup.string().required("Wife birthdate is required"),
  wifereligions: Yup.string().required("Wife religions is required"),
  wifeage: Yup.number().required("Wife age is required"),
  wifestatus: Yup.string().required("Wife status is required"),
  wifelocation: Yup.string().required("Wife Location is required"),
  wifeaddress: Yup.string().required("Wife address is required"),
  gardianwifeSurname: Yup.string().required("Gardian surname is required"),
  gardianwifeName: Yup.string().required("Gardian Name is required"),
  gardianwifeAge: Yup.number().required("Gardian Age is required"),
  gardianwifeLocation: Yup.string().required("Gardian Location is required"),
  gardianwifeAddress: Yup.string().required("Gardian Address is required"),
  gardianwifeContact: Yup.number()
    .max(8)
    .required("Gardian Contact is required"),
  gardianwifeMobile: Yup.number()
    .max(10)
    .required("Gardian Mobile is required"),
  gardianwifeEmail: Yup.string().email().required("Not proper email"),
});

export const PriestSchema = Yup.object({
  priestname: Yup.string().required("Priest name is required"),
  priestbirthdate: Yup.string().required("Priets birthdate is required"),
  priestage: Yup.number().min(18).required("Priets age is required"),
  priestlocation: Yup.string().required("Priest Address is required"),
  prietsaddress: Yup.string().required("Priest Address is required"),
});

export const Witness1Schema = Yup.object({
  witness1detail: Yup.string().required("Witness-1 name is required"),
  witness1birthdate: Yup.string().required("Witness-1 birthdate is required"),
  witness1age: Yup.number().min(18).required("Witness-1 age is required"),
  witness1address: Yup.string().required("Witness-1 Address is required"),
});

export const Witness2Schema = Yup.object({
  witness2name: Yup.string().required("Witness-2 name is required"),
  witness2birthdate: Yup.string().required("Witness-2 birthdate is required"),
  witness2age: Yup.number().min(18).required("Witness-2 age is required"),
  witness2address: Yup.string().required("Witness-2 Address is required"),
});

export const loginSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().min(7).max(12).required("Password is required"),
});
