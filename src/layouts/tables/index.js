/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
console.log("projectsTableData:::::");
console.log(projectsTableData);

import DataBooks from "layouts/tables/data/BooksTable";
console.log("booksTableData:::::");
console.log(DataBooks);

function Tables() {
  //console.log("booksTableData::2:2:2:");
  //const { columns, rows } = authorsTableData();
  const { columns, rows } = DataBooks();
  console.log("*****DataBooks ****");
  console.log("columns", columns);
  console.log("rows ", rows);
  //console.log("newTab ", newTab);

  //const { columns: pColumns, rows: pRows } = projectsTableData();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}></Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h5" color="white">
                  Books
                </MDTypography>
                <MDTypography variant="h5" color="white">
                  adicionar
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={true}
                  entriesPerPage={false}
                  showTotalEntries={true}
                  noEndBorder={true}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Tables;
