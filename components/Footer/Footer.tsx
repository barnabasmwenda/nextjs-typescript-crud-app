import Link from "next/link";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer d-flex justify-content-center wrapper-padding px-4">
      <div className="d-flex align-items-center gap-3">
        <Link href="/help">Help</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </div>
    </footer>
  );
};

export default Footer;
