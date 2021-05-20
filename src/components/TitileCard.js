import React, { Component } from 'react'

class TitileCard extends Component {
    render() {
        return (
            <div className="col-md-4 col-12">
                <div className="card mx-2 my-2 bg-secondary text-white" key={this.props.id}>
                  <div className="card-body">
                    {this.props.title}
                  </div>
                </div>
            </div>
        )
    }
}

export default TitileCard
