import { useState } from "react";
import { Button } from "@mui/material";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import { DownloadData, userDetail } from "../Api/DashBoardAction";
import { downloadUserData } from "../Interface/Interface";
import CustomModal from "../Modal/ApproveModal/ApproveModal";
import RejectModal from "../Modal/RejectModal/RejectionModal";
import ProfileModal from "../Modal/ProfileModal/ProfileModal";
import Loader from "../../Loader/Loader";

export default function Table(userDetails: any, modal: any) {
  const [openRejectModal, setOpenRejectModal] = useState<boolean>(false);
  const [currentIndex, setcurrentIndex] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);
  const [openProfileModal, setOpenProfileModel] = useState<boolean>(false);
  const [storeId, setStoreId] = useState<string>();
  const [loadingPage, setLoadingPage] = useState<boolean>(false);

  const downloadUserDatas = (userId: string) => {
    const Logintoken = sessionStorage.getItem("LoginToken");
    const obj = {
      loginToken: Logintoken,
      userId: userId,
    };
    DownloadData(obj)
      .then((response: downloadUserData) => {
        window.open(response?.data, "_blank");
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  const handleCloseModal = () => {
    setOpenRejectModal(false);
    modal = true;
  };

  const handleOpen = (index: string) => {
    setOpen(true);
    setcurrentIndex(index);
  };
  const handleRejectMOdal = (index: string) => {
    setOpenRejectModal(true);
    setcurrentIndex(index);
  };

  const handleOpenProfileModal = (index: string) => {
    setOpenProfileModel(true);
    setStoreId(index);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseProfileModal = () => setOpenProfileModel(false);
  const userDataApi = () => {
    const Logintoken = sessionStorage.getItem("LoginToken");
    const obj = {
      loginToken: Logintoken,
    };

    userDetail(obj)
      .then((response) => {})
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoadingPage(false);
      });
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "UserID", width: 300 },
    { field: "HusbandName", headerName: "Husband Name", width: 300 },
    { field: "WifeName", headerName: "Wife Name", width: 300 },
    { field: "MobileNo", headerName: "Mobile No", width: 200 },
    {
      field: "Status",
      headerName: "Status",
      width: 200,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 450,
      sortable: false,
      renderCell: (params: GridCellParams) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            color="success"
            sx={{ marginRight: "10px" }}
            onClick={() => handleOpen(params.row.id)}
          >
            Approve
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ marginRight: "10px" }}
            onClick={() => handleRejectMOdal(params.row.id)}
          >
            Reject
          </Button>
          <Button
            variant="contained"
            color="info"
            sx={{ marginRight: "10px" }}
            onClick={() => handleOpenProfileModal(params.row.id)}
          >
            View
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={() => downloadUserDatas(params.row.id)}
          >
            Download
          </Button>
        </div>
      ),
    },
  ];

  const rows = Array.isArray(userDetails?.userDetails)
    ? userDetails?.userDetails?.map((user: any, index: any) => {
        return {
          id: user?._id,
          HusbandName:
            user.husbandDetails.name + " " + user.husbandDetails.surname,
          WifeName: user.wifeDetails.name + " " + user.husbandDetails.surname,
          MobileNo: user.husbandDetails.mobileNumber,
          Status: user.applicationStatus,
        };
      })
    : [];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        style={{ border: "1px solid #ddd" }}
      />
      <CustomModal
        open={open}
        handleClose={handleClose}
        currentIndex={currentIndex}
        onApproveSuccess={userDataApi}
      />
      <RejectModal
        open={openRejectModal}
        handleClose={handleCloseModal}
        currentIndex={currentIndex || ""}
        onRejectSuccess={userDataApi}
      />
      <ProfileModal
        open={openProfileModal}
        handleClose={handleCloseProfileModal}
        storeId={storeId}
      />
      <Loader open={loadingPage} />
    </div>
  );
}
