import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useState, useEffect } from "react";
import { getDashboardData } from "../APICalls/getExtractedData";
import NavBar from "./navBar";
import Spinner from "./spinner";

export default function ExportedData() {
  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  async function getData() {
    setLoading(true);
    const displayData = await getDashboardData();
    setDashboardData(displayData.data);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(dashboardData);
  if (isLoading) {
    return (
      <div>
        <NavBar />
        <div className="flex justify-center pt-[20%]">
          <Spinner />
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />

      <div className="flex justify-center">
        <TableContainer style={{ width: "70%" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ "font-weight": "bold" }}>
                  First Name
                </TableCell>
                <TableCell style={{ "font-weight": "bold" }}>
                  Date of Issue
                </TableCell>
                <TableCell style={{ "font-weight": "bold" }}>
                  License Number
                </TableCell>
                <TableCell style={{ "font-weight": "bold" }}>
                  Issued By
                </TableCell>
                <TableCell style={{ "font-weight": "bold" }}>
                  Date of Expiry
                </TableCell>
                <TableCell style={{ "font-weight": "bold" }}>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dashboardData.map((item) => (
                <TableRow>
                  <TableCell>{item.first_name}</TableCell>
                  <TableCell>{item.date_of_issue}</TableCell>
                  <TableCell>{item.license_number}</TableCell>
                  <TableCell>{item.issued_by}</TableCell>
                  <TableCell>{item.date_of_expiry}</TableCell>
                  <TableCell>{item.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
