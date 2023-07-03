import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: auto;
  height: auto;
  background: #f8fafb;
  padding: 0px;
  margin: 0px;
  display: flex;
`;

const Sidebar = styled.div`
  width: 273px;
  height: 1024px;
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

const Navbar = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 1240px;
  height: 70px;
  justify-content: space-between;
  align-items: center;
`;

const Features = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-right: 50px;
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p{
    font-weight: 700;
    color: #000000;
    font-size: 15px;
  }
  img {
    width: 35px;
    height: 35px;
  }
  span{
    img{
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
  span{
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
  width: 522.34px;
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
const Right = styled.div``;

function App() {
  return (
    <Container>
      <Sidebar>
        <Logo>
          <img src="images/Logo.png"></img>
          <div>
            Manager <span>Pro</span>
          </div>
        </Logo>
        <List>
          <Item style={{ background: "#EDF4FF", borderRadius: "8px" }}>
            <img src="images/Home.svg"></img>
            <p style={{ color: "#0561FC" }}>Dashboard</p>
          </Item>
          <Item>
            <img src="images/order.svg"></img>
            <p>Orders</p>
          </Item>
          <Item>
            <img src="images/user.svg"></img>
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
      </Right>
    </Container>
  );
}

export default App;
