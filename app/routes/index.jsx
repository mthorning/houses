const Iframe = ({ domain, site, src }) => (
  <a style={{ display: "block" }} href={domain + src} target="_blank">
    <h1>{site}</h1>
    <iframe
      src={site + src}
      sandbox=""
      referrerPolicy="strict-origin-when-cross-origin"
      style={{
        display: "block",
        width: "90vw",
        height: "90vh",
        margin: "0 0 16px",
      }}
    />
  </a>
);

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Iframe
        domain="https://www.zoopla.co.uk"
        site="zoopla"
        src="/for-sale/houses/truro/?beds_min=2&page_size=25&price_max=600000&price_min=300000&view_type=list&q=Truro%2C%20Cornwall&radius=0&results_sort=newest_listings&search_source=facets"
      />
      <Iframe
        domain="https://www.rightmove.co.uk"
        site="rightmove"
        src="/property-for-sale/find.html?locationIdentifier=REGION%5E1365&minBedrooms=2&maxPrice=600000&minPrice=300000&radius=3.0&sortType=6&propertyTypes=detached%2Csemi-detached%2Cterraced&primaryDisplayPropertyType=houses&includeSSTC=false&mustHave=&dontShow=&furnishTypes=&keywords="
      />
      <Iframe
        domain="https://www.onthemarket.com"
        site="onthemarket"
        src="/for-sale/2-bed-property/truro/?max-price=600000&min-price=300000&prop-types=bungalows&prop-types=detached&prop-types=semi-detached&radius=3.0&view=grid"
      />
      <Iframe
        domain="https://www.purplebricks.co.uk"
        site="purplebricks"
        src="/search/property-for-sale/cornwall/truro?page=1&sortBy=2&location=truro&searchRadius=3&searchType=ForSale&soldOrLet=false&priceFrom=300000&priceTo=600000&bedroomsFrom=2&type=1&latitude=50.263195&longitude=-5.051041&betasearch=true"
      />
      <Iframe
        domain="https://www.home.co.uk"
        site="home"
        src="/search/results.htm?high=600000&low=300000&minbeds=2&maxbeds=&lat=50.2665&long=5.05096&location=truro&TOWN_SEARCH=1&MAP_SEARCH=&detached=true&semi=true&radius=2&sort=FOUND_DESC&found_since=&inc_sold=0&loose=1&showmap=0"
      />
    </div>
  );
}
