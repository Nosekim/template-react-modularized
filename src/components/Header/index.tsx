import logo from "../../assets/cropped-wiipo-logo.png";

export const Header: React.FC = () => {
  return (
    <header className="w-full h-20 bg-white flex justify-between items-center px-10">
      <div className="flex items-center">
        <img src={logo} alt="" className="w-28" />
        <span className="ml-5">
          Serviços financeiros inteligentes e integrados
        </span>
      </div>
      <span>Empresa Apresentação WIIPO</span>
    </header>
  );
};
