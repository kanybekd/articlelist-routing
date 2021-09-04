import React from "react";
import articles from "./article-content";
import {Link} from "react-router-dom"

class ArticlePage extends React.Component{
    render(){
        console.log(this.props.match.params,"<<<<")
        let newData = articles.filter(item=>item.name===this.props.match.params.name)
        let rest= articles.filter(item=>item.name!==this.props.match.params.name)
        console.log(newData,"<<<<newData")
        return(
            <div>
                <div>

                {
                    newData.map(item=>{
                        return(
                            <div>
                               <h2>{item.name}</h2>
                               <p>{item.contents[0]}</p>
                           </div>
                       )
                    }) 
                }
                </div>
                <div>
                    <h4>people also read these aticles....</h4>
                    {
                        rest.map(item=>{
                            return(
                                <Link to={`/article/${item.name}`}>
                                    <div>
                                    <h2>{item.name}</h2>
                                    <p>{item.contents[0].props.children.slice(0,100)}...</p>
                                </div>
                                </Link>
                           )
                        }) 
                    }
                </div>

            </div>
        )
    }
}

export default ArticlePage;