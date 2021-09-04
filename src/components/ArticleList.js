import React from "react";
import articles from "./article-content";
import {Link} from "react-router-dom"
function ArticleList(){
    console.log(articles,"<<<<")
    return(
        <div>
            {
                articles.map(item=>{
                    return(
                        <Link to={`/article/${item.name}`}>
                            <div>{item.title}</div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ArticleList;