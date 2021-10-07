import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    console.log("hello i am a constructor of new  component");
    console.log("constructor");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f4b3d3d74fa440bb9a2b788aed4629e1&page=1&pageSize=${this.props.pageSize}`;

    this.setState({loading:true})
    let data = await fetch(url);

    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles ,totalResults:parseData.totalResults,loading:false});
  }

  handleNextclick = async()=>{

if (!(this.state.page + 1>Math.ceil (this.state.totalResults/21)))
{

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f4b3d3d74fa440bb9a2b788aed4629e1&page=${
      this.state.page+1}&pageSize=${this.props.pageSize}`;
     this.setState({loading:true})
    let data = await fetch(url);

    let parseData = await data.json();
    console.log(parseData);

    console.log("next");
    this.setState({ page: this.state.page+1, 
                    articles: parseData.articles,
                   loading:false});
  };

} 
  
 
handlePreclick = async()=> {
    console.log("prevous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f4b3d3d74fa440bb9a2b788aed4629e1&page=${
        this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
     console.log("prevous");
    this.setState({ page: this.state.page-1, articles: parseData.articles,loading:false });
  };
  


  render() {
   console.log("render");
    return (
      <div className="container ">
       <h1 className="text-center">NewsHub-Top Most Heading</h1>
       {this.state.loading&&<Spinner/>}
        <div className="row">
          {!this.state.loading&&this.state.articles.map((element) => {
            return (
              <div className="col-md-4 " key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-warning"
            disabled={this.state.page <= 1}
            onClick={this.handlePreclick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize)}
            onClick={this.handleNextclick}
          >
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
