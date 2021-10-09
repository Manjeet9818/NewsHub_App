import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
      let {title,description,imageUrl,newsUrl,author,date,source} = this.props
    return (
      <div className="card" >
        <div className="card"  style={{width: ''}}>
          <img src={!imageUrl?"https://images.livemint.com/img/2021/10/05/600x338/ab050ab0-b566-11ea-8c60-84ade1c10181_1592957307597_1633411403464.jpg":imageUrl } className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<span class="badge bg-secondary">New</span><span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}
           </span></h5>

            <p className="card-text">{description}
            </p>
            <p class="card-text"><small class="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()} </small></p>
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
