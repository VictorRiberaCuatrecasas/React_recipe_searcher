import React from "react";
import style from "../css_modules/footer.module.css"

function Footer(){
    return(
        <div className={style.footervrc}>
            <div className="text-center py-3">
                &copy; { new Date().getFullYear() } |
                <strong><a href="https://victor-ribera.firebaseapp.com/" target="_blank">Victor Ribera</a></strong>
            </div>
        </div>
    )
}

export default Footer