export default function NavbarBrand() {
  return (
    <div className="rounded-sm max-w-20 sm:max-w-36 hover:scale-105 transition-all  ">
      <a href="/" className="flex justify-center items-center w-full ">
        <img src="/lks-logo.svg" alt="logo" className="max-w-20 max-h-20" />
        <h1 className="hidden md:block font-bold text-lg md:text-2xl">LBP</h1>
      </a>
    </div>
  );
}
