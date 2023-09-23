import * as Yup from "yup";

export const MerriageSchema = Yup.object({
  applicationDate: Yup.date().required("Application Date is required"),
  location: Yup.string().required("Location is required"),
  marriageDate: Yup.date().required("Marriage Date is required"),
  marriageAddress: Yup.string().required("Marriage Address is required"),
});

export const HusbandSchema = Yup.object({
  husbandsurname: Yup.string().required("Husband surname is required"),
  husbandname: Yup.string().required("Husband name is required"),
  husbandbirthdate: Yup.string().required("Husband birthdate is required"),
  husbandreligions: Yup.number().required("Husband religions is required"),
  husbandage: Yup.number().required("Husband age is required"),
  husbandstatus: Yup.number().required("Husband status is required"),
  husbandlocation: Yup.string().required("Husband Location is required"),
  husbandaddress: Yup.string().required("Husband address is required"),
  gardianSurname: Yup.string().required("Gardian surname is required"),
  gardianName: Yup.string().required("Gardian Name is required"),
  gardianAge: Yup.number().required("Gardian Age is required"),
  gardianLocation: Yup.string().required("Gardian Location is required"),
  gardianAddress: Yup.string().required("Gardian Address is required"),
  gardianContact: Yup.number().max(8).required("Gardian Contact is required"),
  gardianMobile: Yup.string().max(10).required("Gardian Mobile is required"),
  gardianEmail: Yup.string().email().required("Not proper email"),
});

export const WifeSchema = Yup.object({
  wifesurname: Yup.string().required("Wife surname is required"),
  wifename: Yup.string().required("Wife name is required"),
  wifebirthdate: Yup.string().required("Wife birthdate is required"),
  wifereligions: Yup.number().required("Wife religions is required"),
  wifeage: Yup.number().required("Wife age is required"),
  wifestatus: Yup.number().required("Wife status is required"),
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
  gardianwifeMobile: Yup.string()
    .max(10)
    .required("Gardian Mobile is required"),
  gardianwifeEmail: Yup.string().email().required("Not proper email"),
});
