import React from "react";


class Rater extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hoveredRating: '0', 
      currentRating: ''
    }
  }

  componentWillMount = () => {
    this.setState({
    currentRating: this.props.currentRating 
    }) 
  }

  handleOnMouseEnter = (e) => {
    this.setState({
      hoveredRating: e.target.dataset.rating, 
      currentRating: ''

    }) 
  } 
 
  handleOnMouseOut = (e) => {
    this.setState({
      hoveredRating: '', 
      currentRating: this.props.currentRating 
    }) 
  }

  handleOnClick = (e) => {
    this.props.handleClick(e) 
    this.setState({
      currentRating: e.target.dataset.rating
    })
  }

  render() {
    const { hoveredRating, currentRating } = this.state
    return(
      <div>Rate:
        {
           
        }
        <i className={ hoveredRating >= 1 || currentRating >=1 ? 'fas fa-star rating':'far fa-star rating'}
           data-rating={'1'}
           onClick={this.handleOnClick}
           onMouseEnter={this.handleOnMouseEnter}
           onMouseOut={this.handleOnMouseOut}></i> 
        <i className={ hoveredRating >= 2 || currentRating >=2 ? 'fas fa-star rating':'far fa-star rating'}
           data-rating={'2'}
           onClick={this.handleOnClick}
           onMouseEnter={this.handleOnMouseEnter}
           onMouseOut={this.handleOnMouseOut}></i> 
        <i className={ hoveredRating >= 3 || currentRating >=3 ? 'fas fa-star rating':'far fa-star rating'}
           data-rating={'3'}
           onClick={this.handleOnClick}
           onMouseEnter={this.handleOnMouseEnter}
           onMouseOut={this.handleOnMouseOut}></i> 
      <i className={ hoveredRating >= 4 || currentRating >=4 ? 'fas fa-star rating':'far fa-star rating'}
           data-rating={'4'}
           onClick={this.handleOnClick}
           onMouseEnter={this.handleOnMouseEnter}
           onMouseOut={this.handleOnMouseOut}></i> 
        <i className={ hoveredRating >= 5 || currentRating >=5 ? 'fas fa-star rating':'far fa-star rating'}
           data-rating={'5'}
           onClick={this.handleOnClick}
           onMouseEnter={this.handleOnMouseEnter}
           onMouseOut={this.handleOnMouseOut}></i> 
      </div>
    );
  }
}

export default Rater;
