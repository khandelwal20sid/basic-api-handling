import React, { Component } from 'react'
import axios from 'axios'
import TitileCard from './TitileCard';

class LoadAll extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            MyArr:[],
            VisibleItems: 10,            
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then((res) => {           
            this.setState({
                MyArr: res.data
            })
            console.log(this.state.MyArr);         
        }).catch((err) => {
            console.log("Error!");
        });        
    }
    
    loadMore = (e) => {       
        this.setState({
            VisibleItems: this.state.VisibleItems + 10
        })
    }

    render() {
        const { MyArr, VisibleItems } = this.state               
        return (
            <div>
                <div className="jumbotron bg-success">
                    <div className="display-3">Load All</div>
                </div>
                <div className="container-fluid p-0 py-3">
                    <div className="row mx-2">                  
                    {MyArr.slice(0, VisibleItems).map((data) =>{
                            return <TitileCard 
                                id={data.id}
                                title={data.title}
                            />
                        })}                        
                    </div>
                    {VisibleItems !== MyArr.length ?
                        <button type="button" className="btn btn-outline-secondary" onClick={this.loadMore}>Load More</button>:
                        null
                    }
                    
                </div>
            </div>
        )
    }
}

export default LoadAll
