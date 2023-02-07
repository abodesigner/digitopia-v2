import webIcon  from "../../assets/img/webdesign.png";
import mobileIcon  from "../../assets/img/mobileApp.png";
const Services = () => {
  return (
      <div className="services py-5">
          <div className="container">
              <h1 className="fw-bold text-center mb-5">خدماتنا</h1>
              <div className="row">
                  <div className="col-md-6">
                      <div className="service text-center">
                          <img
                              src={webIcon}
                              width="100px"
                              alt="webdesign"
                              class="img-fluid"
                          />
                          <h3 class="text-center fw-bold my-4">
                              تصميم المواقع الالمترونيه
                          </h3>
                          <p class="lead">
                              تصميم المواقع باحتراف باستخدام الأحدث التقنيات
                              والبرمجيات لتكون منافسًا لأكبر مواقع العالم،حيث
                              يتوافق التصميم مع جميع الأجهزة،لتكون سريعة وسهلة
                              أثناء التصفح.
                          </p>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="service text-center">
                          <img
                              src={mobileIcon}
                              width="100px"
                              alt="mobileIcons"
                              class="img-fluid"
                          />
                          <h3 class="text-center fw-bold my-4">
                              تصميم وبرمجة تطبيقات الموبايل
                          </h3>
                          <p class="lead">
                              يمكّننا تحويل الأفكار والخدمات إلى تطبيقات تفاعلية
                              ناجحة، من خلال توفير البرمجة وتطوير البرامج
                              والتطبيقات التفاعلية وفق أفضل المعايير الفنية
                              والتحقق من الجودة العالية ، بدءًا من التخطيط
                              والتصميم والبرمجة والتطوير والاختبار والتحليل وحتى
                              النشر والتسويق.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
export default Services