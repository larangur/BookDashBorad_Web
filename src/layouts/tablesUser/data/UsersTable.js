import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getAllUsers } from "../../../context/actions";
import { useTable } from "react-table";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";


const DataUsers = () => {
  const dispatch = useDispatch();
  const all_Users = useSelector((state) => state.all_Users["books"]);

  useEffect(() => {
    dispatch(getAllUsers());
    console.log("Ingres 1a Vez");
  }, []);
  console.log("all_usuario***", all_Users);
  let rows = [];


  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );


  if (Array.isArray(all_Users) && all_Users.length > 0) {
    console.log("all_Users es un array de longitud:", all_Users.length);
    for (let dataItems of all_Users) {
      //console.log("entro a data items");
      //console.log(dataItems.id, dataItems.title);
      let rowItem = {
        author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        // title: (
        //   <MDBox key={dataItems.id} display="flex" alignItems="center" lineHeight={1}>
        //     {/* <MDAvatar src={image} name={name} size="sm" /> */}
        //     <MDBox ml={2} lineHeight={1}>
        //       <MDTypography display="block" variant="button" fontWeight="medium">
        //         {dataItems.title}
        //       </MDTypography>
        //       <MDTypography variant="caption">{dataItems.author}</MDTypography>
        //     </MDBox>
        //   </MDBox>
        // ),
        // // title: (
        //   <AuthorTitle
        //     id={dataItems.id}
        //     nameTitle={dataItems.title}
        //     nameAuthor={dataItems.author}
        //   />
        // ),

        // author: (
        //   <MDTypography key={dataItems.id} display="block" variant="button" fontWeight="medium">
        //     {" "}
        //     {dataItems.author}
        //   </MDTypography>
        // ),
        // country: (
        //   <MDTypography key={dataItems.id} display="block" variant="button" fontWeight="medium">
        //     {" "}
        //     {dataItems.country}
        //   </MDTypography>
        // ),
        gender: (
          <MDTypography
            key={dataItems.id}
            display="block"
            variant="button"
            alignItems="left"
            fontWeight="medium"
          >
            {" "}
            {dataItems.gender}
          </MDTypography>
        ),
        // price: (
        //   <MDTypography key={dataItems.id} display="block" variant="button" fontWeight="medium">
        //     {" "}
        //     {dataItems.price}
        //   </MDTypography>
        // ),
        // editorial: (
        //   <MDTypography key={dataItems.id} display="block" variant="button" fontWeight="medium">
        //     {" "}
        //     {dataItems.editorial}
        //   </MDTypography>
        // ),
        action: (
          <MDTypography
            key={dataItems.id}
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MDTypography>
        ),
      };
      rows.push(rowItem);
    }
    console.log("dataRows..... ", rows);
  }

  return {
    columns: [
      { Header: "NAME", accessor: "name", width: "10%", align: "left" },
      { Header: "ROL", accessor: "email", width: "25%", align: "left" },
      { Header: "STATUS", accessor: "status", width: "25%", align: "left" },
      // { Header: "AUTHOR", accessor: "author", width: "25%", align: "left" },
      // { Header: "COUNTRY", accessor: "country", align: "left" },
      // { Header: "PRICE", accessor: "price", align: "center" },
      // { Header: "EDITORIAL", accessor: "editorial", align: "center" },
    ],
    rows,
  };
};

export default DataUsers;
