import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  PointElement
);

const Container = styled.div`
  width: 1510px;
  background: #f8fafb;
  padding: 0px;
  margin: 0px;
  display: flex;
`;

// -------------------------------------------> Sidebar Start
const Sidebar = styled.div`
  width: 20%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 139px;
  height: 31px;
  gap: 5px;
  margin-top: 25px;
  div {
    font-family: "Alata";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 23px;
    letter-spacing: -0.01em;
    color: #000000;

    span {
      color: #0561fc;
    }
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0px;
  margin-top: 40px;
  width: 70%;
`;

const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #aeb9be;
  gap: 12px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  padding: 5px 12px;
  span {
    height: 15px;
    width: 15px;
    background-color: #fb7b7b;
    border-radius: 50%;
    display: inline-block;
  }
  div {
    display: flex;
    gap: 12px;
  }
`;

const Company = styled.div`
  width: 207px;
  height: 56px;
  background-color: #e9f0f3;
  display: flex;
  padding: 10px 10px;
  border-radius: 8px;
  margin-top: 267px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 95%;
    img {
      width: 35px;
      height: 35px;
    }
    span {
      color: #abb7bc;
      font-size: 12px;
      font-weight: 400;
    }
  }
`;

// -------------------------------------------> Navbar Start
const Navbar = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
`;

const Features = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-right: 6%;
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    font-weight: 700;
    color: #000000;
    font-size: 15px;
  }
  img {
    width: 35px;
    height: 35px;
  }
  span {
    img {
      width: 8px;
      height: 8px;
    }
  }
`;

const Box = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  background-color: #e7edf0;
  display: flex;
  justify-content: center;
  position: relative;
  img {
    width: 22px;
  }
  span {
    height: 11px;
    width: 11px;
    right: -2px;
    top: -2px;
    background-color: #fb7b7b;
    border-radius: 50%;
    position: absolute;
  }
`;

const Search = styled.div`
  width: 470px;
  height: 45px;
  background-color: #f8fafb;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 1px 25px;
  gap: 12px;
  margin-left: 50px;
  p {
    font-size: 14px;
    color: #c1cace;
    font-weight: 400;
  }
`;

const Right = styled.div`
  width: 80%;
`;

// -------------------------------------------> Analytics Start
const Analytics = styled.div`
  width: 90%;
  height: 154px;
  margin-left: 50px;
  margin-top: 25px;
  div {
    color: rgba(0, 0, 0, 1);
    font-size: 16px;
    font-weight: 700;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }
`;

const Cards = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
  padding: 0;
`;

const Card = styled.li`
  width: 25%;
  height: 123px;
  background-color: #ffffff;
  border-radius: 17px;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  gap: 10px;
  box-shadow: 0px 21px 94px rgba(0, 0, 0, 0.03);
  img {
    width: 55px;
    height: 55px;
  }
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.div`
  p {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #93a3ab;
    line-height: 16.8px;
    margin: 0px;
    margin-bottom: 15px;
  }
  span {
    color: #000000;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 700;
    font-size: 20px;
  }
`;

const Tag = styled.span`
  width: 55px;
  height: 20px;
  border-radius: 12px;
  font-weight: 700;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 11.58px;
  text-align: center;
  margin-top: 40px;
`;

// -------------------------------------------> Report Start
const Report = styled.div`
  width: 90%;
  height: 393px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-left: 50px;
  margin-top: 70px;
`;

const Graph = styled.div`
  height: 393px;
  border-radius: 17px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px 0px 30px 40px;
  box-shadow: 0px 21px 94px rgba(0, 0, 0, 0.03);
`;

const LineGraph = styled.div`
  width: 95%;
  height: 85%;
`;

const BarGraph = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: end;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-left: 22px;
    p {
      font-size: 16px;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
      font-weight: 700;
      line-height: 17.92px;
      color: #000000;
    }
    select {
      border: 1px solid #d2dce1;
      border-radius: 15px;
      background-color: #ffffff;
      width: 82px;
      height: 24px;
      padding: 2px;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    width: 204px;
    height: 12px;
    display: flex;
    align-items: center;
    list-style: none;
    gap: 10px;
    margin-right: 22px;
    li {
      color: #c4ccd0;
      font-size: 11px;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
      font-weight: 700;
      line-height: 12.32px;
    }
  }
`;

// -------------------------------------------> Recent Orders Start
const Orders = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-top: 45px;
  width: 90%;
  height: 348px;
  margin-bottom: 10px;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 13.44px;
    color: #acb7bd;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  div {
    font-size: 16px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 700;
    line-height: 17.92px;
    color: #000000;
  }
`;

