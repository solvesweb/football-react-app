import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import leaguesData from "../data/leagues.json";
import { useParams } from "react-router-dom";

export const LeagueDetails = () => {
  const { id } = useParams();
  const league = leaguesData.leagues.find((l) => l.id === parseInt(id));

  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-10">
        <h2 className="font-bold text-3xl px-10">{league.name}</h2>
        <div className="flex flex-col justify-center p-10">
          <table className="table width my-10">
            <thead>
              <tr>
                <th>Posición</th>
                <th>Equipo</th>
                <th>Puntos</th>
              </tr>
            </thead>
            <tbody>
              {league.teams.map((team) => (
                <tr key={team.name}>
                  <th>{team.position}</th>
                  <td>{team.name}</td>
                  <td>{team.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};
