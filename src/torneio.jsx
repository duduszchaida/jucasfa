import { useEffect } from "react";


const Torneio = () => {
  

  useEffect(() => {
    window.location.href = "/RegulamentoTorneio.pdf"; // Redireciona para o PDF na pasta public
  }, []);

  return null;
};

export default Torneio;
