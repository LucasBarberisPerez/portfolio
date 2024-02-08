export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <h1>{`© ${currentYear} - Lucas Barberis Pérez`}</h1>
    </footer>
  );
}
