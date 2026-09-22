import { useCallback, useContext, useEffect, useMemo } from "react";
import { ServicesContext } from "../../context/ServicesProvider";
import Card from "../../components/Card/Card";
import IsEmpty from "../../components/IsEmpty";
import Title from "../../components/Card/elements/Title";
import Price from "../../components/Card/elements/Price";
import toast from "react-hot-toast";
import { useSearch } from "/src/context/SearchProvider";
import AddNewItem from "/src/components/AddNewItem";

const serviceFields = [
  { id: "title", type: "text", placeholder: "نام سرویس" },
  { id: "min_price", type: "number", placeholder: "کمترین هزینه" },
  {
    id: "max_price",
    type: "number",
    placeholder: "بیشترین هزینه (اختیاری)",
    defaultValue: 0,
  },
];

function Services() {
  const { allServices, isLoading, addService } = useContext(ServicesContext);
  const { searchQuery } = useSearch();

  useEffect(() => {
    document.title = "خدمات";
  }, []);

  const handleAddService = useCallback(
    (newService) => {
      addService(newService);
    },
    [addService],
  );

  const services = useMemo(() => {
    if (!searchQuery) return allServices;
    return allServices.filter((s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [allServices, searchQuery]);

  useEffect(() => {
    if (!isLoading && searchQuery && services.length === 0) {
      toast("سرویس مورد نظر یافت نشد!", {
        style: {
          backgroundColor: "#d08700",
          boxShadow: "0px 3px 15px 0px rgba(208, 135, 0, 0.25)",
        },
      });
    }
  }, [services, isLoading, searchQuery]);

  if (isLoading) return null;

  return (
    <>
      <section className="section-tools h-12 px-1.5 sticky top-0 right-0 z-10 inline-flex items-center justify-start gap-x-1.5 bg-card shadow-sm rounded-full">
        <AddNewItem fields={serviceFields} onAdd={handleAddService}>
          سرویس
        </AddNewItem>
      </section>

      {allServices.length > 0 ? (
        <div className="grid grid-cols-4 gap-6 p-1.5">
          {services.map((service) => (
            <Card key={service.id ?? service.title}>
              <Title>{service.title}</Title>
              <Price>
                {service.max_price
                  ? `${service.max_price.toLocaleString()} - `
                  : null}
                {service.min_price.toLocaleString()}{" "}
              </Price>
            </Card>
          ))}
        </div>
      ) : (
        <IsEmpty>خدماتی برای نمایش وجود ندارد!</IsEmpty>
      )}
    </>
  );
}

export default Services;
