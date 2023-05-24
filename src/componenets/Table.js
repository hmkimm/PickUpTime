import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function StripedRowExample() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [boardingTime, setBoardingTime] = useState("");
  const [landingTime, setLandingTime] = useState("");

  const handleBoarding = () => {
    if(!boardingTime) {
    setBoardingTime(currentTime.toLocaleTimeString());
 }
  };
  const handleLanding = () => {
    if(boardingTime && !landingTime) {
    setLandingTime(currentTime.toLocaleTimeString()) }
  }
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
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>성함</th>
          <th>승차 시간</th>
          <th>하차 시간</th>
        </tr>
      </thead>
      <tbody>
        <tr>
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
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Jacob</td>
          <td>Jacob</td>
       
        </tr>
        <tr>
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
