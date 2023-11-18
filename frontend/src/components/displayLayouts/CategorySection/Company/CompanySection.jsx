import CompaniesLogo from "./CompaniesLogo";
import ExploreButton from "./ExploreButton";
import HeadingCompany from "./HeadingCompany";

const CompanySection = ({ heading, link }) => {
  return (
    <div className="py-10 section-margin ">
      <HeadingCompany heading={heading} link={link} />

      <div className="flex justify-center">
        <div className="w-[65vw] ">
          <CompaniesLogo />
        </div>
      </div>

      <div className="flex justify-center">
        <ExploreButton link={link} />
      </div>
    </div>
  )
}

export default CompanySection