export interface UserDetails {
  husbandDetails: {
    name: string;
    surname: string;
    mobileNumber: number;
  };
  wifeDetails: {
    name: string;
    surname: string;
  };
  applicationStatus: any;
}

export interface userData {
  data: {
    totalUsers: number;
    totalUsersApprove: number;
    totalUsersReject: number;
  };
}

export interface downloadUserData {
  data: string;
  message: string;
  statusCode: number;
  success: boolean;
}

export interface UserAllDetail {
  data: {
    agreementStampStatus: boolean;
    applicationStatus: string;
    approveAppointmentDate: string;
    approveMessage: string;
    approveRequestCertificate: string;
    husbandDetails: {
      address: string;
      age: number;
      dateOfBirth: Date;
      emailId: string;
      guardianDetails: {
        address: string;
        age: number;
        contactNumber: string;
        location: string;
        name: string;
        surname: string;
      };
      location: string;
      mobileNumber: string;
      name: string;
      religious: string;
      statusOfBridegroom: string;
      surname: string;
    };
    husbandPhotoIdProofStatus: boolean | null;
    husbandSchoolLeavingCertificateStatus: boolean | null;
    marriageDetails: {
      applicationDate: Date;
      location: string;
      marriageAddress: string;
      marriageDate: Date;
    };
    marriageEvidenceStatus: boolean;
    priestDetails: {
      address: string;
      age: number;
      dateOfBirth: Date;
      location: string;
      name: string;
    };
    priestPhotoIdProofStatus: boolean;
    rejectedMessage: string;
    role: string;
    setPasswordToken: string;
    wifeDetails: {
      address: string;
      age: number;
      dateOfBirth: Date;
      emailId: string;
      guardianDetails: {
        address: string;
        age: number;
        contactNumber: string;
        location: string;
        name: string;
        surname: string;
      };
      location: string;
      mobileNumber: string;
      name: string;
      religious: string;
      statusOfBridegroom: string;
      surname: string;
    };
    wifePhotoIdProofStatus: boolean;
    wifeSchoolLeavingCertificate: string;
    wifeSchoolLeavingCertificateStatus: boolean;
    witnessOneDetails: {
      address: string;
      age: number;
      dateOfBirth: Date;
      name: string;
    };
    witnessOnePhotoProofStatus: boolean;
    witnessTwoDetails: {
      address: string;
      age: number;
      dateOfBirth: Date;
      name: string;
    };
    witnessTwoPhotoProofStatus: boolean;
    __v: number;
    _id: string;
  };
}

export interface checkUserDocument {
  husbandSchoolLeavingCertificateStatus: boolean;
  wifeSchoolLeavingCertificateStatus: boolean;
  witnessOnePhotoProofStatus: boolean;
  witnessTwoPhotoProofStatus: boolean;
  agreementStampStatus: boolean;
  husbandPhotoIdProofStatus: boolean;
  wifePhotoIdProofStatus: boolean;
  priestPhotoIdProofStatus: boolean;
  marriageEvidenceStatus: boolean;
}
