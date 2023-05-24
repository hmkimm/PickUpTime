import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import './Table.css'

function StripedRowExample() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [boardingTime, setBoardingTime] = useState("");
  const [landingTime, setLandingTime] = useState("");
  const [passengerList, setPassengerList] = useState('')

  const handleBoarding = () => {
    if (!boardingTime) {
      const passengerObj = {
        name: "홍길동",
        boarding: currentTime.toLocaleTimeString(),
        landing: "",
      };
      const passengerList = JSON.parse(localStorage.getItem("data")) || [];
      passengerList.push(passengerObj);
      localStorage.setItem("data", JSON.stringify(passengerList));
      setBoardingTime(passengerObj.boarding);
    }
  };
  const handleLanding = () => {
    if (boardingTime && !landingTime) {
      const passengerList = JSON.parse(localStorage.getItem("data")) || [];
      const passengerObj = passengerList.find(
        (passenger) => passenger.landing === ""
      ); // 이전 승차 정보(`passengerObj`)를 찾습니다.
      passengerObj.landing = currentTime.toLocaleTimeString(); // 승객 정보에 하차 시간을 추가합니다.
      localStorage.setItem("data", JSON.stringify(passengerList));
      setLandingTime(passengerObj.landing);
      setPassengerList(passengerList);
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => { 
      clearInterval(timer);
    };
    // return 꼭 하기
  },[]);
  return (
    <Table className="table">
      <thead >
        <tr >
          <th>#</th>
          <th>성함</th>
          <th>승차 시간</th>
          <th>하차 시간</th>
        </tr>
      </thead>
      <tbody>
      {/* <tr className="rows">
          <td colSpan={4}>홍길동</td>
        </tr> */}
        <tr className="rows">
  
          <td>1</td>
        
          <td>홍길동</td>
          <td>
            {boardingTime && <span>{boardingTime}</span>}
            <button onClick={handleBoarding}>승차</button>
            <button
              onClick={() => {
                setBoardingTime("");
              }}
            >
              삭제
            </button>
          </td>
          <td>
            {landingTime && <span>{landingTime}</span>}
            <button onClick={handleLanding}>하차</button>
            <button
              onClick={() => {
                setLandingTime("");
              }}
            >
              삭제
            </button>
          </td>
        </tr>
       
        <tr className="rows">
          <td>2</td>
          <td>Jacob</td>
          <td>Jacob</td>
          <td>Jacob</td>
       
        </tr>
        <tr className="rows">
          <td>3</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default StripedRowExample;
