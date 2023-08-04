import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getAllBooks } from "../../../context/actions";
import { useTable } from "react-table";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
// console.log("allBooks-pagina***");

const DataBooks = () => {
  const dispatch = useDispatch();
  const allBooks = useSelector((state) => state.allBooks["books"]);

  useEffect(() => {
    dispatch(getAllBooks());
    console.log("no esta logeado");
  }, []);
  console.log("allBooks***", allBooks);
  let rows = [];

  // Mueve la definición de AuthorTitle aquí afuera
  // const AuthorTitle = (id, nameTitle, nameAuthor) => (
  //   <MDBox key={id} display="flex" alignItems="center" lineHeight={1}>
  //     {/* <MDAvatar src={image} name={name} size="sm" /> */}
  //     <MDBox ml={2} lineHeight={1}>
  //       <MDTypography display="block" variant="button" fontWeight="medium">
  //         {nameTitle}
  //       </MDTypography>
  //       <MDTypography variant="caption">{nameAuthor}</MDTypography>
  //     </MDBox>
  //   </MDBox>
  // );

  // AuthorTitle.propTypes = {
  //   nameTitle: PropTypes.string.isRequired,
  //   nameAuthor: PropTypes.string.isRequired,
  // };

  if (Array.isArray(allBooks) && allBooks.length > 0) {
    console.log("allBooks es un array de longitud:", allBooks.length);
    for (let dataItems of allBooks) {
      //console.log("entro a data items");
      //console.log(dataItems.id, dataItems.title);
      let rowItem = {
        title: (
          <MDBox key={dataItems.id} display="flex" alignItems="center" lineHeight={1}>
            {/* <MDAvatar src={image} name={name} size="sm" /> */}
            <MDBox ml={2} lineHeight={1}>
              <MDTypography display="block" variant="button" fontWeight="medium">
                {dataItems.title}
              </MDTypography>
              <MDTypography variant="caption">{dataItems.author}</MDTypography>
            </MDBox>
          </MDBox>
        ),
        // title: (
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
      { Header: "TITLE / AUTHOR", accessor: "title", width: "10%", align: "left" },
      // { Header: "AUTHOR", accessor: "author", width: "25%", align: "left" },
      // { Header: "COUNTRY", accessor: "country", align: "left" },
      { Header: "GENDER", accessor: "gender", width: "25%", align: "left" },
      // { Header: "PRICE", accessor: "price", align: "center" },
      // { Header: "EDITORIAL", accessor: "editorial", align: "center" },
      { Header: "action", accessor: "action", width: "25%", align: "left" },
    ],
    rows,
  };
};

export default DataBooks;
