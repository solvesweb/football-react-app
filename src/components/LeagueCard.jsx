import { Link } from "react-router-dom";

export const LeagueCard = ({ league }) => {
  return (
    <div className="card w-96 bg-base-200 shadow-xl m-8">
      <div className="card-body items-center text-center p-8">
        <img src={league.logo} alt="logo" className="w-52 rounded-full" width={50} height={50} />
        
        
        <div className="card-actions p-8">
          <Link to={`/${league.id}`}>
            <button className="btn btn-primary text-xl">{league.name}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
