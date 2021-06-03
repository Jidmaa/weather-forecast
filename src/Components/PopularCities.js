export default function PopularCities() {
  // TODO: Several carts with popular cities
  const cities = [
    {
      city: "Berlin",
      country: "Germany",
      lon: "52.5200",
      lat: "13.4050",
      src: "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      city: "Paris",
      country: "France",
      lon: "52.5200",
      lat: "13.4050",
      src: "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
  ];
  return (
    <h1 className="secondary">
      <span className="light-text "> Weather </span>
      Forecast
    </h1>
  );
}
