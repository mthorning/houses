const Iframe = ({ src }) => (
  <iframe {...{ src }} style={{ marginBottom: "16px" }} />
);

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <ul>
        <Iframe src="https://www.zoopla.co.uk/for-sale/houses/truro/?beds_min=2&page_size=25&price_max=550000&price_min=300000&view_type=list&q=Truro%2C%20Cornwall&radius=0&results_sort=newest_listings&search_source=facets" />
        <Iframe src="https://www.rightmove.co.uk/property-for-sale/find.html?locationIdentifier=REGION%5E1365&minBedrooms=2&maxPrice=550000&minPrice=300000&radius=3.0&sortType=6&propertyTypes=detached%2Csemi-detached%2Cterraced&primaryDisplayPropertyType=houses&includeSSTC=false&mustHave=&dontShow=&furnishTypes=&keywords=" />
      </ul>
    </div>
  );
}
