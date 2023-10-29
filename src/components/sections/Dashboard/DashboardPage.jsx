import React, { useState } from "react";
import "../../../assets/css/DashboardPage.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import UnfoldMoreRoundedIcon from "@mui/icons-material/UnfoldMoreRounded";
import { styled } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CardActions from "@mui/material/CardActions";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";

import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const DashboardPage = () => {
  const [isChecked, setChecked] = useState(false);
  const [rows, setRows] = useState([
    {
      id: 1,
      Campaigns: "Cosmetic",
      Clicks: "712",
      Cost: "USD 4,272",
      Conversions: "8",
      Revenue: "USD 16,568",
    },
    {
      id: 2,
      Campaigns: "Serums",
      Clicks: "3,961",
      Cost: "USD 27,331",
      Conversions: "115",
      Revenue: "USD 362,526",
    },
    {
      id: 3,
      Campaigns: "Facewash",
      Clicks: "9,462",
      Cost: "USD 76,831",
      Conversions: "123",
      Revenue: "USD 266,800",
    },
    {
      id: 4,
      Campaigns: "Shampoos",
      Clicks: "439",
      Cost: "USD 2,151",
      Conversions: "5",
      Revenue: "USD 11,029",
    },
    {
      id: 5,
      Campaigns: "Conditioners",
      Clicks: "1680",
      Cost: "USD 3864",
      Conversions: "49",
      Revenue: "USD 175,245",
    },
    {
      id: 6,
      Campaigns: "Facewash 2",
      Clicks: "4978",
      Cost: "USD 29,370",
      Conversions: "189",
      Revenue: "USD 623,106",
    },
    {
      id: 7,
      Campaigns: "Total",
      Clicks: "26,510",
      Cost: "USD 1,43,819",
      Conversions: "489",
      Revenue: "USD 15,73,563",
    },
  ]);

  const [rows2, setRows2] = useState([
    {
      id: 1,
      Group: "Male",
      Clicks: "348",
      Cost: "USD 12,528",
      Conversions: "42",
      Revenue: "USD 62,119",
    },
    {
      id: 2,
      Group: "Female",
      Clicks: "692",
      Cost: "USD 24,912",
      Conversions: "35",
      Revenue: "USD 5,175",
    },
    {
      id: 3,
      Group: "Unknown",
      Clicks: "105",
      Cost: "USD 3,943",
      Conversions: "3",
      Revenue: "USD 4,489",
    },
    {
      id: 4,
      Group: "Total",
      Clicks: "1,145",
      Cost: "USD 41,383",
      Conversions: "80",
      Revenue: "USD 71,782",
    },
  ]);

  const [data, setData] = useState([
    { value: 40, label: "Male" },
    { value: 35, label: "Female" },
    { value: 25, label: "Unknown" },
  ]);

  const selectOption = [
    { label: "Clicks", value: "Clicks " },
    { label: "Clicks 1", value: "Clicks 1" },
    { label: "Clicks 2", value: "Clicks 2" },
    { label: "Clicks 3", value: "Clicks 3" },
  ];

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const handleDonutClick = () => {
    setChecked(!isChecked);
    // Handle Donut click
  };

  const handleTableClick = () => {
    setChecked(!isChecked);
    // Handle Table click
  };

  const CustomLabel = ({ text, x, y }) => (
    <StyledText x={x} y={y}>
      {text}
    </StyledText>
  );

  return (
    <div className="row dashboard">
      <div className="containerContent">
        <div
          className="row col-12 left-box"
          style={{ height: "100vh", backgroundColor: "#F4F5FA" }}
        >
          <div className="col-6" style={{ height: "100vh" }}>
            <div
              style={{
                marginTop: "20px",
                marginLeft: "20px",
              }}
            >
              <ThemeProvider theme={theme}>
                <Card>
                  <CustomCardHeader
                    title="Ad Insights"
                    action={
                      <IconButton aria-label="settings">
                        <HelpOutlineIcon
                          style={{
                            color: "rgba(9, 9, 9, 0.2)",
                            marginRight: "10px",
                            marginTop: "5px",
                          }}
                        />
                      </IconButton>
                    }
                    style={{
                      borderBottom: "1px solid rgba(224, 224, 224, 1)",
                      fontSize: "10px",
                    }}
                  />
                  <CardContent style={{ padding: "0px !important" }}>
                    <TableContainer>
                      <Table style={{ margin: 0, padding: 0 }}>
                        <TableHead>
                          <TableRow>
                            <TableCell align="left">
                              Campaigns
                              <IconButton size="small">
                                <UnfoldMoreRoundedIcon
                                  style={{ color: "rgba(9, 9, 9, 0.2)" }}
                                />
                              </IconButton>
                            </TableCell>
                            <TableCell align="right">
                              Clicks
                              <IconButton size="small">
                                <UnfoldMoreRoundedIcon
                                  style={{ color: "rgba(9, 9, 9, 0.2)" }}
                                />
                              </IconButton>
                            </TableCell>
                            <TableCell align="right">
                              Cost
                              <IconButton size="small">
                                <UnfoldMoreRoundedIcon
                                  style={{ color: "rgba(9, 9, 9, 0.2)" }}
                                />
                              </IconButton>
                            </TableCell>
                            <TableCell align="right">
                              Conversions
                              <IconButton size="small">
                                <UnfoldMoreRoundedIcon
                                  style={{ color: "rgba(9, 9, 9, 0.2)" }}
                                />
                              </IconButton>
                            </TableCell>
                            <TableCell align="right">
                              Revenue
                              <IconButton size="small">
                                <UnfoldMoreRoundedIcon
                                  style={{ color: "rgba(9, 9, 9, 0.2)" }}
                                />
                              </IconButton>
                            </TableCell>
                            {/* Add more TableCell components for additional columns */}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              key={row.id}
                              style={{
                                borderBottom:
                                  "1px solid rgba(224, 224, 224, 1)",
                              }}
                            >
                              <TableCell align="left">
                                {row.Campaigns}
                              </TableCell>
                              <TableCell align="right">{row.Clicks}</TableCell>
                              <TableCell align="right">{row.Cost}</TableCell>
                              <TableCell align="right">
                                {row.Conversions}
                              </TableCell>
                              <TableCell align="right">{row.Revenue}</TableCell>
                              {/* Add more TableCell components for additional columns */}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </CardContent>
                </Card>
              </ThemeProvider>
            </div>
          </div>
          <div className="col-6">
            <div className="right-box">
              <div
                className="row"
                style={{
                  marginTop: "20px",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
              >
                <ThemeProvider theme={theme}>
                  <Card style={{ height: "350px" }}>
                    <CustomCardHeader
                      title="Ad Insights"
                      action={
                        <IconButton aria-label="settings">
                          <div className="custom-select-wrapper">
                            <select
                              value="Clicks"
                              displayEmpty
                              inputProps={{ "aria-label": "Select" }}
                              style={{
                                padding: "0px !important",
                                marginRight: "10px",
                              }}
                              className="form-control custom-select"
                            >
                              {selectOption.map((option) => (
                                <option key={option.value} value={option.label}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                            <div className="arrow">&#9660;</div>
                          </div>
                          <HelpOutlineIcon
                            style={{
                              color: "rgba(9, 9, 9, 0.2)",
                              marginRight: "10px",
                              marginTop: "5px",
                            }}
                          />
                        </IconButton>
                      }
                      style={{
                        borderBottom: "1px solid rgba(224, 224, 224, 1)",
                        fontSize: "10px",
                      }}
                    />
                    <CardContent>
                      {isChecked ? (
                        <TableContainer>
                          <Table style={{ margin: 0, padding: 0 }}>
                            <TableHead>
                              <TableRow>
                                <TableCell align="left">
                                  Group
                                  <IconButton size="small">
                                    <UnfoldMoreRoundedIcon
                                      style={{ color: "rgba(9, 9, 9, 0.2)" }}
                                    />
                                  </IconButton>
                                </TableCell>
                                <TableCell align="right">
                                  Clicks
                                  <IconButton size="small">
                                    <UnfoldMoreRoundedIcon
                                      style={{ color: "rgba(9, 9, 9, 0.2)" }}
                                    />
                                  </IconButton>
                                </TableCell>
                                <TableCell align="right">
                                  Cost
                                  <IconButton size="small">
                                    <UnfoldMoreRoundedIcon
                                      style={{ color: "rgba(9, 9, 9, 0.2)" }}
                                    />
                                  </IconButton>
                                </TableCell>
                                <TableCell align="right">
                                  Conversions
                                  <IconButton size="small">
                                    <UnfoldMoreRoundedIcon
                                      style={{ color: "rgba(9, 9, 9, 0.2)" }}
                                    />
                                  </IconButton>
                                </TableCell>
                                <TableCell align="right">
                                  Revenue
                                  <IconButton size="small">
                                    <UnfoldMoreRoundedIcon
                                      style={{ color: "rgba(9, 9, 9, 0.2)" }}
                                    />
                                  </IconButton>
                                </TableCell>
                                {/* Add more TableCell components for additional columns */}
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows2.map((row) => (
                                <TableRow
                                  key={row.id}
                                  style={{
                                    borderBottom:
                                      "1px solid rgba(224, 224, 224, 1)",
                                  }}
                                >
                                  <TableCell align="left">
                                    {row.Group}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.Clicks}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.Cost}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.Conversions}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.Revenue}
                                  </TableCell>
                                  {/* Add more TableCell components for additional columns */}
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      ) : (
                        <PieChart
                          series={[{ data, innerRadius: 80 }]}
                          {...size}
                          colors={palette}
                          labelComponent={CustomLabel}
                        >
                          <PieCenterLabel></PieCenterLabel>
                        </PieChart>
                      )}
                    </CardContent>
                    <CardActions
                      style={{
                        position: "absolute",
                        bottom: 370,
                        right: 40,
                        marginRight: "16px",
                        marginBottom: "8px",
                      }}
                    >
                      <input
                        type="checkbox"
                        id="circle"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        style={{ display: "none" }}
                      />
                      <label for="circle">
                        <IconButton
                          className={`donut ${isChecked ? "checked" : ""}`}
                          onClick={handleDonutClick}
                          style={{ margin: "0px !important" , color: isChecked ? "black" : "white" }}
                          disableRipple
                        >
                          <DonutLargeIcon />
                        </IconButton>
                        <IconButton
                          className={`table ${isChecked ? "checked" : ""}`}
                          onClick={handleTableClick}
                          style={{ margin: 0,color: isChecked ? "white" : "black" }}
                          disableRipple
                        >
                          <TableChartOutlinedIcon />
                        </IconButton>
                      </label>
                    </CardActions>
                  </Card>
                </ThemeProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

const CustomCardHeader = styled(CardHeader)({
  padding: "5px !important",
});

const theme = createTheme({
  typography: {
    fontSize: 12, // Set the default font size for the entire application
    padding: 0,
    margin: "10px 10px 10px 10px",
    marginTop: "20px !important",
  },
});

const size = {
  width: 400,
  height: 250,
};

const palette = [
  "#ED7D31",
  "#00A9FF",
  "#192655",
  // '#00A9FF', '#192655', '#ED7D31'
];

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}
