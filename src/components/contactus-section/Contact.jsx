import "./contact.css";
const Contact = () => {
  return (
      <div className="contact-form bg-dark bg-gradient py-5">
          <h1 className="fw-bold text-center mb-5">تواصل معانا</h1>
          <div className="container">
              <div className="row">
                  <div className="col-md-5">
                      <form>
                          <div className="mb-3">
                              <input
                                  type="email"
                                  className="form-control"
                                  id="userEmail"
                                  placeholder="الايميل"
                              />
                          </div>

                          <div className="form-floating">
                              <textarea
                                  className="form-control"
                                  id="floatingTextarea2"
                                  style={{ height: "200px" }}
                              ></textarea>
                              <label htmlFor="floatingTextarea2">اكتب رسالتك</label>
                          </div>
                          <button
                              type="submit"
                              className="btn btn-outline-primary mt-3"
                          >
                              ارسال
                          </button>
                      </form>
                  </div>
                  <div className="col-md-7"></div>
              </div>
          </div>
      </div>
  );
}
export default Contact