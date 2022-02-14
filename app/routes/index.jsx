const Iframe = ({ src }) => (
  <iframe
    {...{ src }}
    style={{
      display: "block",
      width: "100%",
      height: "400px",
      margin: "0 auto 16px",
    }}
  />
);

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Iframe src="/zoopla" />
      <Iframe src="/rightmove" />
      <Iframe src="/onthemarket" />
    </div>
  );
}
