import { Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ApporvalTabel from "@components/admin/ApprovalTabel";
import styled from "styled-components";

function SearchPage() {
  const options = [
    {
      value: "1",
      label: "사원명",
    },
    {
      value: "2",
      label: "사원번호",
    },
  ];

  return (
    <Search>
      <div className="searchBar">
        <div className="container">
          <Select defaultValue="1" options={options} />
          <input />
          <SearchOutlined />
        </div>
      </div>
      <div className="info">
        <h3>기본정보</h3>
        <div className="container">
          <ul>
            <li>
              <p>사원명</p>
              <p>홍길동</p>
            </li>
            <li>
              <p>사원번호</p>
              <p>20230001</p>
            </li>
            <li>
              <p>입사일</p>
              <p>2023.07.29</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="tabel">
        <h3>연차 / 당직</h3>
        <div className="details">
          <ApporvalTabel tableTitle={"결재 대기"} />
          <ApporvalTabel tableTitle={"결재 완료"} />
        </div>
      </div>
    </Search>
  );
}

export default SearchPage;

const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0 0;

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .searchBar {
    margin-bottom: 30px;
    .container {
      position: relative;
      display: grid;
      grid-template-columns: 100px auto;
      align-items: center;
      width: 700px;
      height: 50px;
      padding: 5px 10px;
      border-radius: 10px;
      box-sizing: border-box;
      background-color: #fff;
      box-shadow: #e2e2e2 0px 5px 10px;

      .ant-select-selector {
        border: none;
      }

      input {
        height: 100%;
        border: none;
        outline: none;
        padding-bottom: 3px;
        font-size: 14px;
        text-indent: 10px;
      }
      .anticon-search {
        position: absolute;
        height: 16px;
        top: 0;
        bottom: 0;
        right: 13px;
        margin: auto 0;
        color: #626262;
      }
    }
  }

  .info {
    width: 700px;

    .container {
      padding: 20px 30px 30px;
      border-radius: 10px;
      box-sizing: border-box;
      background-color: #fff;
      box-shadow: #e2e2e2 0px 5px 10px;

      ul {
        width: 30%;
        li {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }

  .tabel {
    margin-top: 30px;
    .details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 700px;
      padding: 20px 30px 30px;
      border-radius: 10px;
      box-sizing: border-box;
      background-color: #fff;
      box-shadow: #e2e2e2 0px 5px 10px;
    }
  }
`;