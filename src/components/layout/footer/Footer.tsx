export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <h1>{`© ${currentYear} by Lucas barberis Pérez`}</h1>
    </footer>
  );
}
