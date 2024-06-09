const Card = ({ apiData, onClickItem }) => {
    return apiData.map((data, i) => {
        return (
            <div key={i} className={`card ${data.featured ? "featured" : ""}`}>
                <img src={`${data.logo}`} alt="" />
                <div className="card-info">
                    <div className="card-details">
                        <div className="card-title">
                            <h3>{data.company}</h3>
                            {data.new && <p className="new">NEW!</p>}
                            {data.featured && <p className="featured">FEATURED</p>}
                        </div>
                        <p className="position">{data.position}</p>
                        <div className="card-desc">
                            <p>{data.postedAt}</p>
                            <span></span>
                            <p>{data.contract}</p>
                            <span></span>
                            <p>{data.location}</p>
                        </div>
                    </div>
                    <span></span>
                    <div className="card-category">
                        <p className="category" onClick={() => onClickItem(data.role)}>
                            {data.role}
                        </p>
                        <p className="category" onClick={() => onClickItem(data.level)}>
                            {data.level}
                        </p>
                        {data.languages.map((language, index) => (
                            <p className="category" key={index} onClick={() => onClickItem(language)}>
                                {language}
                            </p>
                        ))}
                        {data.tools.map((tool, index) => (
                            <p className="category" key={index} onClick={() => onClickItem(tool)}>
                                {tool}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        );
    });
};

export default Card;
