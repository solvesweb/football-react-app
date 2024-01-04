import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LeagueCard } from "../components/LeagueCard";
import { leagues } from "../data/leagues";

export const Home = () => {
  return (
    <div>
      <Header />      
      <div className="flex flex-wrap justify-center p-10">
        {leagues.map((league) => (
          <LeagueCard key={league.id} league={league} />
        ))}
      </div>
      <Footer />
    </div>
  );
};
