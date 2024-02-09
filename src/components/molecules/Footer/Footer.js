import "./Footer.css";

const Footer = () => {
  return (
    <div className="copyright">Copyright © {new Date().getFullYear()} {" "}
      <a href="#j" target="_blank" rel="noreferrer" className="copyright-link">Naol Taye</a>
    </div>
  )
}
export default Footer