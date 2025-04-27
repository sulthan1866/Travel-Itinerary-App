import { useState, useEffect } from "react";
import DarkModeButton from "../DarkModeButton";
import Header from "./Header";
import UpcommingTrip from "./UpcommingTrip";
import FlightDetails from "./FlightDetails";
import AccommodationCard from "./AccomodationCard";
import Activities from "./Activities";
import "./home.css";
import ActivitiesNav from "./ActivitiesNav";
import Footer from "./Footer";

const accommodations = [
  {
    name: "Shinagawa Prince Hotel",
    checkIn: "26.01.2025, 11:15 AM",
    checkOut: "28.01.2025, 10:00 AM",
    nights: 2,
    status: "Confirmed" as const,
    rating: "4.5 Very Good",
    imageUrl:
      "https://cdn.tatlerasia.com/asiatatler/i/hk/2020/01/09104644-ritz-carlton-tokyo-hotel_cover_2000x1126.jpeg",
  },
  {
    name: "Mercure Tokyo Hotel",
    checkIn: "28.04.2025, 11:15 AM",
    checkOut: "31.04.2025, 10:00 AM",
    nights: 3,
    status: "Confirmed" as const,
    rating: "3.5 Good",
    imageUrl:
      "https://www.trulyclassy.com/wp-content/uploads/2022/07/aman-tokyo-deluxe-l-690x388.jpg",
  },
  {
    name: "Kimpton Tokyo Hotel",
    checkIn: "5.05.2025, 9:15 AM",
    checkOut: "9.05.2025, 10:00 AM",
    nights: 4,
    status: "Pending" as const,
    rating: "4.9 Excellent",
    imageUrl:
      "https://tse2.mm.bing.net/th/id/OIP.AMGdbqHuUIwsbmAywqDv5gHaDt?rs=1&pid=ImgDetMain",
  },
  {
    name: "Flagstaff London Hotel",
    checkIn: "10.05.2025, 9:15 AM",
    checkOut: "14.05.2025, 10:00 AM",
    nights: 4,
    status: "Pending" as const,
    rating: "4.2 Very Good",
    imageUrl:
      "https://tse2.mm.bing.net/th/id/OIP.OU88pzwbj26mKrQ0z8s8xgHaE7?rs=1&pid=ImgDetMain",
  },
];

const activities = [
  {
    title: "Senso-ji Temple & Nakamise Shopping",
    time: "09:00 AM Morning",
    duration: "3 Months",
    pickUp: "From Hotel",
    imageUrl:
      "https://a.cdn-hotels.com/gdcs/production142/d475/ebbf63ca-7cbd-48e1-826d-0e65833a7a3d.jpg",
  },
  {
    title: "Tokyo Bay Ferry Ride",
    time: "01:00 PM Afternoon",
    duration: "2 Months",
    pickUp: "From Hotel",
    imageUrl:
      "https://thumbs.dreamstime.com/b/tourist-enjoy-sights-ferry-ride-tokyo-bay-japan-may-272006423.jpg",
  },
  {
    title: "Kimono Wearing Experience",
    time: "04:00 PM Evening",
    duration: "1 Month",
    pickUp: "From Hotel Street",
    imageUrl:
      "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_863,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/nwpsc6eep0doeiiggslc/LovelyKimonoExperienceinKyoto.jpg",
  },
  {
    title: "Tokyo Disneyland",
    time: "09:00 AM Morning",
    duration: "3 Months",
    pickUp: "From Disneyland",
    imageUrl:
      "https://th.bing.com/th/id/OIP.ZZdaglM7Qidv4z-XgAnzegHaEo?rs=1&pid=ImgDetMain",
  },
  {
    title: "Tokyo Tower",
    time: "01:00 PM Afternoon",
    duration: "2 Months",
    pickUp: "From Hotel",
    imageUrl: "https://roppongi.fr/wp-content/uploads/tokyo-tower.jpg",
  },
];

const MainDashboard = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem("isDark");
    if (saved !== null) setIsDark(saved === "true");
  }, []);

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      localStorage.setItem("isDark", String(!prev));
      return !prev;
    });
  };

  const bgClass = isDark ? "bg-dark text-white" : "bg-light text-dark";
  const seeColor = isDark ? "text-warning" : "text-primary";

  return (
    <div className={`min-vh-100 ${bgClass} py-4`}>
      <div className="container">
        <DarkModeButton isDark={isDark} toggleDarkMode={toggleDarkMode} />
        <Header
          name="Shhavi"
          pfpLink="https://www.isrtv.com/forums/uploads/monthly_2020_04/S_member_42298.png"
        />
        <div className={`  mb-4`}>
          <h5 className="mb-4">Your Upcoming Trip</h5>
          <div className="card-body p-0">
            <UpcommingTrip
              city="Tokyo"
              dateRange="21.04.2025 – 06.05.2025"
              imageUrl="https://gamma.tatacommunications.com/assets/wp-content/uploads/2020/12/Tokyo_Tower_Japan.jpg"
            />
          </div>
        </div>
        <div className={` mb-4`}>
          <div className="card-body p-0">
            <FlightDetails
              from="DEL"
              to="NRT"
              subFrom="Delhi,India"
              subTo="Narita, Tokyo"
              departDate="21.04.2025, 10:00 AM"
              imageUrl="https://img.freepik.com/premium-photo/high-detailed-white-plane-3d-rendering-blue-background-airplane-take-off-airline-concept_63135-4806.jpg?w=2000"
            />
          </div>
        </div>
        <div className="row">
          <h5 className="mb-3 col">Accommodation</h5>
          <u className={"col text-end " + seeColor}>See all</u>
        </div>
        <div className="d-flex flex-nowrap overflow-auto mb-4">
          {accommodations.map((acc, i) => (
            <div key={i} style={{ minWidth: 300 }}>
              <AccommodationCard {...acc} isDark={isDark} />
            </div>
          ))}
        </div>
        <ActivitiesNav totalActivities={5} isDark={isDark} />

        <Activities activities={activities} isDark={isDark} />
      </div>
      <Footer isDark={isDark} />
    </div>
  );
};

export default MainDashboard;
