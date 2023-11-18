import { Link } from "react-router-dom";

const ExploreButton = ({ link }) => {
  return <button className="border-2 border-[#00F641] px-6 py-3 rounded-md text-[#707070] font-semibold">
    <Link to={link}>
      Explore Other Companies
    </Link>
  </button>
}

export default ExploreButton