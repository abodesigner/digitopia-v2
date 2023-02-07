import "./about.css";
import aboutusImage from "../../assets/img/aboutus.jpg";

const About = () => {
  return (
      <div className="aboutus bg-light">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-lg-6">
                      <div className="text text-center">
                          <h1 className="text-heading fw-bold mb-4 pt-5">من نحن</h1>
                          <p className="lead">
                              ديجيتوبيا هي شركة مصرية متخصصة في برمجة وتصميم
                              تطبيقات الهاتف المحمول وخدمات تصميم الويب ، ومقرها
                              في القاهرة ، مصر. تأسست الشركة من قبل فريق من
                              الشباب الطموح من المحترفين في مجال حلول تطبيقات
                              الهاتف المحمول للمواقع الإلكترونية. ديجيتوبيا
                              مستعدة لتلبية جميع احتياجات الشركات والأفراد
                              بطريقة احترافية ، وينصب اهتمامنا دائمًا على إرضاء
                              عملائنا من خلال تقديم أفضل جودة في خدماتنا.
                          </p>
                      </div>
                  </div>
                  <div className="col-lg-6 px-0">
                      <div className="aboutus-bg">
                          <img src={aboutusImage} alt="" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
export default About