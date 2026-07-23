import { useContext } from "react";
import { ServicesContext } from "../../context/ServicesProvider";
import IsEmpty from "../../components/IsEmpty";

function Services() {
  const { allServices, setAllServices, isLoading, searchQuery, addService } =
    useContext(ServicesContext);

  return allServices.length > 0 ? (
    <div>Services</div>
  ) : (
    <IsEmpty>خدماتی برای نمایش وجود ندارد!</IsEmpty>
  );
}

export default Services;
