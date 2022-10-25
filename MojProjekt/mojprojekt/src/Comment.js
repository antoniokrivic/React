import React from 'react'
import './Comment.css';

function Comment() {
    return (
        <div class="comment-section">
        <span class="bold" id="comment">Comment section </span>
        <p class="bold">Komentari</p>
        <form action=""onsubmit="return false">
            <input type="text" id="commentInput"/>
            <button type="submit" onclick="addComment()">Komentiraj</button>
        </form>
        <div id="comments">
            <ul id="commentsList">
                <li>
                    <div class="avatar"></div><span>Bok, ovdje Antonio</span>
                </li>
                <li>
                    <div class="avatar"></div><span>Ovo je moja prva web stranica.</span>
                </li>
                <li>
                    <div class="avatar"></div><span>Osijek je super grad.</span>
                </li>
            </ul>
        </div>
    </div>
    );
}


export default Comment;


