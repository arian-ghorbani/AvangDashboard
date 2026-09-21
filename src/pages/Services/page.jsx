import { useContext, useEffect, useMemo } from "react";
import { ServicesContext } from "../../context/ServicesProvider";
import Card from "../../components/Card/Card";
import IsEmpty from "../../components/IsEmpty";
import Title from "../../components/Card/elements/Title";
import Price from "../../components/Card/elements/Price";
import toast from "react-hot-toast";
import { useSearch } from "/src/context/SearchProvider";

function Services() {
  const { allServices, setAllServices, isLoading, addService } =
    useContext(ServicesContext);
  const { searchQuery } = useSearch();

  useEffect(() => {
    document.title = "خدمات";
  }, []);

  const services = useMemo(() => {
    if (!searchQuery) return allServices;

    return allServices.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [allServices, searchQuery]);

  useEffect(() => {
    if (!isLoading && !allServices && services.length === 0)
      toast("سرویس مورد نظر یافت نشد!", {
        style: {
          backgroundColor: "#d08700",
          boxShadow: "0px 3px 15px 0px rgba(208, 135, 0, 0.25)",
        },
      });
  }, [services]);

  if (isLoading) return null;

  return allServices.length > 0 ? (
    <div className="grid grid-cols-6 p-1.5">
      {services.map((service) => (
        <Card key={service.title}>
          <Title>{service.title}</Title>
          <Price>
            {service.min_price.toLocaleString()}{" "}
            {service.max_price
              ? ` - ${service.max_price.toLocaleString()}`
              : null}
          </Price>
        </Card>
      ))}
    </div>
  ) : (
    <IsEmpty>خدماتی برای نمایش وجود ندارد!</IsEmpty>
  );
}

export default Services;
