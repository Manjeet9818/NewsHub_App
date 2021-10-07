import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
      let {title,description,imageUrl,newsUrl} = this.props
    return (
      <div className="card" my-3>
        <div className="card"  style={{width: '18rem'}}>
          <img src={!imageUrl?"https://images.livemint.com/img/2021/10/05/600x338/ab050ab0-b566-11ea-8c60-84ade1c10181_1592957307597_1633411403464.jpg":imageUrl } className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}
            </p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