const Table = styled.ul`
  list-style: none;
  width: 96%;
  height: 313px;
  border-radius: 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  background-color: #ffffff;
  margin: 0px;
  box-shadow: 0px 21px 94px rgba(0, 0, 0, 0.03);
`;

const Row = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 906px;
  height: 37px;
  font-size: 13px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 700px;
  line-height: 15.6px;
  color: #a6a9aa;
`;

const Name = styled.div`
  line-height: 16.8px;
  color: #000000;
  font-size: 14px;
  width: 199px;
  height: 37px;
  display: flex;
  gap: 10px;
  img {
    width: 37px;
    height: 37px;
  }
  p {
    width: 152px;
    height: 17px;
  }
`;

const Qty = styled.div`
  line-height: 16.8px;
  color: #000000;
  font-size: 14px;
  width: 1px;
  height: 17px;
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  color: #a7aeb1;
  width: 117px;
  height: 17px;
`;

const Amount = styled.div`
  font-size: 14px;
  line-height: 16.8px;
  color: #3c3c3c;
  width: 56px;
  height: 17px;
`;

const Status = styled.div`
  font-size: 9px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 10.08px;
  width: 73px;
  height: 21px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const getOrders = () => {
  return [
    {
      item_name: "Iphone 13",
      quantity: 8,
      date: "January 20, 2022",
      amount: "$799.00",
      status: "Pending",
    },
    {
      item_name: "Xiaomi Redmi note 10",
      quantity: 10,
      date: "January 20, 2022",
      amount: "$788.02",
      status: "Pending",
    },
    {
      item_name: "Iphone 12 pro",
      quantity: 11,
      date: "January 22, 2022",
      amount: "$699.00",
      status: "Pending",
    },
  ];
};

const getAnalytics = () => {
  return {
    total_revenue: {
      value: "56.2k",
      currency: "$",
      change: "+3.4%",
    },
    today_revenue: {
      value: "$1024",
      change: "-5.5%",
    },
    item_sold: 22,
    user_active: 11,
  };
};

