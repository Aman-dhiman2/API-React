import React, { Component } from 'react';
import axios from 'axios';

export class Applications extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],

        }
    }
    //LifeCycle 
    componentDidMount() {
        axios
          .get(
            "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=9cbdb624-b8c8-4879-8690-9416196074f6"
          )
          .then((response) => {
            // "This is Response !!"
            console.log(response.data);
            this.setState({ posts: response.data });
          })
          .catch((error) =>
            // "This is Error !!"
            console.log(error)
          )};
    }

    render() {
        const { posts } = this.state
        return (
            <div>
                List{
                    posts.length ?
                        posts.map(post => <div key={post.id}>{post.title}</div>): null
                }
            </div>
        )
    }
