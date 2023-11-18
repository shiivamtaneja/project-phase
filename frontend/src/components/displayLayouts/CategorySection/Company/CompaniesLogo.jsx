import Slider from "react-slick";
import { companiesDetails } from "../../../../assets/constants";
import Image from "../../Image";
import { Link } from "react-router-dom";

const NextArrow = () => {
  return <br />
};

const PrevArrow = () => {
  return <br />
};

const CompaniesLogo = () => {
  const settings = {
    infinite: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      {companiesDetails.map(({ _id, imgSrc, companyLink }) => (
        <Link className="flex flex-col items-center justify-between" key={_id} to={`/${companyLink}`}>
          <Image imgSrc={imgSrc} className={""} />
        </Link>
      ))}
    </Slider>
  )
}

export default CompaniesLogo