function App() {
  const orders = getOrders();
  const analytics = getAnalytics();

  useEffect(()=>{
    Object.entries(analytics).map(([key, value])=>{
    })
  },[])

  const data1 = {
    labels: ["Mon", "Tue", "Wed", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [
          0, 40, 40, 50, 40, 60, 65, 22, 55, 56, 69, 59, 69, 69, 20, 70, 90,
        ],
        backgroundColor: "transparent",
        borderColor: "#9FC1FB",
        pointBorderColor: "transparent",
        pointBorderWidth: 2,
        fill: true,
      },
    ],
  };
  const option1 = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {},
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: (value) => "$" + value + "K",
        },
      },
    },
  };

  const option2 = {
    responsive: true,
    plugins: {
      legend: false,
    },
    aspectRatio: 0.7,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 100,
        grid: {
          display: false,
        },
        display: false,
      },
    },
  };
  const data2 = {
    labels: ["M", "T", "W", "F", "S", "S"],
    datasets: [
      {
        data: [55, 80, 45, 20, 60, 10, 5],
        backgroundColor: "#0561FC",
        borderColor: "#9FC1FB",
        borderRadius: 6,
      },
    ],
  };

  return (
    <Container>
      {/* // -------------------------------------------------------> Sidebar Start */}
      <Sidebar>
        <Logo>
          <img src="images/Logo.png" alt="logo"></img>
          <div>
            Manager <span>Pro</span>
          </div>
        </Logo>
        <List>
          <Item style={{ background: "#EDF4FF", borderRadius: "8px" }}>
            <img src="images/Home.svg" alt="Dashboard"></img>
            <p style={{ color: "#0561FC" }}>Dashboard</p>
          </Item>
          <Item>
            <img src="images/order.svg" alt="Orders"></img>
            <p>Orders</p>
          </Item>
          <Item>
            <img src="images/user.svg" alt="Users"></img>
            <p>Users</p>
          </Item>
          <Item>
            <img src="images/items.svg"></img>
            <p>Items</p>
          </Item>
          <Item>
            <img src="images/transcation.svg"></img>
            <p>Transcations</p>
          </Item>
          <Item>
            <img src="images/report.svg"></img>
            <p>Reports</p>
          </Item>
        </List>
        <hr style={{ width: "80%", border: "1px solid #E4EBEF" }}></hr>
        <List style={{ marginTop: "15px" }}>
          <Item style={{ justifyContent: "space-between" }}>
            <div>
              <img src="images/messages.svg"></img>
              <p>Messages</p>
            </div>
            <span></span>
          </Item>
          <Item>
            <img src="images/support.svg"></img>
            <p>Support</p>
          </Item>
          <Item>
            <img src="images/setting.svg"></img>
            <p>Settings</p>
          </Item>
        </List>
        <Company>
          <div>
            <img src="images/company.png"></img>
            <p>
              <div>@Jabastinv</div>
              <span>Compnay</span>
            </p>
          </div>
          <img src="images/arrow.svg"></img>
        </Company>
      </Sidebar>

      <Right>
        {/* // -------------------------------------------------------> Navbar Start */}
        <Navbar>
          <Search>
            <img src="images/search.svg"></img>
            <p>Search</p>
          </Search>
          <Features>
            <Box>
              <img src="images/basket.svg"></img>
            </Box>
            <Box>
              <img src="images/icon.svg"></img>
              <span></span>
            </Box>
            <Avatar>
              <img src="images/avatar.png"></img>
              <p>Johny Larsen</p>
              <span>
                <img src="images/down-arrow.svg"></img>
              </span>
            </Avatar>
          </Features>
        </Navbar>

        {/* // -------------------------------------------------------> Analytics Start */}
        <Analytics>
          <div>Analytics</div>
          <Cards>
            <Card>
              <img src="images/card1.png"></img>
              <Detail>
                <Price>
                  <p>Total Revenue</p>
                  <span>{analytics.today_revenue.currency}{analytics.today_revenue.value}</span>
                </Price>
                <Tag style={{ backgroundColor: "#E3F4E3", color: "#65C565" }}>
                  {analytics.today_revenue.change}
                </Tag>
              </Detail>
            </Card>
            <Card>
              <img src="images/card2.png"></img>
              <Detail>
                <Price>
                  <p>Total Revenue</p>
                  <span>{analytics.today_revenue.value}</span>
                </Price>
                <Tag style={{ backgroundColor: "#F4E3E3", color: "#C56565" }}>
                  {analytics.today_revenue.change}
                </Tag>
              </Detail>
            </Card>
            <Card>
              <img src="images/card3.png"></img>
              <Detail>
                <Price>
                  <p>Items Sold Card</p>
                  <span>{analytics.item_sold}</span>
                </Price>
              </Detail>
            </Card>
            <Card>
              <img src="images/card4.png"></img>
              <Detail>
                <Price>
                  <p>Active Users</p>
                  <span>{analytics.user_active}</span>
                </Price>
              </Detail>
            </Card>
          </Cards>
        </Analytics>

        {/* // -------------------------------------------------------> Report Start */}
        <Report>
          <Graph style={{ width: "75%" }}>
            <Heading style={{ width: "100%" }}>
              <div>
                <p>Report</p>
                <select>
                  <option>Sales</option>
                </select>
              </div>
              <ul>
                <li>Day</li>
                <li style={{ color: "#0561FC" }}>Week</li>
                <li>Month</li>
                <li>Year</li>
              </ul>
            </Heading>
            <LineGraph>
              <Line data={data1} options={option1}></Line>
            </LineGraph>
          </Graph>
          <Graph style={{ width: "21%", padding: "15px", height:'105%' }}>
            <Heading style={{ width: "100%" }}>
              <div>
                <p>Visits</p>
              </div>
              <ul style={{ justifyContent: "flex-end" }}>
                <li>D</li>
                <li style={{ color: "#0561FC" }}>W</li>
                <li>M</li>
                <li>Y</li>
              </ul>
            </Heading>
            <BarGraph>
              <Bar data={data2} options={option2} />
            </BarGraph>
          </Graph>
        </Report>

        {/* // -------------------------------------------------------> Recent Orders Start */}
        <Orders>
          <Head>
            <div>Recent Orders</div>
            <p>
              <span>Go to Orders Page</span>
              <img src="images/right-arrow.svg"></img>
            </p>
          </Head>
          <Table>
            <Row
              style={{
                backgroundColor: "#F7F9FA",
                borderRadius: "4px",
              }}
            >
              <Name
                style={{
                  color: "#A6A9AA",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                <p>Item Name</p>
              </Name>
              <Qty
                style={{
                  color: "#A6A9AA",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                Qty
              </Qty>
              <Date
                style={{
                  color: "#A6A9AA",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                Order Data
              </Date>
              <Amount
                style={{
                  color: "#A6A9AA",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                Amount
              </Amount>
              <Status
                style={{
                  height: "16px",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                Status
              </Status>
            </Row>
            {orders.map((order) => {
              return (
                <Row>
                  <Name>
                    <p>{order.item_name}</p>
                  </Name>
                  <Qty>{order.quantity}</Qty>
                  <Date>{order.date}</Date>
                  <Amount>{order.amount}</Amount>
                  <Status
                    style={{ color: "#0561FC", backgroundColor: "#DFF0FF" }}
                  >
                    {order.status}
                  </Status>
                </Row>
              );
            })}
          </Table>
        </Orders>
      </Right>
    </Container>
  );
}

export default App;
