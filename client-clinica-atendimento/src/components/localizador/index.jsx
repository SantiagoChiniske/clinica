import { useEffect, useState } from 'react';
import "./style.css"
import IconLocalizacao from "../../assets/icon-localizacao.svg"

const LocalizacaoUsuario = () => {
  const [cidade, setCidade] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const obterLocalizacao = async () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            const { latitude, longitude } = pos.coords;
            try {
              const resposta = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=pt`
              );
              const dados = await resposta.json();
              const cidadeEncontrada =
                dados.address.city ||
                dados.address.town ||
                dados.address.village ||
                dados.address.county;

              setCidade(cidadeEncontrada || 'Cidade não encontrada');
            } catch (e) {
              setErro('Erro ao buscar cidade.');
            }
          },
          (err) => {
            setErro('Permissão negada ou erro ao obter localização.');
          }
        );
      } else {
        setErro('Geolocalização não suportada no navegador.');
      }
    };

    obterLocalizacao();
  }, []);

  return (
    <div className='localizador'>
      {cidade ? (
        <p>Cidade: <strong>{cidade}</strong> <img src={IconLocalizacao} alt="Icone de localzação" /></p>
      ) : erro ? (
        <p>⚠️ {erro}</p>
      ) : (
        <p>📍 Detectando cidade...</p>
      )}
    </div>
  );
};

export default LocalizacaoUsuario;
