import React from "react";
import "./app-header.css"

const AppHeader = ({liked, allPosts}) => {
    let postsVariant;
    switch (allPosts) {
        case 1:
        case 21:
            postsVariant = 'пост';
            break;
        case 2:
        case 3:
        case 4:
            postsVariant = 'пости';
            break;
        default:
            postsVariant = 'постів';
            break;
    }
    return (
        <div className="app-header d-flex">
            <h1>Viktor Levenets</h1>
            <h2>{allPosts} {postsVariant}, з них {liked} вподобань</h2>
        </div>
    )
}

export default AppHeader;