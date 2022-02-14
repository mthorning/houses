const Iframe = ({ src }) => (
  <iframe
    {...{ src }}
    style={{ display: "block", width: "100%", height: "400px", margin: "16px" }}
  />
);

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <ul>
        <Iframe src="/zoopla" />
        <Iframe src="https://www.rightmove.co.uk/property-for-sale/find.html?locationIdentifier=REGION%5E1365&minBedrooms=2&maxPrice=550000&minPrice=300000&radius=3.0&sortType=6&propertyTypes=detached%2Csemi-detached%2Cterraced&primaryDisplayPropertyType=houses&includeSSTC=false&mustHave=&dontShow=&furnishTypes=&keywords=" />
      </ul>
    </div>
  );
}
