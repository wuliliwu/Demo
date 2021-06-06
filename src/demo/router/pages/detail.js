import React, {Component} from 'react';

class Detail extends Component {
  render() {
    return (
      <div>
        <h1>
          详情页 {this.props.match.params.id}
        </h1>

      </div>
    );
  }
}

export default Detail;