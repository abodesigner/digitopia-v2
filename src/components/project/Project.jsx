const Project = ({item}) => {
  return (
    <div className="project">
        <div className="conatiner-fluid">
            <div className="row">
            {
                item.map((val)=> {
                    return (
                        <div
                            class="col-md-4 col-sm-6 border-0 card shadow mb-4"
                            key={val.id}
                        >
                            <img
                                src={val.img}
                                class="card-img-top"
                                alt={val.title}
                            />
                            <div class="card-body">
                                <h5 class="card-title">{val.title}</h5>
                                <p class="card-text">{val.desc}</p>
                                <a href="/#" class="btn btn-primary">
                                    تفاصيل
                                </a>
                            </div>
                        </div>
                    );
                })
            }
            </div>
        </div>
    </div>
  )
}
export default Project