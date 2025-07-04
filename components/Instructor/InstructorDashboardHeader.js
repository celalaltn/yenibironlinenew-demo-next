import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

const InstructorDashboardHeader = () => {
  const user = useSelector(state => state?.AuthReducer?.user || null);
  return (
    <>
      <div className="rbt-dashboard-content-wrapper">
        <div className="tutor-bg-photo bg_image bg_image--22 height-350" />
        <div className="rbt-tutor-information">
          <div className="rbt-tutor-information-left">
            <div className="thumbnail rbt-avatars size-lg">
              <Image
                width={300}
                height={300}
                src="/images/team/avatar.jpg"
                alt="Instructor"
              />
            </div>
            <div className="tutor-content">
              <h5 className="title">{user ? `${user.firstName} ${user.lastName}` : 'Eğitmen'}</h5>
              <div className="rbt-review">
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <span className="rating-count"> (15 Reviews)</span>
              </div>
            </div>
          </div>
          <div className="rbt-tutor-information-right">
            <div className="tutor-btn">
              <Link className="rbt-btn btn-md hover-icon-reverse" href="/instructor-personal-courses">
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Yeni Kurs Oluştur</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorDashboardHeader;
